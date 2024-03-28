const express = require('express');
const router = express.Router();

const { findAll, findById, save, update, deletear, findParticipantes, findNoParticipantes, addParticipante, deleteParticipante } = require('../services/eventoDeportivo.service');

router.use(express.json());
router.get('/', findAll);
router.get('/:id', findById);
router.post('/', save);
router.put('/:id', update);
router.delete('/:id', deletear);

//gestión de participantes en un evento deportivo
router.get('/participantes/:id', findParticipantes)
router.get('/no-participantes/:id', findNoParticipantes)
router.post('/participantes/agregar/:id', addParticipante);
router.put('/participantes/eliminar/:id', deleteParticipante);

module.exports = router;