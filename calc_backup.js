function soma(x, y){
    return x + y
}
subtracao = (x,y) => x - y //isso é uma arrow function

multiplicacao = function(x,y) {
    return x * y
}

//definição dos valores para teste
const x = 2
const y = 3

function executar(operacao, x, y){
    return operacao(x,y)
}

//print das funções no console
console.log(soma(x,y)) // dessa forma ele só apresenta o resultado a função soma, estou passando o retorno da função como parâmetro
console.log(subtracao(x,y))
console.log(multiplicacao(x,y))
console.log(executar(soma, x, y))
console.log(executar(subtracao, x, y))
console.log(executar(multiplicacao, x, y)) //aqui estou apresentando os parâmetros para a função executar. a função executa qualquer função que tenha 2 parâmetros