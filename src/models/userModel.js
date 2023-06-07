const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
    name: {
        type : String,
        require: true
    },

    email: {
        type : String,
        require: true
    },

    preferencias: {
        type : [String],
        require: true
    },
});


const User = mongoose.model('User', userSchema);

module.exports = User;