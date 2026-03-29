const express = require('express');
const {agendamentoController} = require('../container/container');

const router = express.Router();

router.post('/', agendamentoController.criar);
router.get('/', agendamentoController.listar);

module.exports = router;