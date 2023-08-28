console.log("practice_3");
console.log('Practice 3');

function subtract (a, b) {
 console.log(a-b); 
  return a-b;
  console.log('a-b')
  
}

const res = subtract(15,4);

console.log(subtract(15,4))

//ARROW FUNCTION
const subtraction_Arrow_Function = (a,b) => { //WITH RETURN
  return a - b;
};
console.log(subtraction_Arrow_Function(100,45));

const subtraction = (a,b) => a - b;  // ONE LINE FUNCTION WITHOUT RETURN
console.log(subtraction(100,45));

//function subtract (a, b)  a-b;


let a = 5, b = 10;
/*

if (a>b) {
    result = a;
  } else {
      result = b
    }
*/
const result = a > b ? a : b; //optional chaning(if else)
console.log(result)

let value_1 = 5;
let value2 = 10;

console.log(value_1 > value2);
console.log(value_1 < value2);

let valueString1 = 'Dann765';
let value_string_1 = '43';

let valueNum = 34343;
console.log(value_string_1.length)
console.log(valueString1.length)
console.log(valueNum.length);   //undefine 

let valueBol = true;

console.log(valueBol.length);   //undefine
console.log(valueString1.length);
console.log(valueString1 > value_string_1);
console.log(valueString1 < value_string_1);
console.log(valueString1 === value_string_1);

let stringValue = "Danish";

if (stringValue.length === 0) console.log('Empty String 1');
if (stringValue === '') console.log('Empty String 2');
if (stringValue) console.log('Non Empty String');
if (!stringValue) console.log('Empty String 3');


let initialValue;    //undefine
console.log(initialValue)

initialValue = null;   //null
console.log(initialValue)



const giveMyCourse_Typical_IfElse = (ai,wd,seo,gd, cs) => {
  if (ai) {
    return ai;
  } else if (wd) {
    return wd;
  } else if (seo) {
    return seo;
  } else if (gd) {
    return gd
  } else if (cs) {
    return cs;
  } else {
    return 'Ghar Jao';
  }
}



const giveMyCourse = (ai, wd, seo, gd, cs) => 
  ai || wd || seo || gd || cs || 'Ghar Jao';
const response = 
  giveMyCourse(null,null, null, null, '');

  console.log(response)

const giveMyCourseModulesAND = (js, html, css, react, db, nodejs) => 
js && html && css && react && db && nodejs && 'Pass';  
//const response_2 = giveMyCourse('JS', 'HTML', 'CSS', '', 'DB', 'NODEJS')  ;

  const giveMyCourseModulesCombinationOfAndOr = (js, html, css, react, db, nodejs) => 
  js && (html || css || react) && db && nodejs && 'Pass';  

  const response_1 = 
  giveMyCourseModulesCombinationOfAndOr('JS', 'HTML', 'CSS', '', 'DB', 'NODEJS');
  
    console.log(response_1)
