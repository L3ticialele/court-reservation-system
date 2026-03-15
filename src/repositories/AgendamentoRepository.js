class AgendamentoRepository{
    constructor(pool){
        this.pool = pool;
    }

    async criar(dados){
        const {cliente_id, quadra_id, data, horario_inicio, horario_fim, valor} = dados;

        if(!cliente_id || !quadra_id || !data || !horario_inicio || !horario_fim){
            throw new Error('Campos obrigatórios não informados');
        }

        //Verificar se cliente existe
        const cliente = await this.pool.query(
            `SELECT id FROM clientes WHERE id = $1`,
            [cliente_id]
        );

        if(cliente.rows.length === 0){
            throw new Error('Cliente não encontrado');
        }

        //Verificar se quadra existe
        const quadra = await this.pool.query(
            `SELECT id FROM quadras WHERE id = $1`,
            [quadra_id]
        );

        if(quadra.rows.length === 0){
            throw new Error ('Quadra não encontrada');
        }

        //Verificar conflito de horário
        const confilto = await this.pool.query(
            `SELECT id FROM agendamentos
            WHERE quadra_id = $1
            AND data = $2
            AND status = 'confirmado'
            AND(
                (hora_inicio < $4 AND hora_fim > $3)
            )`,
            [quadra_id, data, horario_inicio, horario_fim]
        );

        if(conflito.rows.length > 0){
            throw new Error('Já existe um agendamento nesse horário');
        }

        //Inserindo no banco
        const result = await this.pool.query(
            `INSERT INTO agendamentos
            (cliente_id, quadra_id, data, hora_inicio, hora_fim, valor, status)
            VALUES ($1, $2, $3, $4, $5, $6, 'confirmado')
            RETURNING *`,
            [cliente_id, quadra_id, data, horario_inicio, horario_fim, valor]
        )

        return result.rows[0];
     }

     async listar(){
        const result = await this.pool.query(
            `SELECT 
                a.*,
                c.nome AS nome_cliente, 
                q.nome AS nome_quadra
            FROM agendamentos a
            JOIN clientes c ON a.cliente_id = c.id
            JOIN quadras q ON a.quadra_id = q.id
            ORDER BY a.data, a.hora_inicio`
        );

        return result.rows;
     }
}

module.exports = AgendamentoRepository;