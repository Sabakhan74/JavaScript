console.log('Practice_5');
//QUESTION NO 1
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
const middle_Index = Math.floor(styles.length / 2);
styles[middle_Index] = "Classics";
console.log(arr)
const first_Value = styles.shift();
console.log("First value:", first_Value);
styles.unshift("Rap", "Reggae");
console.log("Updated array:", styles);


let styles = ["Jazz", "Blues"];

// Append "Rock-n-Roll" to the end
styles.push("Rock-n-Roll");

// Replace the value in the middle with "Classics"
const middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classics";

// Strip off the first value of the array and show it
const firstValue = styles.shift();
console.log("First value:", firstValue);

// Prepend "Rap" and "Reggae" to the array
styles.unshift("Rap", "Reggae");

console.log("Updated array:", styles);

/* Question 2
Write the function sumInput() that:
Calculates and returns the sum of array items.*/

  function sumInput() {
    let sumInput = 0;
    for (let i = 0; i < arr1.length; i++) {
      sumInput += arr1[i];
    }
    return sumInput;
  }
  let arr1=[10,20,30,50,40,50]
  console.log( sumInput(arr1));
/* Question 3
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with 
values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
For instance:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered ); // 3,1 (matching values)
console.log( arr ); // 5,3,8,1 (not modified)*/

function filterRange(array, a, b) {
    let filteredArray = [];
  
    for (let i = 0; i < array.length; i++) {
      let element = array[i];
  
      if (element >= a && element <= b) {
        filteredArray.push(element);
      }
    }
  
    return filteredArray;
  }
  let array = [5,3,8,1];
  let filtered = filterRange(array, 1, 4);
  
  console.log(filtered); // [3, 1]
  console.log(array); // [5, 3, 8, 1]
  
  //QUESTION NO 4

  function filterRangeInPlace(arrr, a, b) {
    for (let i = 0; i < arrr.length; i++) {
      let element = arrr[i];
  
      if (element < a || element > b) {
        arrr.splice(i, 1);
        i--;
      }
    }
  }
  let arrr = [5,3,8,1];
  filterRangeInPlace(arrr, 1, 4);
  console.log(arrr); // [3, 1]

  /* Question 5
You have an array of user objects, each one has user.name. Write the code
 that converts it into an array of names.
For instance:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names =  ... your code 
console.log( names ); // John, Pete, Mary*/

let john_1 = { name: "John", age: 25 };
let pete_1 = { name: "Pete", age: 30 };
let mary_1 = { name: "Mary", age: 28 };

let users_1 = [john, pete, mary];

let name = users_1.map(user =>user.name);
console.log( name );

/* Question 6
You have an array of user objects, each one has name, surname and id.
Write the code to create another array from it, of objects with id and 
fullName, where fullName is generated from name and surname.
For instance:
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [ john, pete, mary ];
let usersMapped =  ... your code ... 
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith
So, actually you need to map one array of objects to another. Try using => here. 
There’s a small catch.*/



let john_2 = { name: "John", surname: "Smith", id: 1 };
let pete_2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary_2 = { name: "Mary", surname: "Key", id: 3 };

let users = [john_2, pete_2, mary_2];

let usersMapped = users.map(user => ({ fullName: `${user.name} ${user.surname}`,id: user.id}
,{ fullName: `${user.name} ${user.surname}`,id: user.id},
{ fullName: `${user.name} ${user.surname}`,id: user.id}));

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);
console.log(usersMapped[1].id);
console.log(usersMapped[1].fullName);
console.log(usersMapped[2].id);
console.log(usersMapped[2].fullName);


/*Question 7
Write the function getAverageAge(users) that gets an array
 of objects with property age and returns the average age.
The formula for the average is (age1 + age2 + ... + ageN) / N.
For instance:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [ john, pete, mary ];
console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 288*/


function getAverageAge(users) {
    let sum = users.reduce((total, user) => total + user.age,0);
    return sum / users.length;
  }
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };
  let arr = [john, pete, mary];
  console.log(getAverageAge(arr)); 

  /* Question 8
Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.
For instance:
function unique(arr) {
  your code
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
alert( unique(strings) );*/


function unique(arr) {
    return Array.from(new Set(arr));
  }
  let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna",
   "Krishna", "Hare", "Hare", ":-O"];
  console.log(strings)
  console.log(unique(strings));
  
