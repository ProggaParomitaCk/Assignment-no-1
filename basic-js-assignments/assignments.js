// function radianToDegree(radian) {
//     const degree = radian * (180 / 3.1416);
//     return degree;
// }

// const radianToDegreeConversion = radianToDegree(10);
// console.log(radianToDegreeConversion)
// const radianToDegreeConversion = radianToDegree(25);
// console.log(radianToDegreeConversion)
// const radianToDegreeConversion = radianToDegree(199);
// console.log(rd)

// function isJavaScriptFile(String) {
//     if (String.includes('.js')) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const checkJsOrNot = isJavaScriptFile('js.png')
// console.log(checkJsOrNot);

// function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
//     const perLitreDiesel = 114;
//     const perLitrePetrol = 130;
//     const perLitreOctane = 135;

//     const dieselNeeded = dieselQuantity * perLitreDiesel;
//     const petrolNeeded = petrolQuantity * perLitrePetrol;
//     const octaneNeeded = octaneQuantity * perLitreOctane;

//     const totalPrice = dieselNeeded + petrolNeeded + octaneNeeded;

//     return totalPrice;
// }
// const showTotal = oilPrice(1, 1, 1)
// console.log(showTotal)


// function publicBusFare(number) {
//     if (number == 50) {
//         const publicBusFare = 0;
//         return 0;
//     }
//     else if (number == 120) {
//         const busLoad = 50;
//         const busLoad2 = 50;
//         const microLoad = 11;
//         publicBus = 120 - (busLoad + busLoad2 + microLoad);
//         return publicBus * 250;
//     }
//     else if (number == 170) {
//         const busLoad = 50;
//         const busLoad2 = 50;
//         const busLoad3 = 50;
//         const microLoad = 11;
//         publicBus = 170 - (busLoad + busLoad2 + busLoad3 + microLoad);
//         return publicBus * 250;
//     }
//     else if (number == 220) {
//         const busLoad = 50;
//         const busLoad2 = 50;
//         const busLoad3 = 50;
//         const busLoad4 = 50;
//         const microLoad = 11;
//         publicBus = 220 - (busLoad +busLoad2+busLoad3+busLoad4+ microLoad);
//         return publicBus * 250;
//     }
//     else if (number == 270) {
//         const busLoad = 50;
//         const busLoad2 = 50;
//         const microLoad = 11;
//         publicBus = 270 - (busLoad + microLoad);
//         return publicBus * 250;
//     }
//     else if (number == 320) {
//         const busLoad = 50;
//         const busLoad2 = 50;
//         const busLoad3 = 50;
//         const busLoad4 = 50;
//         const busLoad5 = 50;
//         const busLoad6 = 50;
//         const microLoad = 11;
//         publicBus = 320 - (busLoad + microLoad);
//         return publicBus * 250;
//     }
//     else if (number == 370) {
//         const busLoad = 50;
//         const busLoad2 = 50;
//         const busLoad3 = 50;
//         const busLoad4 = 50;
//         const busLoad5 = 50;
//         const busLoad6 = 50;
//         const busLoad7 = 50;
//         const microLoad = 11;
//         publicBus = 370 - (busLoad + microLoad);
//         return publicBus * 250;
//     }
//     else if (number == 420) {
//         const busLoad = 50;
//         const busLoad2 = 50;
//         const busLoad3 = 50;
//         const busLoad4 = 50;
//         const busLoad5 = 50;
//         const busLoad6 = 50;
//         const busLoad7 = 50;
//         const busLoad8 = 50;
//         const microLoad = 11;
//         publicBus = 420 - (busLoad + busLoad + busLoad2 + busLoad3 + busLoad4 + busLoad5 + busLoad6 + busLoad7 + busLoad8 + microLoad);
//         return publicBus * 250;
//     }
//     else if (number == 470) {
//         const busLoad = 50;
//         const busLoad2 = 50;
//         const busLoad3 = 50;
//         const busLoad4 = 50;
//         const busLoad5 = 50;
//         const busLoad6 = 50;
//         const busLoad7 = 50;
//         const busLoad8 = 50;
//         const busLoad9 = 50;
//         const microLoad = 11;
//         publicBus = 450 - (busLoad + busLoad2 + busLoad3 + busLoad4 + busLoad5 + busLoad6 + busLoad7 + busLoad8 + busLoad9 + microLoad);
//         return publicBus * 250;
//     }
//     else if (number == 520) {
//         const busLoad = 50;
//         const busLoad2 = 50;
//         const busLoad3 = 50;
//         const busLoad4 = 50;
//         const busLoad5 = 50;
//         const busLoad6 = 50;
//         const busLoad7 = 50;
//         const busLoad8 = 50;
//         const busLoad9 = 50;
//         const busLoad10 = 50;
//         const microLoad = 11;
//         publicBus = 500 - (busLoad + busLoad2 + busLoad3 + busLoad4 + busLoad5 + busLoad6 + busLoad7 + busLoad8 + busLoad9 + busLoad10 + microLoad);
//         return publicBus * 250;
//     }
// }
// const publicBusFareAmount = publicBusFare(350)
// console.log(publicBusFareAmount)

// function isBestFriend({ Name, FavouriteColor, Wearing },
//     { Name, FavouriteColor, Wearing }) {
//     const x = { Name: ' ', FavouriteColor: ' ', Wearing: ' ' };
//     const y = { Name: ' ', FavouriteColor: ' ', Wearing: ' ' };
//     if (x.FavouriteColor == y.Wearing && x.Wearing == y.FavouriteColor) {
//         return true;
//     }
//     else {
//         return false;
//     }


// }

// const bestFriendcheck = isBestFriend({ Name: 'Rina', FavouriteColor: 'Pink', Wearing: 'Blue' },
//     { Name: 'Rani', FavouriteColor: 'Blue', Wearing: 'Pink' });
// console.log(bestFriendcheck);