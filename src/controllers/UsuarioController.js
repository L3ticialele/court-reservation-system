class UsuarioController{
    constructor(usuarioService){
        this.usuarioService = usuarioService
    }

    cadastrar = async(req, res) => {
        try{
            const{nome, email, senha, role} = req.body
            const usuario = await this.usuarioService.cadastrar(nome, email, senha, role)
            res.status(201).json(usuario)
        }catch(error){
            console.error(error)
            res.status(500).json({error: error.message})
        }
    }

    login = async(req, res) => {
        try{
            const{email, senha} = req.body
            const resultado = await this.usuarioService.login(email, senha)
            res.json(resultado)
        }catch(error){
            console.error(error)
            res.status(401).json({error: error.message})
        }
    }
}

module.exports = UsuarioController