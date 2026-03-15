const express = require('express');
const agendamentoRoutes = require('./agendamentoRoutes');
const clienteRoutes = require('./clienteRoutes');
const quadraRoutes = require('./quadraRoutes');
const relatorioRoutes = require('./relatorioRoutes');
const usuarioRoutes = require('./usuarioRoutes');

const router = express.Router();

router.use('/agendamentos', agendamentoRoutes);
router.use('/clientes', clienteRoutes);
router.use('/quadras', quadraRoutes);
router.use('/relatorios', relatorioRoutes);
router.use('/usuarios', usuarioRoutes);

module.exports = router;