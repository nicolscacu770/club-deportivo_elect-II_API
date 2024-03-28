const express = require('express');
const router = express.Router();

const { findAll, findById, save, update, deletear, findAfiliados, findNoAfiliados, addAfiliado, deleteAfiliado } = require('../services/disciplinaDeportiva.service');

router.use(express.json());
router.get('/', findAll);
router.get('/:id', findById);
router.post('/', save);
router.put('/:id', update);
router.delete('/:id', deletear);

//gestión de afiliados a la disciplina deportiva
router.get('/afiliados/:id', findAfiliados);
router.get('/no-afiliados/:id', findNoAfiliados);
router.put('/afiliados/agregar/:id', addAfiliado);
router.put('/afiliados/eliminar/:id', deleteAfiliado);

module.exports = router;