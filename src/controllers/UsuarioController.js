class UsuarioController{

    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }

    cadastrar = async(req, res) => {
        try{
            const usuario = await this.usuarioService.cadastrar(req.body);
            res.status(201).json(usuario);
        }catch(error){
            console.error(error);
            res.status(500).json({error: error.message});
        }
    }

    login = async(req, res) => {
        try{
            const resultado = await this.usuarioService.login(req.body);
            res.json(resultado);
        }catch(error){
            console.error(error);
            res.status(401).json({error: error.message});
        }
    }

    buscarPorID = async(req, res) => {
        try{
            const usuario = await this.usuarioController.buscarPorID(req.params.id);
            res.json(usuario);
        }catch(error){
            res.status(404).json({error: error.message});
        }
    }

    listar = async (req, res) => {
        try{
            const usuarios = await this.usuarioService.listar();
            res.json(usuarios);
        }catch(error){
            res.status(500).json({error: 'Erro ao listar usuarios'});
        }
    }
}

module.exports = UsuarioController;