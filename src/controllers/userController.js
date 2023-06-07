const User = require('../models/userModel');

exports.getUsers = async(req, res) => {
    const users = await User.find();
    res.status(200).json({
        status : 'ok',
        results : users.length,
        data : {
            users
        },
    })
}

