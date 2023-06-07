const mongoose = require("mongoose");

//    "1": {
//     "body": "El presente reglamento establece las normas y procedimientos para la disciplina académica y administrativa de los estudiantes de la Universidad.",
//     "cuerpos colegiados": [
//       "Consejo Académico"
//     ],
//     "entradaVig": "2021-08-15",
//     "fechaExp": "2025-08-15",
//     "fechaPut": "2021-08-01",
//     "id": 1,
//     "palabras claves": [
//       "estudiantes",
//       "disciplina",
//       "académico"
//     ],
//     "title": "Reglamento Estudiantil",
//     "type": "Reglamento"
//   },



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