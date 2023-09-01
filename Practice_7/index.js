console.log('practice_7')
console.log('Error handling')

try{ //detecting the error
    console.log(name);
}
catch {
    console.log('name is not define');
}

try{ //detecting the error
    console.log(name);
}
catch (error){
    console.log(error);
   // console.log('name is not define');
}
let name="sana"
try{
    if(name ==='saba'){
       // return 5;
       console.log('name is saba')
    }else{
        throw Error('name is not saba')
    }
}catch (error){
console.log(error)

const userData =[
    {
        user_name: "saba",
        password: '123987'
    },
    {
        user_name: "sana",
        password:'10043'
    },
    {
        user_name: "saba",
        password: '1277'
    }
]
let userName_1 = "saba"
let password ="123987"
try{
    let usersData = userData.find(values => values.user_name===userName_1&&values.password===password);

if(!usersData){
    console.log('userdata not found');
}else{
    throw Error('user data is found');

}
}catch (error){
console.log(error)
}


for(let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },5000*i);
   
}

for(let i=0;i<5;i++){
    setInterval(() => {
        console.log(i);
    }, 2000 );
}

for(let i=0;i<5;i++){
    setTimeout(function(){
       console.log(i);
   },5000*i,i);
    setInterval(() => {
    console.log(i);
    }, 6000,i );
}
console.log('Practice 7');

console.log('Sync & Async');
find((x)=> x === "abdul")

const add = (x,y) => x+y;
const subtract = (x,y) => x-y;

const calculation = (a,b, callBack) => {
  const c = a * b;

  return callBack(c,10);
}

const resAdd = calculation(1,2, add);
console.log(resAdd);

const resSubtract = calculation(1,2, subtract);
console.log(resSubtract);

const apiCall = (x) => {
  // wait api response
  // store that into a variable
  // modify it using map
  // add images to it using map
}
function printName () {
  console.log('info')
}

console.log('Start');
setTimeout(printName, 3000);
setTimeout(() => console.log('3000 miliseconds'), );
console.log('After setTimeout')

try {
  setTimeout(() => {
    throw Error('Not Working')
  }, 5000)

} catch (error) {
  console.log(error);
}

setInterval(() => console.log('3000 Try Catch'), 3000)

console.log('After Try Catch');

console.log('Promises')

let userName = 'class';
const promise = new Promise((resolve, reject) => {
  if (userName === 'Class') resolve(userName);
  if (userName != 'Class') reject('userName is not class');
})

promise.then(
  (x) => console.log(x)
  )
  .catch(
    (x) => console.log(x)
  ).finally(
    () => console.log('Promise is ended')
  );
  

// Assessment Solution
  const arr =[2,6,8];

  const resEvery = arr.every(x => x%2 === 0);
  const resSome = arr.some(x => x%2 === 0);

  console.log(resEvery);
  console.log(resSome);

  const checkFucntion = (arrayData) => {
    try {
      if (arrayData.every(x => x%2 === 0)) {
        console.log('Even Array')
      } else {
        throw Error('Array is not even')
      }
    } catch (error) {
      console.log(error);
    } finally {
      arrayData.splice(0, arrayData.length)
    }

    console.log(arrayData);
  }

  checkFucntion(arr)


// Promise Chaining
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 3000)
});

promise2.then(x => {
   console.log(x);
  setTimeout(() => {
    console.log(x*2)
    return x*2
  }, 3000)
}).then(x => {
console.log(x)
  console.log(x)
  console.log(x/4)
  return x/4
});


console.log(promise2);
setTimeout(() => console.log(promise2), 5000);

console.log('Fetch')

fetch('https://reqres.in/api/users?page=1')
.then(response => {
  return response.json();
}).then(data => console.log(data.data)).catch(x => console.log(x))
}