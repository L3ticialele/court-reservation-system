class AgendamentoService{
    constructor(agendamentoRepository){
        this.agendamentoRepository = agendamentoRepository;
    }

    async criar(dados){
        return this.agendamentoRepository.criar(dados);
     }

     async listar(){
        return this.agendamentoRepository.listar();
     }
}

module.exports = AgendamentoService;