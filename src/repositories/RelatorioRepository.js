class RelatorioRepository{
    constructor(pool){
        this.pool = pool;
    }

    async faturamentoPorQuadra(dataInicio, dataFim){
        const result = await this.pool.query(
             `SELECT
                q.id AS quadra_id,
                q.nome AS nome_quadra,
                COUNT(a.id) AS total_agendamentos,
                COALESCE(SUM(a.valor), 0) AS faturamento_total
            FROM agendamentos a
            JOIN quadras q ON a.quadra_id = q.id
            WHERE a.data BETWEEN $1 AND $2
            AND a.status = 'confirmado'
            GROUP BY q.id, q.nome
            ORDER BY faturamento_total DESC`,
            [dataInicio, dataFim]
        );

        return result.rows;
    }

    async faturamentoPorDia(dataInicio, dataFim){
        const result = await this.pool.query(
            `SELECT 
                a.data,
                COUNT(a.id) AS total_agendamentos,
                COALESCE(SUM(a.valor), 0) AS faturamento_total
            FROM agendamentos a
            WHERE a.data BETWEEN $1 AND $2
            AND a.status = 'confirmado'
            GROUP BY a.data
            ORDER BY a.data`,
            [dataInicio, dataFim]
        );
        return result.rows;
    }

    async faturamentoPorClientes(dataInicio, dataFim){
        const result = await this.pool.query(
            `SELECT 
                c.id AS cliente_id,
                c.nome AS nome_cliente,
                COUNT(a.id) AS total_agendamentos,
                COALESCE(SUM(a.valor), 0) AS total_gasto
            FROM agendamentos a
            JOIN clientes c ON a.cliente_id = c.id
            WHERE a.data BETWEEN $1 AND $2
            AND a.status = 'confirmado'
            GROUP BY c.id, c.nome
            ORDER BY total_gasto DESC`,
            [dataInicio, dataFim]
        );
        return result.rows;
    }

    async ocupacaoPorQuadra(dataInicio, dataFim){
        const result = await this.pool.query(
            `SELECT 
                q.nome,
                COUNT(a.id) AS total_agendamentos
            FROM quadras q
            LEFT JOIN agendamentos a
                ON a.quadra_id = q.id
                AND a.data BETWEEN $1 AND $2
                AND a.status = 'confirmado'
            GROUP BY q.id, q.nome
            ORDER BY total_agendamentos DESC`,
            [dataInicio, dataFim]
        );
        return result.rows;
    }
}

module.exports = RelatorioRepository;