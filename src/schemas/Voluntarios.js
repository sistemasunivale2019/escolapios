const mongoose = require("mongoose");

const VoluntarioSchema = new mongoose.Schema({
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  email:{
      type: String,
      
  },
  nome: {
    type: String,
    required: true,
  },
  tel: {
      type:String,
      required: true,
  },

});
