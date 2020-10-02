const mongoose = require('mongoose');

const AtividadeSchema = new mongoose.Schema({
    nome_atividade:{
        type: String,
        required: true,
    },
    hora: {
        type: String,
        required: true,
    },
    value:{
        type: String,
        required: true,
        unique: true
    }
});

const Atividade = mongoose.model('Atividade', AtividadeSchema);

module.exports = Atividade;