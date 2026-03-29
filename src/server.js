require('dotenv').config();

const app = require('./app');
const PORT = process.env.PORT || 3000;

//Routes
const criarAgendamentoRoutes = require('./routes/agendamentoRoutes');
const criarClienteRoutes = require('./routes/clienteRoutes');
const criarQuadraRoutes = require('./routes/quadraRoutes');
const criarRelatorioRoutes = require('./routes/relatorioRoutes');
const criarUsuarioRoutes = require('./routes/usuarioRoutes');

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

//Protegendo rotas
const authMiddleware = require('./middlewares/authMiddleware');

//Protegendo relatórios somente para admin
const roleMiddleware = require('./middlewares/roleMiddleware');

app.use('/agendamentos', authMiddleware, criarAgendamentoRoutes);
app.use('/clientes', authMiddleware, criarClienteRoutes);
app.use('/quadras', authMiddleware, criarQuadraRoutes);
app.use('/relatorios', authMiddleware, roleMiddleware(['admin']), criarRelatorioRoutes);
app.use('/usuarios', criarUsuarioRoutes);