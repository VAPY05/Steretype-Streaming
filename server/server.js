const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const cors = require('./middlewares/cors')

mongoose.connect('mongodb+srv://Owner:9qnAgqGC02UAK0X3@cluster0.ssrrz.mongodb.net/Stereotype',()=>{console.log('DB Connected')})
const app = express();

app.use(express.json())

app.use(cors());

app.use(routes)
app.listen(3030, ()=>console.log("Server is listening on part 3030"));