class ClienteService {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    async criar(cliente) {
        return this.clienteRepository.criar(cliente);
    }

    async listar() {
        return this.clienteRepository.listar();
    }

    async buscarPorID(id) {
        return this.clienteRepository.buscarPorID(id);
    }

    async excluir(id){
        return this.clienteRepository.excluir(id);
    }
}

module.exports = ClienteService;