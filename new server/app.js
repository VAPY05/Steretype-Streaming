const express = require('express')
const mongoose = require('mongoose');
const routes = require('./routes');

const auth = require('./src/middlewares/auth');
const cors = require('./src/middlewares/cors');

async function start() {
    try{
        const db = await mongoose.connect('mongodb+srv://Owner:9qnAgqGC02UAK0X3@cluster0.ssrrz.mongodb.net/Stereotype')
        console.log("DB is connected");
    }catch(err){
        console.log(`Error connecting to database.`)
        return process.exit(1);
    }
    
    const app = express();

    app.use(express.json())
    app.use(cors())
    app.use(auth())
    app.use(routes)

    app.listen(3030,() => console.log(`REST Service started on port 3030`));
}

start()