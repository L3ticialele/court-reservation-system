class QuadraService{
    constructor(quadraRepository){
        this.quadraRepository = quadraRepository;
    }

    async criar(dados){
        return this.quadraRepository.criar(dados);
    }

    async listar(){
        return this.quadraRepository.listar();
    }

    async buscarPorId(id){
        return this.quadraRepository.buscarPorId(id);
    }

    async atualizar(id, dados){
        return this.quadraRepository.atualizar(id, dados);
    }

    async excluir(id){
        return this.quadraRepository.excluir(id);
    }
}

module.exports = QuadraService;