const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let result = 0

const newArray = array1.concat(array2)
console.log(newArray);

for (const items of newArray) {
result += items
}
console.log(result);   