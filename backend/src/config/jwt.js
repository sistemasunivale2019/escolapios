const jwt = require("jsonwebtoken");

const secret = "4a46c7eccaa0ea8d28adb7540d348110";

exports.sign = (payload) => jwt.sign(payload, secret, { expiresIn: 86400 });

exports.verify = (token) => jwt.verify(token, secret);
