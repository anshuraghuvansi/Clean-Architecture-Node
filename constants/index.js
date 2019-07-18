'use strict';

const ErrInvalidUserName = new Error('Provide valid name');
const ErrMaxUserName = new Error('User name should be less then 50 chars');
const ErrMinUserName = new Error('User name should be 4 or more chars');

const ErrInvalidPassword = new Error('Provide valid password');
const ErrMaxPassword = new Error('Password should be less then 12 chars');
const ErrMinPassword = new Error('Password should be 6 or more chars');

const ErrEmailExist = new Error('Email is already registered');
const ErrEmailNotExist = new Error('Email is not registered');
const ErrInvalidEmail = new Error('Invalid Email');
const ErrInvalidToken = new Error('Invalid token');

module.exports = {
    ErrMaxUserName,
    ErrMinUserName,
    ErrInvalidUserName,

    ErrMaxPassword,
    ErrMinPassword,
    ErrInvalidPassword,

    ErrEmailExist,
    ErrInvalidToken,
    ErrEmailNotExist,
    ErrInvalidEmail
}