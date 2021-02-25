console.log(Math.min(20, 3, 47, 33, 80, 92)) //Returns the lowest number in the list
console.log(Math.max(20, 3, 47, 33, 80, 92)) //Returns the max number in the list

let numbers = [20, 3, 47, 33, 80, 92]

console.log(Math.min(...numbers))// Spread the list
console.log(Math.max(...numbers))

function somaTudo(...nums) {
    let sum = 0

    for(let n of nums) sum += n
    return sum
}

console.log(somaTudo(20, 3, 47, 33, 80, 92))