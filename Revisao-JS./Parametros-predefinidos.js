function calcArea(base, altura, forma) {

    switch(forma) {
        case 'Q': //Square
        return base * altura
        break
        
        case 'T': // Triangle
        return base * altura/2
        break

        case 'E': //Elipse
        return (base / 2) * (altura / 2) *  Math.PI
        break
    }
}

console.log(calcArea(2, 3, 'Q'))
console.log(calcArea(5, 3, 'T'))
console.log(calcArea(4.5, 4.5, 'E'))
