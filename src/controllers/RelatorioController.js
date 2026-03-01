const DateUtils = require('../utils/DateUtils')

class RelatorioController {
    constructor(relatorioService) {
        this.relatorioService = relatorioService
    }

    faturamentoPorQuadra = async (req, res) => {
        try {
            const { inicio, fim } = req.query

            if (!inicio || !fim) {
                return res.status(400).json({ error: 'Data inicial e final são obrigatórias' })
            }

            const dataInicio = DateUtils.formatarDataParaIso(inicio)
            const dataFim = DateUtils.formatarDataParaIso(fim)

            const dados = await this.relatorioService.faturamentoPorQuadra(
                dataInicio,
                dataFim
            )

            res.json(dados)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Erro ao gerar relatório' })
        }
    }

    faturamentoPorDia = async (req, res) => {
        try{
            const {inicio, fim} = req.query

            if(!inicio || !fim){
                return res.status(400).json({error: 'Data inicial e final são obrigatórias'})
            }

            const dataInicio = DateUtils.formatarDataParaIso(inicio)
            const dataFim = DateUtils.formatarDataParaIso(fim)

            const dados = await this.relatorioService.faturamentoPorDia(
                dataInicio, 
                dataFim
            )

            res.json(dados)
        }catch(error){
            console.error(error)
            res.status(500).json({error: 'Erro ao gerar relatório por dia'})
        }
    }

    faturamentoPorCliente = async (req, res) => {
        try{
            const {inicio, fim} = req.query

            if(!inicio || !fim){
                return res.status(400).json({error: 'Data inicial e final são obrigatórias'})
            }

            const dataInicio = DateUtils.formatarDataParaIso(inicio)
            const dataFim = DateUtils.formatarDataParaIso(fim)

            const dados = await this.relatorioService.faturamentoPorClientes(
                dataInicio, 
                dataFim
            )

            res.json(dados)
        }catch(error){
            console.error(error)
            res.status(500).json({error: 'Erro ao gerar relatório por clientes'})
        }
    }

    ocupacaoPorQuadra = async (req, res) => {
        try{
            const {inicio, fim} = req.query

            if(!inicio || !fim){
                return res.status(400).json({error: 'Data inicial e final são obrigatórias'})
            }

            const dataInicio = DateUtils.formatarDataParaIso(inicio)
            const dataFim = DateUtils.formatarDataParaIso(fim)

            const dados = await this.relatorioService.ocupacaoPorQuadra(
                dataInicio, 
                dataFim
            )

            res.json(dados)
        }catch(error){
            console.error(error)
            res.status(500).json({error: 'Erro ao gerar relatório da ocupação por quadra'})
        }
    }

}

module.exports = RelatorioController