'use strict';

const constants = require('../constants');
const validator = require('../utils/validator');

class SigninBodyParams{

    constructor(params){
        this.email = params.email;
        this.password = params.password;
    }

    validate(){

        if(!this.email){
            return constants.ErrInvalidEmail;
        }

        if(!validator.validateEmail(this.email)){
            return constants.ErrInvalidEmail;
        }

        if(!this.password){
            return constants.ErrInvalidPassword
        }

        if(this.password.length > 12){
            return constants.ErrMaxPassword
        }

        if(this.password.length < 6){
            return constants.ErrMinPassword
        }
    }
}

module.exports = SigninBodyParams;



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
