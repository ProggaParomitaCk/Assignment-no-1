// let sum = 0;
// for (i = 1; i <= 5; i++) {
//     sum = sum + i;
// }
// console.log(sum)
function sum(i) {
    return i + sum(i);
}
const rslt = sum(9);
console.log(rslt);