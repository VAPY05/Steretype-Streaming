const router = require('express').Router();
const errorMapper = require('../util/errorMapper');

const api = require('../services/user')

router.post('/user/register',async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password
    try{
        const result = await api.register(username, password);
        res.status(201).json(result)
    }catch(error){
        const message = errorMapper(error);
        res.status(400).json({message: "Username already exists!"})
    }
})

router.post('/user/login',async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    try{
        const result = await api.login(username, password)
        res.status(201).json(result);
    }catch(error){
        res.status(400).json({message: "Incorrect username or password!"})
    }
})

router.get("/user/logout",(req,res)=>{
    api.logout(req.headers["x-authorization"]);
    res.status(204).end()
})

module.exports = router
