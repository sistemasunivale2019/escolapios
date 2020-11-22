const express = require("express");
const CandidatoController = require("./controllers/Candidate");
const UserController = require("./controllers/User");
const AuthController = require("./controllers/Auth");

const router = express.Router();

router.post("/signup", UserController.store);
router.get("/auth", AuthController.show);
router.get("/lista-usuarios", UserController.index);
router.delete("/delete-user", UserController.delete);
router.post("/createCandidate", CandidatoController.store);
router.get("/lista-candidatos", CandidatoController.index);

module.exports = router;
