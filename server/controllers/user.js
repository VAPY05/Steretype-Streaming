const routes = require('express').Router();

const {register, login} = require('../services/user')

routes.post('/user/register',async(req,res)=>{
        const data = req.body
        const createdProfile = await register(data);
        if(createdProfile){
            res.status(201).json({createdProfile});
        }else{
            res.status(401).json({message:"Something went wrong"});
        }
})

routes.post('/user/login',async(req,res)=>{
    const data = req.body
        const obj = await login(data);
        if(obj){
            const profile = obj[0].profile
            const access = obj[1];
            res.status(200).json({access});
        }else{
            res.status(401).json({message:"Not Authorized"});
        }
})
 
module.exports = routes