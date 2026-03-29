const express = require('express');
const { clienteController } = require('../container/container');

const router = express.Router();

router.post('/', clienteController.criar);
router.get('/', clienteController.listar);
router.get('/:id', clienteController.buscarPorId);
router.delete('/:id', clienteController.excluir);

module.exports = router;