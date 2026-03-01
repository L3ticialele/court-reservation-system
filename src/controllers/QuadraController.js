class QuadraController{
    constructor(quadraService){
        this.quadraService = quadraService
    }

    criar = async(req, res) => {
        try{
            const quadra = await this.quadraService.criar(req.body)
            res.status(201).json(quadra)
        }catch(error){
            res.status(400).json({error: error.message})
        }
    }

    listar = async(req, res) => {
        try{
            const quadras = await this.quadraService.listar()
            res.json(quadras)
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }

    buscarPorId = async(req, res) => {
        try{
            const quadra = await this.quadraService.buscarPorId(req.params.id)
            res.json(quadra)
        }catch(error){
            res.status(404).json({error: error.message})
        }
    }

    atualizar = async(req, res) => {
        try{
            const quadra = await this.quadraService.atualizar(
                req.params.id,
                req.body
            )

            res.json(quadra)
        }catch(error){
            res.status(400).json({error: error.message})
        }
    }

    excluir = async(req, res) => {
        try{
            await this.quadraService.excluir(req.params.id)
            res.status(204).send()
        }catch(error){
            res.status(500).json({error: 'Erro ao excluir quadra'})
        }
    }
}

module.exports = QuadraController