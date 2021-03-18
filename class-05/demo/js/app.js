'use strict';
let x=0; //global variable

function testScoping()
{
  if(true)
  {
    let y=1; //local variable
    console.log('inside if statment',y);

  }
}

testScoping();
console.log(x);
console.log(y);