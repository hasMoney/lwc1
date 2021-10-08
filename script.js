let nums = [77, 15, 83, 125, 33];

nums.forEach(element => console.log(element));


// nums.forEach(function(currentItem){
//     console.log(currentItem);
// })



// console.log(nums);

// let reduced = nums.reduce(function(total, currentItem) {
//     return total + currentItem;
// }, 0)

// console.log(reduced);





// array.reduce(function(total, currentValue, index, array){
//     return whatevs;
// }, initialValue);

// let arr = [33, 45, 61, 133];

// let sortedValues = arr.sort(function(a, b){
//     return b - a;
// })

// console.log(sortedValues);


// let isAllAdult = arr.every(function(currentItem){
//     return currentItem >= 33;
// })

// console.log(isAllAdult);

// let isAllAdult = arr.some(function(currentItem){
//     return currentItem >= 93;
// })

// console.log(isAllAdult);


// let arr = [2, 5, 6, 7, 8, 9];

// let newArray = arr.map(function (currentItem, index, array){
//     console.log(`currentItem: ${currentItem}, index: ${index}, array: ${array}`);
//     return currentItem * 2;
// })
// console.log(newArray);



// let filteredValues = arr.filter(function(currentItem, index, array) {
//     return currentItem > 5;
// })

// console.log(filteredValues);
















// let obj = {
//     name: "hey",
//     age: 25,
//     dob: "3/15/2020"
// }

// let stringified = JSON.stringify(obj);
// console.log(stringified);
// console.log(typeof stringified);

// let parsed = JSON.parse(stringified);
// console.log(parsed);
// console.log(typeof parsed);



// let expression = "Hi my name is mud";

// // let search = expression.includes("mudd");
// //let found = expression.indexOf("is");
// // let beginning = expression.startsWith("Hi");
// // let newString = expression.slice(6, 10);
// // let upper = expression.toUpperCase();
// // let lower = expression.toLowerCase();

// let searchText = "     whoever said    ";

// console.log(searchText.trim());




// let something = {
//     title: "salesforce consultant",
//     exp: "5 years",
//     sal: "5k"
// }

// let {title, exp} = something;

// console.log(title);
// console.log(exp);