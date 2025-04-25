const userModel = require('../models/user.model');


module.exports.createUser = async ({
    fullName,
    email,
    password,
    socket
}) => {
    if(!fullName.firstName || !email || !password) {
        throw new Error('Please provide all required fields');
    }

    const user = new userModel({
        fullName,
        email,
        password,
        socket
    });
    await user.save();
    return user;
}