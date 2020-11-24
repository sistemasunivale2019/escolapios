const express = require("express");
const CandidatoController = require("./controllers/Candidate");
const UserController = require("./controllers/User");
const AuthController = require("./controllers/Auth");

const router = express.Router();

router.post("/signup", UserController.store);
router.get("/auth", AuthController.show);
router.get("/users", UserController.index);
router.delete("/delete-user", UserController.delete);
router.post("/createCandidate", CandidatoController.store);
router.get("/candidates", CandidatoController.index);

module.exports = router;
