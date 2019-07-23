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
    useFindAndModify: false,
    reconnectTries: 2, // increasing doesn't help
    reconnectInterval: 1000,
    connectTimeoutMS: 2000,
    socketTimeoutMS: 2000,
    poolSize: 1 
}

mongoose.connect(process.env.DB_URI,config)
.then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err.message);
})


app.get("/",(req,res) =>{
    res.send('Its work!')
})

routes.init(app);

app.listen(process.env.PORT);