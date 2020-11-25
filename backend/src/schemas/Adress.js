const mongoose = require("mongoose");

const AdressSchema = new mongoose.Schema({
  bairro: {
    type: String,
    required: true,
  },
  cep: {
    type: String,
    min: [8, "Cep incompleto"],
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  complemento: {
    type: String,
  },
  estado: {
    type: String,
    max: [2, "Apenas a sigla do estado."],
    required: true,
  },
  rua: {
    type: String,
    required: true,
  },
  numero: {
    type: String,
    required: true,
  },
});

const Adress = mongoose.model("Adress", AdressSchema);

module.exports = Adress;
