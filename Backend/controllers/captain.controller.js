const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const blacklistTokenModel = require('../models/blacklistToken.model');
const {validationResult} = require('express-validator');

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }


    console.log(req.body);
    const {fullName, email, password, vehicle} = req.body;

    const {color, plate, capacity, vehicleType} = vehicle;
    console.log(fullName, email, password, color, plate, capacity, vehicleType);
    const isCaptainExists = await captainModel.findOne({email});
    if (isCaptainExists) {
        return res.status(400).json({message: 'Captain already exists'});
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        fullName,
        email,
        password: hashedPassword,
        vehicle
    });

    console.log(captain);

    const token = captain.generateAuthToken();
    res.status(201).json({
        captain, token
    });
}

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;

    const captain = await captainModel.findOne({email}).select('+password');
    if (!captain) {
        return res.status(401).json({message: 'Invalid email or password'});
    }

    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({message: 'Invalid email or password'});
    }

    const token = captain.generateAuthToken();

    res.cookie('token', token);
    res.status(200).json({ captain, token });
}

module.exports.getCaptainProfile = async (req, res, next) => {
    const captain = req.captain;

    res.status(200).json({captain});
}

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];


    await blacklistTokenModel.create({
            token
    });

    res.clearCookie('token');
    res.status(200).json({message: 'Logged out successfully'});
}
