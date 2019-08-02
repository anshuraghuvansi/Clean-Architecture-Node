'use strict';

function formatter(err,data = null,message=''){
    const response = {};
    response.status = err ? -1 : 0;
    response.message = err ? err.message : message;
    response.data = data;
    return response;
}

module.exports = formatter;