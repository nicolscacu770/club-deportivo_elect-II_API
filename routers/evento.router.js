const express = require('express');
const router = express.Router();

const { findAll, findById, save, update, deletear, findParticipantes, findNoParticipantes, addParticipante } = require('../services/eventoDeportivo.service');

router.use(express.json());
router.get('/', findAll);
router.get('/:id', findById);
router.post('/', save);
router.put('/:id', update);
router.delete('/:id', deletear);

router.get('/participantes/:id', findParticipantes)
router.get('/no-participantes/:id', findNoParticipantes)
router.post('/participantes/agregar/:id', addParticipante);

module.exports = router;