
const baseArray = [1,2,3]
const arrayWithAdditionalElements = [...baseArray, 4, 5, 6]

console.log(baseArray)
console.log(arrayWithAdditionalElements)

function sum (a, b, c){
    return a + b + c
}

const result = sum(...baseArray)
console.log(result)