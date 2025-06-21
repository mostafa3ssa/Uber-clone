const captainModel = require('../models/captain.model');


module.exports.createCaptain = async ({
    fullName,
    email,
    password,
    vehicle
}) => {
    if(!fullName.firstName || !email || !password) {
        throw new Error('Please provide all required fields');
    }

    const captain = new captainModel({
        fullName,
        email,
        password,
        vehicle
    });
    await captain.save();
    return captain;
}