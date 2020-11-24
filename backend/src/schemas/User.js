const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
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
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
