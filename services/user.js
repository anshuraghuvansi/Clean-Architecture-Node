'use strict';

/*
    Services are the Use cases of the clean Architecture 
*/

const bcrypt       = require('bcrypt');
const tokenCreator = require('../utils/token_creator');
const constants    = require('../constants')

class UserService{

    constructor(repository){
        this.repository = repository;
    }

    async signup(params){
        params.password = await bcrypt.hash(params.password,10); //10 rounds for salt
        const result = await this.repository.createUser(params);
        const token = tokenCreator(result.id);
        return {token}
    }

    async signin(params){

        const user = await this.repository.findUserByEmail(params.email);
        if(user){
            const matched = await bcrypt.compare(params.password,user.password);
            if(matched){
                const token = tokenCreator(user.id);
                return {token}
            }
            else{
                throw constants.ErrInvalidPassword;
            }
        } 
        else{
            throw constants.ErrEmailNotExist;
        }
    }

    async getProfile(userID){
        const user = await this.repository.findUserByID(userID);
        //filter the field that required to send to user
        return {name:user.name,email:user.email}
    }

    async updateProfile(userID,params){
        
        //filter the fields that allowed to user to update
        //in this case user can update name and password only

        let updatableParams = {};

        if(params.name){
            updatableParams.name = params.name
        }

        if(params.password){
            updatableParams.password = await bcrypt.hash(params.password,10); //10 rounds for salt
        }

        //return the updated profile
        const user = await this.repository.findUserByIDandUpdate(userID,params);
        return {name:user.name,email:user.email}
    }
}

module.exports = UserService;