// #Split string into Array
// #Loop the 2nd index after to capitalizwed the first Char
// #Join again

function splitStringDash(string) {
  const arrayWords = string.split("-");
  return arrayWords;
}

function capitalizedFirstChar(string) {
  const partAfterFirstChar = string.slice(1);
  const capitalizedFirstCharWord = string.charAt(0).toUpperCase();
  const output = capitalizedFirstCharWord + partAfterFirstChar;
  return output;
}

function getFirstWordInString(string) {
  const array = splitStringDash(string);
  return array[0];
}

function loopFromSecondIndexCapitalize(string) {
  const array = splitStringDash(string);
  let finishedString = "";
  for (let i = 1; i < array.length; i++) {
    finishedString += capitalizedFirstChar(array[i]);
  }
  return finishedString;
}

function camelize(string) {
  const camelizedWord =
    getFirstWordInString(string) + loopFromSecondIndexCapitalize(string);
  return camelizedWord;
}

let testString1 = "background-color";
let testString2 = "list-style-image";
let testString3 = "-webkit-transition";
console.log(camelize(testString1));
console.log(camelize(testString2));
console.log(camelize(testString3));

// function filterRange(arr, a, b) {
//   return arr.filter((value) => value >= a && value <= b);
// }

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert(filtered); // 3,1 (matching values)
// alert(arr); // 5,3,8,1 (not modified)

//////////////////////
// function filterRangeInPlace(arr, a, b) {
//   const condition = (item) => item >= a && item <= b;

//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (!condition(arr[i])) {
//       arr.splice(i, 1);
//     }
//   }
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert(arr); // [3, 1]

// //////////////////////

// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort((a, b) => a - b));

/////////////////////

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert(sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (no changes)

// function copySorted(arr) {
//   const copyArr = arr.slice();
//   copyArr.sort((a, b) => a.localeCompare(b));
//   return copyArr;
// }

/////////////////////////////////

// arr = [1, 2, 45, 234, 6, 1];
// let randomeValue = Math.floor(Math.random() * arr.length);

// let arr = [1, 2, 3];
// shuffle(arr);
// // arr = [3, 2, 1]
// shuffle(arr);
// // arr = [2, 1, 3]
// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));

// function shuffle(arr) {
//   let valueToSwitch;
//   let randomeValue;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     randomeValue = Math.floor(Math.random() * (i + 1));
//     let tempValue = arr[i];
//     valueToSwitch = arr[randomeValue];
//     arr[i] = valueToSwitch;
//     arr[randomeValue] = tempValue;
//   }
//   return arr;
// }

/////////////////////////////////

// function unique(arr) {
//   let newArr = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (!newArr.includes(arr[i])) {
//       let value = arr[i];
//       newArr.push(value);
//     }
//   }
//   return newArr;
// }

// let strings = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// alert(unique(strings)); // Hare, Krishna, :-O

/////////////////////////////////

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = getName(users);

// alert(names); // John, Pete, Mary

// function getName(users) {
//   const result = users.map((user) => user.name);
//   return result;
// }

/////////////////////////////////

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map((users) => ({
//   fullName: users.name + " " + users.surname,
//   id: users.id,
// }));
// console.log(usersMapped);

/////////////////////////////////
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

// function sortByAge(users) {
//   users.sort((a, b) => a.age - b.age);
// }

///////////////////////////////// Avg age
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

///////////////////////////////// Created keyed obj from arr
let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
console.log(usersById);

function groupById(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i].id;
    obj[key] = arr[i];
  }
  return obj;
}
//How to create obj
//Way to assign
//Extract name
//Set it as key
// Set existing obj in array as a new value in an object

//1: Lap qua cac item trong array
//2: Lay value id lam ten/key
//3: lay obj trong array bang arr[i] de lam value
//Su dung gan bang ngoac vuong obj[key] = value
//Su dung reduce voi callback
