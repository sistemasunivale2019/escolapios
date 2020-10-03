const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  
  senha:{
      type: String,
      required: true
  },
});
