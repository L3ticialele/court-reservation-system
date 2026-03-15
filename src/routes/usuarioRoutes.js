const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const {usuarioController} = require('../container/container');

const router = express.Router();

//Criar usuário
router.post('/cadastrar', usuarioController.cadastrar);

//Login usuário
router.post('/login', usuarioController.login);

//Buscar usuário por id
router.get('/:id', authMiddleware, usuarioController.buscarPorID);

//Rota apenas para administrador
router.get('/', authMiddleware, roleMiddleware('admin'), usuarioController.listar);

module.exports = router;