const CpfUtils = require('../utils/CpfUtils')

class ClienteService {
    constructor(pool) {
        this.pool = pool
    }

    async criar(cliente) {
        const { nome, cpf, email, telefone } = cliente

        if (!nome || !cpf) {
            throw new Error('Nome e CPF são obrigatórios')
        }

        if (!CpfUtils.validar(cpf)) {
            throw new Error('CPF inválido')
        }

        //Verificar se CPF já existe
        const cpfExistente = await this.pool.query(
            `SELECT id FROM clientes WHERE cpf = $1`,
            [cpf]
        )

        if (cpfExistente.rows.length > 0) {
            throw new Error("CPF já cadastrado");
        }

        const result = await this.pool.query(
            `INSERT INTO clientes (nome, cpf, email, telefone)
            VALUES ($1, $2, $3)
            RETURNING *`,
            [nome, cpf, email, telefone]
        )

        return result.rows[0]
    }

    async listar() {
        const result = await this.pool.query(
            `SELECT * FROM clientes ORDER BY nome`
        )
        return result.rows
    }

    async buscarPorID(id) {
        const result = await this.pool.query(
            `SELECT * FROM clientes WHERE id = $1`,
            [id]
        )

        if (result.rows.length === 0) {
            throw new Error('Cliente não encontrado')
        }

        return result.rows[0]
    }

    async excluir(id){
        await this.pool.query(
            `DELETE FROM clientes WHERE id = $1`,
            [id]
        )
    }
}

module.exports = ClienteService