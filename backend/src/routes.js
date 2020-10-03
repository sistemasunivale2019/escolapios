const express = require('express');
const CandidatoController = require('./controllers/Candidate');
const UsuarioController = require('./controllers/Usuario');

const router = express.Router();


router.post('/createUser', UsuarioController.store)
router.get('/lista-usuarios', UsuarioController.index);
router.post('/createCandidate', CandidatoController.store);
router.get('/lista-candidatos', CandidatoController.index);


module.exports = router;