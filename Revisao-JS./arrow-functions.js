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

function megaSena() {
    //this function returns an aleatory number between 1 and 60
    //Math.random() -> returns an aleatory number between 0 and 1
    // * 60 -> Ajust the function to return numbers between 0 and 59
    // + 1 -> ajusts the function to return numbers between 1 and 60
    // Math.floor -> it removes the decimal numbers 
    return Math.floor(Math.random() * 60 + 1)
}

console.log(megaSena(), megaSena(), megaSena(), megaSena(), megaSena())

// Megasena as an arrow function.
const megasena2 = () => Math.floor(Math.random() * 60 + 1 )

const somatudo = (...nums) => {
    let soma = 0
    // O parametro de resto, dentro de uma função, é interpretado como um vetor.
    for(let n of nums) soma += n
    return soma
}