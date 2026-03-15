class ClienteController{
    constructor(clienteService){
        this.clienteService = clienteService;
    }

    criar = async(req, res) => {
        try{
            const cliente = await this.clienteService.criar(req.body);
            res.status(201).json(cliente);
        }catch(error){
            res.status(400).json({error: error.message});
        }
    }

    listar = async (req, res) => {
        try{
            const clientes = await this.clienteService.listar();
            res.json(clientes);
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }

    buscarPorId = async(req, res) => {
        try{
            const cliente = await this.clienteService.buscarPorId(req.params.id);
            res.json(cliente);
        }catch(error){
            res.status(404).json({error: error.message});
        }
    }

    excluir = async(req, res) => {
        try{
            await this.clienteService.excluir(req.params.id);
            res.status(204).send();
        }catch(error){
            res.status(500).json({error: 'Erro ao excluir cliente'});
        }
    }
}

module.exports = ClienteController;