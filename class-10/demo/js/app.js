'use strict';

//Hoisting
// all Var's (that we declared with var keyword) will go up to the top of the code with a value of undefined
console.log(userName);
var userName = 'Roaa';

//var userName;
//console.log(userName);
//userName = 'Roaa';

console.log(school);
let school ='ASAC';
/////////////////////////////////////////////////////////////////////

//all function decleration will go to the top of the code with it's value
console.log(sum(1,2));
function sum(a,b){
  return a+b;
}

//all function expression with var will be hoisted to the top of the page with undefined value
console.log(avg(10,2)); //avg is not a function
var avg = function(s,n){
  return s/n;
}

////////////////////////////////////////////////////////////////////////////////

//scopes
//global VS local
const test = 'test'; //global variable
let num = 0; //global variable
for(let i =0; i<4; i++){
  let num = 1; //local variable
  if( i === 3){
    let sum = 10; //local variable
    num = 5;
    console.log(num);
  }
  // console.log(sum);
}




