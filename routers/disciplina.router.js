const express = require('express');
const router = express.Router();

const { findAll, findById, save, update, deletear, findAfiliados, findNoAfiliados, addAfiliado } = require('../services/disciplinaDeportiva.service');

router.use(express.json());
router.get('/', findAll);
router.get('/:id', findById);
router.post('/', save);
router.put('/:id', update);
router.delete('/:id', deletear);

router.get('/afiliados/:id', findAfiliados);
router.get('/no-afiliados/:id', findNoAfiliados);
router.put('/afiliados/agregar/:id', addAfiliado)

module.exports = router;