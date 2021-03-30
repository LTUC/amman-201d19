'use strict';
let leftIndex;
let rightIndex;
const names = [
  'cruisin-goat',
  'emotional-goat',
  'float-your-goat',
  'goat-out-of-hand',
  'two-goats',
  'sassy-goat',
  'smiling-goat',
  'sweater-goat',
];

const leftImage = document.getElementById('left-image');
const rightImage = document.getElementById('right-image');
const imagesSection = document.getElementById('images-section');
// console.log(leftImage);

// const goats = [];
function Goat(name) {
  this.name = name;
  this.path = `./images/${name}.jpg`;
  this.votes = 0;
  this.views = 0;
  //goats.push(this);
  Goat.all.push(this);
}
Goat.all = [];

for(let i =0;i<names.length;i++){
  new Goat(names[i]);
}
console.log(Goat.all);
// console.table(Goat.all);

function render(){
  leftIndex = randomNumber(0,Goat.all.length-1);
  // console.log('left: ', leftIndex, Goat.all[leftIndex].path);
  // console.log(leftImage);
  leftImage.src = Goat.all[leftIndex].path;
  leftImage.alt = Goat.all[leftIndex].name;
  leftImage.title = Goat.all[leftIndex].name;
  console.log(leftIndex);

  rightIndex = randomNumber(0,Goat.all.length-1);
  // console.log('right: ', leftIndex, Goat.all[rigthIndex].path);
  // console.log(leftImage);
  rightImage.src = Goat.all[rightIndex].path;
  rightImage.alt = Goat.all[rightIndex].name;
  rightImage.title = Goat.all[rightIndex].name;
  console.log(rightIndex);


}

imagesSection.addEventListener('click',handelClick);

function handelClick(event){
  // console.log(event.target.id);
  // if(event.target.id !== 'images-section'){
  //   for(let i=0; i<Goat.all.length; i++){
  //     if(Goat.all[i].name === event.target.title){
  //       Goat.all[i].votes++;
  //     }
  //   }
  // }
  // console.table(Goat.all);
  // render();
  if(event.target.id !== 'images-section'){
    if(event.target.id === rightImage.id)
    {
      Goat.all[rightIndex].votes++;
    }
    else{
      Goat.all[leftIndex].votes++;
    }
  }
  console.table(Goat.all);
  render();
}

//get random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

render();

