const mongoose = require("mongoose");

const authoritySchema = new mongoose.Schema({
    name: {
        type : String,
        require: true
    },

    admins: {
        type : [String],
        require: true
    },

    updated_date: {
        type : Date,
        require: true
    },

    creation_date: {
        type : Date,
        require: true
    },
});


const Authority = mongoose.model('Authority', authoritySchema);

module.exports = Authority;