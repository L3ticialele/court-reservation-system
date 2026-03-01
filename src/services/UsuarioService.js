const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UsuarioService{
    constructor(pool){
        this.pool = pool
    }

    async cadastrar(nome, email, senha, role = 'operador'){
        const senhaHash = await bcrypt.hash(senha, 10)
        
        const result = await this.pool.query(
            `INSERT INTO usuarios(nome, email, senha, role)
            VALUES($1, $2, $3, $4)
            RETURNING id, nome, email, role`,
            [nome, email, senhaHash, role]
        )

        return result.rows[0]
    }

    async login(email, senha){
        const result = await this.pool.query(
            `SELECT * FROM usuarios WHERE email = $1`,
            [email]
        )

        const usuario = result.rows[0]
        if(!usuario) throw new Error('Email ou senha inválidos')

        const senhaValida = await bcrypt.compare(senha, usuario.senha)
        if(!senhaValida) throw new Error('Email ou senha inválidos')

        const token = jwt.sign(
            {id: usuario.id, email: usuario.email, role: usuario.role},
            process.env.JWT_SECRET,
            {expiresIn: '1h'}
        )

        return {token}
    }
}

module.exports = UsuarioService