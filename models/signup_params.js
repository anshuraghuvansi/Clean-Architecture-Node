'use strict';

const constants = require('../constants');
const SigninBodyParams = require('./signin_params')

class SignupBodyParams extends SigninBodyParams{
    
    constructor(params){
        super(params)
        this.name = params.name;
    }

    validate(){

        if(!this.name){
            return constants.ErrInvalidUserName;
        }

        if(this.name.length > 50){
            return constants.ErrMaxUserName;
        }

        if(this.name.length < 4){
            return constants.ErrMinUserName;
        }

        return super.validate()
    }
}

module.exports = SignupBodyParams;
