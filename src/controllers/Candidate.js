const Candidato = require("../schemas/Candidate");

module.exports = {
  async store(req, res) {
    const { dados_candidato } = req.body;
    const candidato = await Candidato.create(req.body);

    if (!candidato) {
      return res.status(400).json({ message: "Erro ao criar usuario" });
    }

    res.status(200).json(candidato);
  },

  async index(req, res){
    const listaTodosCandidatos = await Candidato.find();
    res.status(200).json(listaTodosCandidatos);
  },
};
