'use strict';

//Truethy
/*
true
1
'roaa'
'false'
'0'
5*2, 5/2
[]
*/

//Falsy
/*
false
0
''
'a'/2
NAN
let a; undefined
null
*/

let x = '';
if(x)
{
  console.log('hi');
}
else
{
  console.log('no');
}

let y = 'false';
if(y)
{
  console.log('true value');
}
else
{
  console.log('false value');
}

let z = 5*0;
if(z)
{
  console.log('true value');
}
else
{
  console.log('false value');
}


let num = -1;
do
{
  console.log(num);
  num--;
}while(num > 0);

// Array part
console.log('hello js');
 
// data types:
// String
// Numbers
// Boolean
// And Arrays
 
// let grade1=55;
// let grade2=66;
// .
// .
// .
// .
// garde40=99;
 
// Array
let grades=[98,88, 66, 55,90,98, 80];
 
// square brackets  [] 
// curly braces     {} 
// parentheses      () 
 
// console.log(grades);
// first value from the Array
// console.log('the first index',grades[0]);
// console.log('the last index',grades[5]);
 
// Know the Array length
// console.log('the array length',grades.length);
 
// // adding to the end of the array
// grades.push(60);
// console.log('after the push',grades);
// // delete from the end of an array 
// grades.pop();
// console.log('after the pop', grades);
 
// // delete the first index from the array
// grades.shift();
// console.log('after the shift', grades);
 
// for looping the array
 
// for(let i =0; i< grades.length; i++){
//     console.log('the values from the for loop',grades[i]);
// }
 
// undefind
// console.log(grades[10]);
 
// how to know the value index
// console.log('The index of 98',grades.indexOf(98));
 
// -1
// console.log('The index of not an array value',grades.indexOf(100));
// console.log(grades[-1]);
 
let Ahmad=['Ahmad', 25, 180, ['Painist', 'focus','Her']];
console.log('Name is',Ahmad[0]);
console.log('Height is',Ahmad[2]);
console.log('Movies are',Ahmad[3]);
console.log('the 2nd liked Movie is',Ahmad[3][1]);
 
// pushing array inside an array
Ahmad.push(['Mansaf', 'Pasta', 'Shawerma']);
console.log(Ahmad);
Ahmad[3].push('Inception');
console.log('pushing to the inner array',Ahmad);