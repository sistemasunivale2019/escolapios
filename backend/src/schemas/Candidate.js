const mongoose = require("mongoose");

const CandidatoSchema = new mongoose.Schema({
  dados_candidato: [
    {
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
      endereco: [
        {
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
        },
      ],
      tel_cel: {
        type: String,
        required: true,
      },
      pai: [
        {
          nome: {
            type: String,
          },
          cpf: {
            type: String,
          },
        },
      ],
      mae: [
        {
          nome: {
            type: String,
          },
          cpf: {
            type: String,
          },
        },
      ],
      estado_civil_pais: {
        type: String,
        required: true,
      },
      responsavel_candidato: [
        {
          name: {
            type: String,
            required: true,
          },
          parentesco: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
  dados_educacionais: [
    {
      estuda: {
        type: Boolean,
        required: true,
      },

      instituicao: [
        {
          nome: {
            type: String,
            required: (doc) => doc.dados_educacionais.estuda,
          },
          tipo_inst: {
            type: String,
            required: (doc) => doc.dados_educacionais.estuda,
          },
          endereco: [
            {
              bairro: {
                type: String,
                required: (doc) => doc.dados_educacionais.estuda,
              },
              rua: {
                type: String,
                required: (doc) => doc.dados_educacionais.estuda,
              },
            },
          ],
          escolaridade: {
            type: String,
            required: (doc) => doc.dados_educacionais.estuda,
          },
          serie: {
            type: String,
            required: (doc) => doc.dados_educacionais.estuda,
          },
          turma: {
            type: String,
            required: (doc) => doc.dados_educacionais.estuda,
          },
          turno: {
            type: String,
            required: (doc) => doc.dados_educacionais.estuda,
          },
        },
      ],
      outros_cursos: {
        type: String,
      },
    },
  ],
});

const Candidato = mongoose.model("Candidato", CandidatoSchema);

module.exports = Candidato;
