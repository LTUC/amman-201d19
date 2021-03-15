'use strict';

let age = prompt('what is you age?');
let gender = prompt('what is your gender?');

if(gender.toLowerCase() === 'female')
{
  alert('it is freeeeee !!');
}
else if (age >= 22)
{
  alert('8JD please');
}
else if (age >= 18 && age < 22)
{
  alert('you got a discount!');
}
else
{
  alert('you got a free ticket!');
}


switch(Number(age))
{
case 20:
  console.log('20!');
  break;
case 19:
  console.log('19!');
  break;
default:
  console.log(age);
  break;
}
