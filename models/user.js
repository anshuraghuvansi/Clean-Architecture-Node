'use strict';

/*
    Models are the Entities of the clean Architecture 
*/

const mongoose  = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        index:true
    },
    password:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
},{collection:'users'});

module.exports = mongoose.model("User",UserSchema);