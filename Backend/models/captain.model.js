const mongoose = require('mongoose');

const captainSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minLength: [3, 'First name must be at least 3 characters long'],
        },
        lastName: {
            type: String,
            minLength: [3, 'Last name must be at least 3 characters long'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/],
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },

    vechile: {
        color: {
            type: String,
            required: true,
            minLength: [3, 'Color must be at least 3 characters long'],
        },
        plate: {
            type: String,
            required: true,
            minLength: [3, 'Plate number must be at least 3 characters long'],
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1'],
        },
        vechileType: {
            type: String,
            enum: ['car', 'motorcycle', 'auto'],
            required: true,
        },
    },

    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        },
    }
    
});


captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, process.env.HASH_ROUNDS);
}
const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;