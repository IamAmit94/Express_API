const express = require('express')
const app = express()
const connection  = require('../../database/db')

module.exports.middle = (req, res, next) => {
    const {firstName,lastName,age} = req.body;
    let errors = []
    if(!firstName || firstName == null || firstName.trim().length === 0 ) errors.push("First name required")
    if(!lastName || lastName == null || lastName.trim().length === 0 ) errors.push("Last name required")
    if(!age || age == null || age.trim().length === 0 ) errors.push("Age name required")

    if(errors.length > 0){
        return res.status(400).send({"msg":"Missing data",errors})
    }
    req.body.firstName = firstName.trim()
    req.body.lastName = lastName.trim()
    req.body.age = age.trim()
    next();
}
