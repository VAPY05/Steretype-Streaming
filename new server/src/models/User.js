const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, 'Profile with this username already exists!']
    },
    password: {
        type: String,
        required: true,
    },
})

userScheme.index({email: 1}, {
    collation: {
        locale: 'en',
        strength: 1
    }
})

const User = mongoose.model('User',userScheme)

module.exports = User