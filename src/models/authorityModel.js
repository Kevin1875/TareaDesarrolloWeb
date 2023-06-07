const mongoose = require("mongoose");

// "admins": [
//     "Juan Pérez",
//     "María Rodríguez"
//   ],
//   "createdAt": "2022-01-01",
//   "id": 1,
//   "nombre": "Consejo Académico",
//   "updatedAt": "2022-03-15"
// },


const authoritySchema = new mongoose.Schema({
    name: {
        type : String,
        require: true
    },

    admins: {
        type : [String],
        require: true
    },

    updated_Date: {
        type : Date,
        require: true
    },

    creation_Date: {
        type : Date,
        require: true
    },
});


const Authority = mongoose.model('Authority', authoritySchema);

module.exports = Authority;