class UsuarioRepository{
    constructor(pool){
        this.pool = pool;
    }

    async buscarPorEmail(email){
        const query = 'SELECT * FROM usuarios WHERE email = $1';
        const {rows} = await this.pool.query(query, [email]);
        return rows[0];
    }

    async buscarPorId(id){
        const query = `SELECT * FROM usuarios WHERE id = $1`;
        const {rows} = await this.pool.query(query, [id]);
        return rows[0];
    }

     async listar() {
        const result = await this.pool.query(
            `SELECT * FROM usuarios ORDER BY nome`
        );
        return result.rows;
    }

    async cadastrar({nome, email, senha, role}){
        const query = `
            INSERT INTO usuarios (nome, email, senha, role)
            VALUES ($1, $2, $3, $4)
            RETURNING id, nome, email, role`;
        
        const {rows} = await this.pool.query(query, [
            nome, 
            email, 
            senha, 
            role
        ]);

        return rows[0];
    }
}

module.exports = UsuarioRepository;