const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const JWT_SECRET = "1101010100000011111010101010101001111000111111001010101"
const blackList = new Set();

async function register(username, password){
        const hashedPass = await bcrypt.hash(password, 10);

        //create session token
        const user = new User({
            username,
            password: hashedPass
        })
        await user.save()

    //return result
    return createSession(user);
}

async function login(username, password){
    //verify password
    const user = await User.findOne({username});
    console.log(user)
    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw new Error('Incorrect username or password!');
    }

    return createSession(user);
}

function logout(token) {
    blackList.add(token);
}

function validateToken(token) {
    if(blackList.has(token)){
        throw new Error('Token is blacklisted');
    }
    return jwt.verify(token, JWT_SECRET); 
}

function createSession(user) {

    const payload = {
        _id: user._id,
        username: user.username,
    }

    const accessToken = jwt.sign(payload,JWT_SECRET)

    return {
        username: user.username,
        accessToken,
        _id: user._id
    }
}


module.exports = {
    register,
    login,
    logout,
    validateToken
}