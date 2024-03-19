const express = require('express');
const router = express.Router();

const { findAll, findById, save, update, deletear, findAfiliados, addAfiliado } = require('../services/disciplinaDeportiva.service');

router.use(express.json());
router.get('/', findAll);
router.get('/:id', findById);
router.post('/', save);
router.put('/:id', update);
router.delete('/:id', deletear);

router.get('/afiliados/:id', findAfiliados);
router.put('/afiliados/agregar/:id', addAfiliado)

module.exports = router;