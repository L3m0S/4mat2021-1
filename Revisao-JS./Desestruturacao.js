let numbers = [10, 20, 30, 40] // -> vector

let car = {
    brand: "BMW",
    model: "320i",
    year: 2021,
    color: "white"
} // -> Object

// Desestruturação do vetor
let [x, y, z] = numbers
console.log(x, y, z)

// Desestruturação parcial / pega apenas o segundo valor do vetor
let [, c, ] = numbers
console.log(c)

// Desestruturação de objetos: O nome das variaveis devem ser iguais ao das propriedades
//let {year, model, color, brand} = car
//console.log(year, model, color, brand)

let {brand, year} = car
console.log(brand, year)

let {brand: marca, year: ano} = car
console.log(marca, ano)

