console.log('Write a function to check if the every item of array is even');
//SOLUTION
//TEST ARRAY 1
let arr = [1,2,3,4,5];
function checkEvenArray(arr) {
try{
    if (arr.every(num => num % 2 === 0)) {
      console.log('Even Array');
    }
    else{
    throw Error('Custom Error: Array contains odd numbers');
    } 
}catch(error){
    console.log(error);
    }
    finally{
     arr.splice(0,arr.length);
    }
}
checkEvenArray(arr);
console.log(arr);  

//TEST ARRAY 2

let arr1 =[2,4,6,8,10]
function checkEvenArray(arr1) {
    try{ if (arr1.every(num => num % 2 === 0)) {
    console.log('Even Array');
    } else {
     throw Error('Custom Error: Array contains odd numbers');
    } 
}catch(error){
    console.log(error)
}finally{
    arr1.splice(0,arr1.length);  
}
}
 checkEvenArray(arr1);
 console.log(arr1);  

 //TEST ARRAY 3

 let arr2 =[2,4,6,8,41]
 function checkEvenArray(arr2){
    try{
        if(arr2.every(num => num %2===0)){
            console.log('Even Array');
        }else{
            throw Error('Custom Error: Array contains odd numbers')
        }
        }
        catch (error){
            console.log(error);
        }finally{
            arr2.splice(0,arr2.length);
        }
 }
 checkEvenArray(arr2);
 console.log(arr2);