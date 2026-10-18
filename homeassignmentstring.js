let arr = ['sudha',200,'joshna']
 let poppedArray = arr.pop()
console.log(poppedArray);
console.log(arr.length);

let arr1 = "  sudha    "
let trimmedArray = arr1.trim()
console.log(trimmedArray);

let String = 'sudha is learning java';
splitedString = String.split(' ');
console.log(splitedString);
 let lastWord = splitedString[splitedString.length - 1];
 console.log(lastWord);
 let lastWordLength = lastWord.length;
 console.log(lastWordLength);
 console.log(arr.length);

let str1 = "S u D h A";
let str2 = "a h d s u";

// 1. Remove spaces and convert to lowercase
let string1 = str1.replace(/\s/g, '').toLowerCase();
let string2 = str2.replace(/\s/g, '').toLowerCase();

console.log(string1);
console.log(string2);

// 2. Sort the characters
let sortedString1 = string1.split('').sort().join('');
let sortedString2 = string2.split('').sort().join('');

console.log(sortedString1);
console.log(sortedString2);

// 3. Compare sorted strings
let result = sortedString1 === sortedString2;

console.log(result);

