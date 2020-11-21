const mongoose = require("mongoose");
const crypto = require("crypto");

const UsuarioSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    senha: {
      type: String,
      required: true,
      select: false,
      set: (value) => crypto.createHash("md5").update(value).digest("hex"),
    },
  },
  {
    timestamps: true,
  }
);

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
