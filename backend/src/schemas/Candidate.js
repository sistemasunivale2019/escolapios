const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  data: {
    cpf: {
      type: String,
      unique: true,
      required: true,
    },
    nome: {
      type: String,
      required: true,
    },
    rg: {
      type: String,
      required: true,
    },
    nascimento: {
      type: String,
      required: true,
    },
    naturalidade: {
      type: String,
      required: true,
    },
    cor: {
      type: String,
      required: true,
    },
    situacao_trabalhista: {
      type: String,
      required: true,
    },
    estado_civil: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    nessidade_especial: {
      type: String,
    },
    tel_cel: {
      type: String,
      required: true,
    },
    parents: { type: mongoose.Schema.Types.ObjectId, ref: "Parents" },
  },
});

const Candidate = mongoose.model("Candidate", CandidateSchema);

module.exports = Candidate;

// responsavel_candidato: [
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     parentesco: {
//       type: String,
//       required: true,
//     },
//   },
// ],
