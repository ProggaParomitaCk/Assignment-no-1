// function bringShingara(money) {
//     console.log(money);
// }
// bringShingara(250);
function bringSingaras(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

// var orderedSingara = bringSingaras(500)
var mytk = 150;
var orderedSingara = bringSingaras(mytk);
console.log('eat...', orderedSingara)