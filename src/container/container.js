const pool = require('../config/database');

//repositories
const AgendamentoRepository = require('../repositories/AgendamentoRepository');
const ClienteRepository = require('../repositories/ClienteRepository');
const QuadraRepository = require('../repositories/QuadraRepository');
const RelatorioRepository = require('../repositories/RelatorioRepository');
const UsuarioRepository = require('../repositories/UsuarioRepository');

//services
const AgendamentoService = require('../services/AgendamentoService');
const ClienteService = require('../services/ClienteService');
const QuadraService = require('../services/QuadraService');
const RelatorioService = require('../services/RelatorioService');
const UsuarioService = require('../services/UsuarioService');

//controllers
const AgendamentoController = require('../controllers/AgendamentoController');
const ClienteController = require('../controllers/ClienteController');
const QuadraController = require('../controllers/QuadraController');
const RelatorioController = require('../controllers/RelatorioController');
const UsuarioController = require('../controllers/UsuarioController');

//REPOSITORIES
const agendamentoRepository = new AgendamentoRepository(pool);
const clienteRepository = new ClienteRepository(pool);
const quadraRepository = new QuadraRepository(pool);
const relatorioRepository = new RelatorioRepository(pool);
const usuarioRepository = new UsuarioRepository(pool);

//SERVICES
const agendamentoService = new AgendamentoService(agendamentoRepository);
const clienteService = new ClienteService(clienteRepository);
const quadraService = new QuadraService(quadraRepository);
const relatorioService = new RelatorioService(relatorioRepository);
const usuarioService = new UsuarioService(usuarioRepository);

//CONTROLLERS
const agendamentoController = new AgendamentoController(agendamentoService);
const clienteController = new ClienteController(clienteService);
const quadraController = new QuadraController(quadraService);
const relatorioController = new RelatorioController(relatorioService);
const usuarioController = new UsuarioController(usuarioService);

module.exports = {
    //repositories
    agendamentoRepository,
    clienteRepository,
    quadraRepository,
    relatorioRepository,
    usuarioRepository,
    //services
    agendamentoService,
    clienteService,
    quadraService,
    relatorioService,
    usuarioService,
    //controllers
    agendamentoController,
    clienteController,
    quadraController,
    relatorioController,
    usuarioController
};