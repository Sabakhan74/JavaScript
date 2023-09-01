console.log('practice_6');
//.....ARRAYS METHODS.....
// Array length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);

//Array toString()
let size1 =fruits.toString();
console.log(size1);

//join method (joins all array elements into a string)
let size2= fruits.join(" * ");
console.log(size2);

//Array pop()
fruits.pop();
console.log(fruits);

//Array push()
fruits.push("banana");
console.log(fruits);

//Shifting Elements 
//(Shifting is equivalent to popping, but working on the first element instead of the last)
//Array shift()
fruits.shift();
console.log(fruits);

//Array unshift()
//adds a new element to an array (at the beginning), and "unshifts" older elements
fruits.unshift("kiwi");
console.log(fruits)

//delete.fruits[0];

//Merging (Concatenating) Arrays
const arr1=[1,2,3,4]
const arr2=[5,6,7,8]
const arr3= arr1.concat(arr2);
console.log(arr1)
console.log(arr2)
console.log(arr3)

//Flattening an Array
//Flattening an array is the process of reducing the dimensionality of an array.
const myArr = [[1,2],[3,4],[5,6]];
console.log(myArr)
const newArr = myArr.flat();
console.log(newArr)

//Splicing and Slicing Arrays
//Array splice() used to add new items to an array
let fruit = ["Banana", "Orange", "Apple", "Mango"];
//fruit.splice(2,0, "Lemon", "Kiwi"); 
console.log(fruit)
//const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.splice(2, 2, "Lemon", "Kiwi");
console.log(fruit)
//splice() to Remove Elements
fruit.splice(0,1)
console.log(fruit)

//Array slice()
//fruit.slice(3);
console.log(fruit.slice(2))

//Sorting an Array
let ar = [23,43,1,2];
ar.sort();
console.log(ar)

//Reversing an Array
ar.sort();
ar.reverse();
console.log(ar)

//Find the Highest (or Lowest) Array Value
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points)
console.log(points[0])
console.log(points[points.length-1])

//Sorting Object Arrays
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
cars.sort(function(a, b){return a.year - b.year});
console.log(cars)

//Array flatMap()
const myAr = [1, 2, 3, 4, 5, 6];
const newAr = myAr.flatMap((x) => x * 2);
console.log(myAr)
console.log(newAr)

//Array filter()
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(over18)

//Array reduce()
const number = [45, 4, 9, 16, 25];
let sum = number.reduce(myFunction);
function myFunction(total, value) {
  return total + value;
}
console.log(sum)

// Array every()
const num = [45, 4, 9, 16, 25];
let allOver18 = num.every(myFunction);
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(allOver18)
console.log(someOver18)

