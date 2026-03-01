class QuadraService{
    constructor(pool){
        this.pool = pool
    }

    async criar(dados){
        const {nome, tipo, valor_hora} = dados

        if(!nome || !valor_hora) {
            throw new Error('Nome e valor por hora são obrigatórios')
        }

        //Verificar se já existe quadra com o mesmo nome
        const quadraExistente = await this.pool.query(
            `SELECT id FROM quadras WHERE nome = $1`,
            [nome]
        )

        if(quadraExistente.rows.lenght > 0){
            throw new Error('Já existe uma quadra com esse nome')
        }

        //Inserindo no banco
        const result = await this.pool.query(
            `INSERT INTO QUADRAS (nome, tipo, valor_hora)
            VALUES ($1, $2, $3)
            RETURNING *`,
            [nome, tipo, valor_hora]
        )

        return result.rows[0]
    }

    async listar(){
        const result = await this.pool.query(
            `SELECT * FROM quadras ORDER BY nome`
        )
        return result.rows
    }

    async buscarPorId(id){
        const result = await this.pool.query(
            `SELECT * FROM quadras WHERE id = $1`,
            [id]
        )

        if(result.rows.lenght === 0){
            throw new Error('Quadra não encontrada')
        }

        return result.rows[0]
    }

    async atualizar(id, dados){
        const{nome, tipo, valor_hora} = dados

        const result = await this.pool.query(
            `UPDATE quadras
            SET nome = $1
                tipo = $2,
                valor_hora = $3
            WHER id = $4
            RETURNING *`,
            [nome, tipo, valor_hora, id]
        )

        if(result.rows.lenght === 0){
            throw new Error('Quadra não encontrada')
        }

        return result.rows[0]
    }

    async excluir(id){
        await this.pool.query(
            `DELETE FROM quadras WHERE id = $1`,
            [id]
        )
    }
}

module.exports = QuadraService