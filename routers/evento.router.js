const express = require('express');
const router = express.Router();

const { findAll, findById, save, update, deletear } = require('../services/eventoDeportivo.service');

router.use(express.json());
router.get('/', findAll);
router.get('/:id', findById);
router.post('/', save);
router.put('/:id', update);
router.delete('/:id', deletear);

module.exports = router;