const { restart } = require('nodemon');
const User = require('../models/user');

const { StatusCodes } = require('http-status-codes');

exports.getUser = async ()=>{
    console.log("hello")
    const users = await User.findAll();
return users;
}
