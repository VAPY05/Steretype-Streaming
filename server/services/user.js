const User = require('../models/User')
const bcrypt = require('bcrypt')
const {secretKey} = require('../config/env')
const jwt = require("jsonwebtoken")

exports.register = async(data) =>{
            const existing = User.findOne({username: data.username});
            if(!existing){
                const hashedPass = await bcrypt.hash(data.password, 10);
                const profile = await new User({username: data.username, password: hashedPass, email: data.email}).save();
                return profile;
            }else{
                return false;
            }

}

exports.login = async(data) =>{
    const profile = await User.findOne({username:data.username});
    const isValid = await bcrypt.compare(data.password, profile.password)
    if(isValid){
        const info = {
            profile,
            isValid
        }
        return [info, createSession(profile)]
    }else{
        return false;
    }
}

function createSession(user) {

    const payload = {
        email: user.email,
        _id: user._id
    }

    const accessToken = jwt.sign(payload, secretKey)

    return {
        email: user.email,
        accessToken,
        _id: user._id
    }

}


