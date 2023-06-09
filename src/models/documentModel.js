const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
      
    type: {
        type : String,
        require: true
    },

    title: {
        type : String,
        require: true
    },

    authorities: {
        type : [String],
        require: true
    },

    key_words: {
        type : [String],
        require: true
    },

    put_date: {
        type : Date,
        require: true
    },

    exp_date: {
        type : Date,
        require: true
    },

    val_date: {
        type : Date,
        require: true
    },

    body: {
        type : String,
        require: true
    },    
});


const Document = mongoose.model('Document', documentSchema);

module.exports = Document;