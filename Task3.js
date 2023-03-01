const dados = require('./dados.json')

const dadosFiltrados = dados.filter((dadoDia)=>(dadoDia.valor != 0 ))

const diaMenorFaturamento = () => dadosFiltrados.reduce((diaAnterior,diaAtual)=>{
    if(diaAnterior.valor > diaAtual.valor){
        return diaAtual
    }else{
        return diaAnterior
    }
},dadosFiltrados[0])

const diaMaiorFaturamento = () => dadosFiltrados.reduce((diaAnterior,diaAtual)=>{
    if(diaAnterior.valor < diaAtual.valor){
        return diaAtual
    }else{
        return diaAnterior
    }
},dadosFiltrados[0])

const diasMaiorQueMedia = () => {
    const media = dadosFiltrados.map(dia => dia.valor).reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual) / dadosFiltrados.length
    return dadosFiltrados.filter(dia => dia.valor > media).length
}


console.log("O menor valor de faturamento ocorrido em um dia do mês",diaMenorFaturamento().valor)
console.log("O maior valor de faturamento ocorrido em um dia do mês",diaMaiorFaturamento().valor)
console.log("Número de dias no mês em que o valor de faturamento diário foi superior à média mensal", diasMaiorQueMedia())
