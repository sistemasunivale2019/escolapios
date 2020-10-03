const Usuario = require("../schemas/Usuario");

module.exports = {
  async store(req, res) {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({email});

    if (usuario) {
      return res.status(400).json({ message: "Email ja cadastrado" });
    }
    const novoUsuario = await Usuario.create({email, senha})
    res.status(200).json(novoUsuario);
  },

  async index(req, res){
    const listaTodosUsuarios = await Usuario.find();
    res.status(200).json(listaTodosUsuarios);
  },
};
