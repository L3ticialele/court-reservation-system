const express = require('express');
const { quadraController } = require('../container/container');

const router = express.Router()

router.post('/', quadraController.criar);
router.get('/', quadraController.listar);
router.get('/:id', quadraController.buscarPorId);
router.put('/:id', quadraController.atualizar);
router.delete('/:id', quadraController.excluir);

module.exports = router;