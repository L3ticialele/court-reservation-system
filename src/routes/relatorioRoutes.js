const express = require('express');
const {relatorioController} = require('../container/container');

const router = express.Router();

//Gerar faturamento por quadra
router.get('/faturamento-por-quadra', relatorioController.faturamentoPorQuadra);

//Gerar faturamento por dia
router.get('/faturamento-por-dia', relatorioController.faturamentoPorDia);

//Gerar faturamento por cliente
router.get('/faturamento-por-cliente', relatorioController.faturamentoPorCliente);

//Gerar relatório de ocupação por quadra
router.get('/ocupacao-por-quadra', relatorioController.ocupacaoPorQuadra);

module.exports = router;