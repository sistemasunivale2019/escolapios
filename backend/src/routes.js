const express = require('express');
const CandidatoController = require('./controllers/Candidate');

const router = express.Router();


router.get('/', (req, res) => res.send('Ola'))
router.post('/createCandidate', CandidatoController.store);
router.get('/lista-candidatos', CandidatoController.index);


module.exports = router;