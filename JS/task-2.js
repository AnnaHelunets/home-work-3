const numbers = [23,1,45,87,4,55,6]
let biggestNumber = numbers[0]

for (const number of numbers) {
    if (biggestNumber < number) {
        biggestNumber = number
    }
}
console.log(biggestNumber);