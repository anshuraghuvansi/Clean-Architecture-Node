'use strict';

module.exports.validateEmail = function validateEmail(mail) {
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
     return true
    }
    return false
}