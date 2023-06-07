const User = require('../models/userModel');

exports.getUsers = async(req, res) => {
    console.log("holaaa")
    const users = await User.find();
    res.status(200).json({
        status : 'ok',
        results : users.length,
        data : {
            users
        },
    })
}

exports.crearUser = async(req, res) => {
    const newusers = await User.create(req.body);
    console.log("holaaa")
    res.status(201).json({
        status : 'ok',
        newUser : newusers
    })
}

