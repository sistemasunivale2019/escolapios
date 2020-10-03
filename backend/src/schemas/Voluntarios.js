const mongoose = require("mongoose");

const VoluntarioSchema = new mongoose.Schema({
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
  },
  nome: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  endereco: [
    {
      cep: {
        type: String,
        required: true,
      },
      bairro: {
        type: String,
        required: true,
      },
      rua: {
        type: String,
        required: true,
      },
      numero:{
        type: String,
        required: true
      }
    },
  ],
});
