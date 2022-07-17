const User = require('../models/User')
const bcrypt = require('bcrypt')
const {secretKey} = require('../config/env')
const jwt = require("jsonwebtoken")

exports.register = async(data) =>{
            
                const hashedPass = await bcrypt.hash(data.password, 10);
                try{
                    const profile = await new User({username: data.username, password: hashedPass}).save();
                    return profile;
                }catch{
                    return false
                }
                
            }

exports.login = async(data) =>{
    const profile = await User.findOne({username:data.username});
    try{
        const isValid = await bcrypt.compare(data.password, profile.password)
        if(isValid){
            const info = {
                profile,
                isValid
            }
            return [info, createSession(profile)]
        }
    }catch{
        return false
    }
}

function createSession(user) {

    const payload = {
        email: user.username,
        _id: user._id
    }

    const accessToken = jwt.sign(payload, secretKey)

    return {
        email: user.username,
        accessToken,
        _id: user._id
    }

}


