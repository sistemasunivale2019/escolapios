const Candidato = require("../schemas/Candidate");
const Parents = require("../schemas/Parents");

module.exports = {
  async store(req, res) {
    // const { dados_candidato } = req.body;
    const parents = await Parents.create(req.body.parents);
    const candidato = await Candidato.create({
      ...req.body,
      parents: parents.id,
    });

    if (!candidato) {
      return res.status(400).json({ message: "Erro ao criar usuario" });
    }

    res.status(200).json(candidato);
  },

  async index(req, res) {
    const listaTodosCandidatos = await Candidato.find().populate('parents');
    res.status(200).json(listaTodosCandidatos);
  },
};
