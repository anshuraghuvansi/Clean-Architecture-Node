'use strict';

/*
    Clean Architecture : Repositories are the outermost layer is generally composed of frameworks and tools such as the Database
*/

const User = require('../models/user');

class UserRepository{

    constructor(db){
        this.db = db;
    }

    async createUser(params){
        const user = new User(params);
        return await user.save()
    }

    async findUserByID(userID){
        return await User.findById(userID);
    }

    async findUserByEmail(email){
        return await User.findOne({email});
    }

    async findUserByIDandUpdate(id,params){
        return await User.findOneAndUpdate({_id:id},params,{new:true});
    }
}

module.exports = UserRepository;