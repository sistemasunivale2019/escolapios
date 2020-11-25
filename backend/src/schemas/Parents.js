const mongoose = require("mongoose");

const ParentsSchema = new mongoose.Schema({
    nome: {
        type:String
    }
});

const Parents = mongoose.model("Parents", ParentsSchema);

module.exports = Parents;


// pai: {
//     nome: {
//       type: String,
//     },
//     cpf: {
//       type: String,
//     },
//   },
//   mae: {
//     nome: {
//       type: String,
//     },
//     cpf: {
//       type: String,
//     },
//   },
//   estado_civil: {
//     type: String,
//   },