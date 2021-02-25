//Tem apenas um parametro
//Tem apenas uma linha de codigo com return
function square(x) {
    return x * x
}

//Funçoes com caracteristicas iguais a acima podem ser abreviada em forma de arrowFunctions
//Palavra 'function' foi substituida pelo sinal " => "
//Os pararenteses do parametro são omitidos
//As chaves foram omitidas
//A palavra return foi omitida
let square2 = x => x * x


//Função com dois parametros
function potencia(b, e) { //b = base, e = expoente
    return b ** e
}
console.log(potencia(2, 2))


//quando a função tem mais de 1 parametro os parenteses voltam na arrowfunction
let potencia2 = (b, e) => b ** e

console.log(potencia2(2, 2))