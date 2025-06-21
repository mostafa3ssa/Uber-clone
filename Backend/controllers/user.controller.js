const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');


module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("hello from registerUser1");
        return res.status(400).json({errors: errors.array()});
    }

    const {fullName, email, password} = req.body;

    const isUserExists = await userModel.findOne({email});
    if (isUserExists) { 
        console.log("hello from registerUser2");
        return res.status(400).json({message: 'User already exists'});
    }
    

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        fullName,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();
    res.status(201).json({
        user, token
    });
}

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("hello from registerUser3");
        return res.status(400).json({errors: errors.array()});
    }
    console.log("hello from registerUser3, there are no errors");

    const {email, password} = req.body;

    const user = await userModel.findOne({email}).select('+password');
    if (!user) {
        console.log("hello from registerUser4");
        return res.status(401).json({message: 'Invalid email or password'});
    }

    const isMatch = await user.comparePasswrord(password);
    if (!isMatch) {
        return res.status(401).json({message: 'Invalid email or password'});
    }

    console.log("before generating token");

    const token = user.generateAuthToken();

    console.log("after generating token");

    res.cookie('token', token);
    res.status(200).json({ user, token });
}

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json({
        user: req.user
    });
}

module.exports.logoutUser = async (req, res, next) => {

    const token = req.cookies.token || req.headers['authorization'].split(' ')[1];

    await blacklistTokenModel.create({
        token
    });

    res.clearCookie('token');
    res.status(200).json({message: 'Logged out successfully'});
}