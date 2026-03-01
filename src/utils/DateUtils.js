//Convertendo modelo da data (dd/MM/yyyy para yyyy-MM-dd)
class DateUtils {
    static formatarDataParaIso(dataBR) {

        if (!dataBR || !dataBR.includes('/')) {
            throw new Error('Formato inválido. Use DD/MM/AAAA')
        }

        const [dia, mes, ano] = dataBR.split('/')

        return `${ano}-${mes}-${dia}`
    }
}

module.exports = DateUtils