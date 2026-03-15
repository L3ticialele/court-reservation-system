class RelatorioService{
    constructor(relatorioRepository){
        this.relatorioRepository = relatorioRepository;
    }

    async faturamentoPorQuadra(dataInicio, dataFim){
        return this.relatorioRepository.faturamentoPorQuadra(dataInicio, dataFim);
    }

    async faturamentoPorDia(dataInicio, dataFim){
        return this.relatorioRepository.faturamentoPorDia(dataInicio, dataFim);
    }

    async faturamentoPorClientes(dataInicio, dataFim){
        return this.relatorioRepository.faturamentoPorClientes(dataInicio, dataFim);
    }

    async ocupacaoPorQuadra(dataInicio, dataFim){
        return this.relatorioRepository.ocupacaoPorQuadra(dataInicio, dataFim);
    }
}

module.exports = RelatorioService;