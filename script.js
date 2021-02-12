// // JS EXERCISES

// // 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"

// const x = "John";
// const y = "Doe";
// // console.log(`${x} <> ${y}`);

// // 22) Create an object with properties such name, surname, email

// const myObject = {
//   name: "John",
//   surname: "Doe",
//   email: "john.doe@gmail.com",
// };
// // console.log(myObject);

// // 23) Delete Email from the previously created object

// delete myObject.email;
// // console.log(myObject);

// // 24) Create an array with 10 strings in it

// const myArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

// // 25) Print in the console every string in the previous array

// // for (let i = 0; i < myArray.length; i++) {
// //     console.log(myArray[i])
// // };

// // 26) Create an array with 100 random numbers in it

// const randomN = [];
// for (let i = 0; i < 100; i++) {
//   const num = Math.floor(Math.random() * 100 + 1); // gen. random numbers between 1 and 100 to simplify
//   randomN.push(num);
// }
// // console.log(randomN);

// // 27) Wrote a function to get the MAX and the MIN from the previously created array

// const minMax = () => {
//   const min = Math.min(...randomN);
//   const max = Math.max(...randomN);
//   return console.log(`Min value is: ${min};
// Max value is: ${max}`);
// };
// // minMax();

// // 28) Create an array of arrays, in which every array has 10 random numbers

// const arrayOfArrays = [[], [], []];
// const arrayOne = [];
// // const arrayTwo = [];
// // const arrayThree = [];

// // generate array with 10 random integers
// // if (arrayOfArrays.length)
// // for (let i = 0; i < 10; i++) {
// // //   const array = [];
// //   const numberInArray = Math.floor(Math.random() * 10 + 1);
// //   arrayOne.push(numberInArray);
  
// // }
// // console.log(arrayOne);
// // // arrayOfArrays.slice(0, 0, arrayOne)
// // arrayOne.toString
// // console.log(arrayOfArrays)

// // 29) Create a function that gets 2 arrays and returns the longest one

// const array1 = [1, 2, 3];
// const array2 = [1, 2];
// const returnLongest = (firstArray, secondArray) => {
//     if (firstArray.length === secondArray.length) {
//         console.log(`Both arrays are of equal length`)
//     } else {
//     // firstArray.length > secondArray.length ? console.log(`Array ${firstArray} is longer than ${secondArray}`): console.log(`Array ${firstArray} is shorter than ${secondArray}`);
//     // OR
//     firstArray.length > secondArray.length ? console.log(`Longer array is: ${firstArray}`) : console.log(`Longer array is: ${secondArray}`);
//     }
// }
// // returnLongest(array1, array2);

// // 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

// const arrayOfNoOne = [1, 2, 3];
// const arrayOfNoTwo = [1, 2];
// const compareSum = (a, b) => {
//     let suma = a.reduce(function (x, y) {return x + y}, 0);
//     let sumb = a.reduce(function (x, y) {return x + y}, 0);
//     if (suma === sumb) {
//         console.log(`The sum of values of ${a} and the sum of values of ${b} is equal.`);
        
//     } else {
//         suma > sumb ? console.log(`The sum of ${a} is higher`) : console.log(`Thes sum of ${b} is higher`);
//     };
// }
// compareSum(arrayOfNoOne, arrayOfNoTwo);

// DOM

// 31) Get element with ID "container" from the page

// window.addEventListener("DOMContentLoaded", function () {
const myContainer = document.getElementById(`container`);
// console.log(myContainer);
// myContainer.insertAdjacentHTML(`afterbegin`, `<h1>Hello</h1>`);

// 32) Get every "td" from the page

const everyTd = document.getElementsByTagName(`td`);

// 33) Create a cycle that prints the text inside every td of the page

// everyTd.forEach(td => {
//   console.log(td.innerText);
// });

for (let td of everyTd) {
  console.log(`Inner text: ${td.innerText}`);
};

// 34) Write a function to change the heading of the page

const myNewHeading = () => {
const heading = document.getElementsByTagName(`h1`)[0];
const newHeading = document.createTextNode(`This is my new heading`);
heading.appendChild(newHeading);
document.body.appendChild(heading);
};

// 35) Write a function to add an extra row to the table

const extraRow = () => {
  const table = document.getElementsByTagName(`table`)
}

// 36) Write a function to add the class "test" to each row in the table

const addClassTest = () => {
  const td = document.querySelectorAll(`tr`);
  for (let i = 0; i < td.length; i++) {
    td[i].classList.add("test")
  }
  console.log(td)
}

// 37) Write a function to add a red background to every link in the page
// 38) Console log "Page loaded" when the page is correctly loaded
// 39) Write a function to add new items to a UL
// 40) Write a function to empty a list

// EXTRA

// 41) Add an eventListener to alert when the mouse is over a link, displaying the URL
// 42) Add a button to hide every image on the page
// 43) Add a button to hide and show the table from the page
// 44) Write a function to sum every number inside the TD (if the content is numeric)
// 45) Delete the last letter from the title each time the user clicks on it
// 46) Change a single TD background color when the user clicks on it
// 47) Add a button DELETE, on click it should delete a random TD from the page
// 48) Add a pink border to a cell when the mouse is over it
// 49) Write a function to add a table with 4 rows and 3 columns programmatically
// 50) Write a function to remove the table from the page
// });