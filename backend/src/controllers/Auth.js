const User = require("../schemas/User");
const { sign, verify } = require("../config/jwt");

module.exports = {
  async show(req, res) {
    const [hashType, hash] = req.headers.authorization.split(" ");
    if (hashType === "Basic") {
      const [email, senha] = Buffer.from(hash, "base64").toString().split(":");
      try {
        const user = await User.findOne({ email, senha });
        if (!user) {
          return res.status(401).json({ message: "Usuário não encontrado" });
        }
        const token = sign({ user: user.id });
        return res.status(200).json({ user, token });
      } catch (err) {
        res.status(400).json({ message: "Erro ao tentar encontrar usuário" });
      }
    } else {
      return res.status(401).json({ message: "Token inválido" });
    }
  },
};
