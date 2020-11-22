const User = require("../schemas/User");
const { sign, verify } = require("../config/jwt");
//parei no 28:00

module.exports = {
  async store(req, res) {
    const { email, senha } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "Email ja cadastrado" });
    }

    const newUser = await User.create({ email, senha });
    res.status(200).json({ newUser });
  },

  async index(req, res) {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  },

  async delete(req, res) {
    const { email } = req.body;
    try {
      const userDeleted = await User.findOneAndDelete({ email });
      res.status(200).json(userDeleted);
    } catch (err) {
      res.status(400).json({ message: "Erro" });
    }
  },
};
