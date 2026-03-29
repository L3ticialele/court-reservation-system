class AgendamentoController{
    constructor(agendamentoService){
        this.agendamentoService = agendamentoService;
    }

    criar = async(req, res) => {
        try{
            const agendamento = await this.agendamentoService.criar(req.body);
            res.status(201).json(agendamento);
        }catch(error){
            res.status(400).json({error: error.message});
        }
    }

    listar = async (req, res) => {
        try{
            const agendamentos = await this.agendamentoService.listar();
            res.json(agendamentos);
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }
}

module.exports = AgendamentoController;