//----------------------------------------------Array methods----------------------------------------------------
//----------------filter method------------
let myArray = [1, 3, 12, 89, 34, 15, 22, 54, 43];
let Newarray = [];

// Uncomment the following section to test the filter method
/*
function MyFilter() {
    let age = Number(prompt("Enter age: "));
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] > age) {
            Newarray.push(myArray[i]);
        }
    }
    console.log(Newarray);
}
MyFilter();
*/

//--------------find method-----------------
// Uncomment the following section to test the find method
/*
function Myfind() {
    let Num = Number(prompt("Enter number"));
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] > Num) {
            Newarray.push(myArray[i]);
        }
    }
    console.log(Newarray);
}
Myfind();
*/

//--------------findIndex method-----------------
// Uncomment the following section to test the findIndex method
/*
function FindIndexOf() {
    let num = Number(prompt("Enter number"));
    let num1 = -1;
    for (let index = 0; index < myArray.length; index++) {
        if (myArray[index] === num) {
            num1 = index;
            break; // Exit the loop once the number is found
        }
    }
    if (num1 !== -1) {
        console.log(`Index of ${num} is ${num1}`);
    } else {
        console.log(`${num} is not found in the array.`);
    }
}

FindIndexOf();
*/

//----------------------------------------------String methods----------------------------------------------------
//--------------StartWith method-----------------
// function customStartsWith(inputString, searchString, position = 0) {
//     if (position < 0 || position >= inputString.length) {
//         return false;
//     }
//     for (let i = 0; i < searchString.length; i++) {
//         if (inputString[position + i] !== searchString[i]) {
//             return false;
//         }
//     }
//     return true;
// }
// const str = "Hello, world!";
// console.log(customStartsWith(str, "Hello"));
// console.log(customStartsWith(str, "world"));
// console.log(customStartsWith(str, "world", 7));

//--------------includes method-----------------
// function customStringIncludes(str, searchString) {
//     for (let i = 0; i <= str.length - searchString.length; i++) {
//         let found = true;
//         for (let j = 0; j < searchString.length; j++) {
//             if (str[i + j] !== searchString[j]) {
//                 found = false;
//                 break;
//             }
//         }
//         if (found) {
//             return true;
//         }
//     }
//     return false;
// }
// const text = "Hello, world!";
// console.log(customStringIncludes(text, "world"));
// console.log(customStringIncludes(text, "universe")); 
//--------------split method-----------------
function customSplit(inputString, delimiter) {
    const result = [];
    let currentSegment = '';
    
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === delimiter) {
        result.push(currentSegment);
        currentSegment = '';
      } else {
        currentSegment += inputString[i];
      }
    }
    result.push(currentSegment);
    
    return result;
  }
  const inputString = "apple,banana,cherry";
  const delimiter = ",";
  const result = customSplit(inputString, delimiter);
  console.log(result);
  

