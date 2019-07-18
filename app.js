'use strict'

const express   = require('express');
const mongoose  = require('mongoose');
const routes    = require('./routes')

require('dotenv').config();

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 


//database connection
const config = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
}

mongoose.connect(process.env.DB_URI,config)
.then(()=>{
    console.log("db connected");
    routes.init(app,mongoose);
}).catch((err)=>{
    console.log(err.message);
})

app.listen(process.env.PORT);