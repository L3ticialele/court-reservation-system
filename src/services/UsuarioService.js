const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UsuarioService{
    constructor(usuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }

    async cadastrar(dados){
        const usuarioExistente = await this.usuarioRepository.buscarPorEmail(dados.email);
        
        if(usuarioExistente){
            throw new Error('Usuário já cadastrado.');
        }

        const senhaHash = await bcrypt.hash(dados.senha, 10);

        return this.usuarioRepository.cadastrar({
            ...dados,
            senha: senhaHash
        });
    }

    async login(dados){
        const usuario = await this.usuarioRepository.buscarPorEmail(dados.email);

        if(!usuario) throw new Error('Email ou senha inválidos');

        const senhaValida = await bcrypt.compare(dados.senha, usuario.senha);

        if(!senhaValida) throw new Error('Email ou senha inválidos');

        const token = jwt.sign(
            {id: usuario.id, email: usuario.email, role: usuario.role},
            process.env.JWT_SECRET,
            {expiresIn: '1h'}
        );

        return {token};
    }

    async buscarPorID(id) {
        return this.usuarioRepository.buscarPorID(id);
    }

    async listar() {
        return this.usuarioRepository.listar();
    }
}

module.exports = UsuarioService;