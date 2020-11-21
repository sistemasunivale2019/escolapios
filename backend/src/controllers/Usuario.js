const Usuario = require("../schemas/Usuario");
const { sign, verify } = require("../config/jwt");
//parei no 32:00

module.exports = {
  async store(req, res) {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({ message: "Email ja cadastrado" });
    }

    const novoUsuario = await Usuario.create({ email, senha });
    const token = sign({ user: novoUsuario.id });
    res.status(200).json({ novoUsuario, token });
  },

  async index(req, res) {
    const listaTodosUsuarios = await Usuario.find();
    res.status(200).json(listaTodosUsuarios);
  },

  async show(req, res) {
    const [hashType, hash] = req.headers.authorization.split(" ");
    const [email, senha] = Buffer.from(hash, "base64").toString().split(":");
    console.log(email, senha);
  },
};
