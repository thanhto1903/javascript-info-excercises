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
function filterRangeInPlace(arr, a, b) {
  const condition = (item) => item >= a && item <= b;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (!condition(arr[i])) {
      arr.splice(i, 1);
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert(arr); // [3, 1]
