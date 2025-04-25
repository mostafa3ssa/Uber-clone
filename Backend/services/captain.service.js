const captainModel = require('../models/captain.model');


odule.exports.createCaptain = async ({
    fullName,
    email,
    password,
    color, 
    plate,
    capacity,
    vechileType
}) => {
    if(!fullName.firstName || !email || !password) {
        throw new Error('Please provide all required fields');
    }

    const captain = new captainModel({
        fullName,
        email,
        password,
        vechile: {
            color, 
            plate,
            capacity,
            vechileType
        }
    });
    await captain.save();
    return captain;
}