'use strict';
let leftIndex;
let rightIndex;
let maxAttempts = 10;
let attempt = 1;
let votes = [];
let views = [];

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

for (let i = 0; i < names.length; i++) {
  new Goat(names[i]);
}
// console.log(Goat.all);
// console.table(Goat.all);

function render() {

  leftIndex = randomNumber(0, Goat.all.length - 1);
  // console.log('left: ', leftIndex, Goat.all[leftIndex].path);
  // console.log(leftImage);
  leftImage.src = Goat.all[leftIndex].path;
  leftImage.alt = Goat.all[leftIndex].name;
  leftImage.title = Goat.all[leftIndex].name;
  // console.log(leftIndex);
  Goat.all[leftIndex].views++;
  rightIndex = randomNumber(0, Goat.all.length - 1);
  // console.log('right: ', leftIndex, Goat.all[rigthIndex].path);
  // console.log(leftImage);
  rightImage.src = Goat.all[rightIndex].path;
  rightImage.alt = Goat.all[rightIndex].name;
  rightImage.title = Goat.all[rightIndex].name;
  // console.log(rightIndex);
  Goat.all[rightIndex].views++;

}

imagesSection.addEventListener('click', handelClick);

function handelClick(event) {

  if (event.target.id !== 'images-section') {
    if (attempt < maxAttempts) {
      attempt++;
      if (event.target.id === rightImage.id) {
        Goat.all[rightIndex].votes++;
      }
      else {
        Goat.all[leftIndex].votes++;
      }
      render();
    }
    else {
      if (event.target.id === rightImage.id) {
        Goat.all[rightIndex].votes++;
      }
      else {
        Goat.all[leftIndex].votes++;
      }
      let ulEl = document.getElementById('listResult');
      let liEl;
      for (let i = 0; i < Goat.all.length; i++) {
        votes.push(Goat.all[i].votes);
        views.push(Goat.all[i].views);

        liEl = document.createElement('li');
        liEl.textContent = `${Goat.all[i].name} has ${Goat.all[i].views} views and has ${Goat.all[i].votes} votes.`;
        ulEl.appendChild(liEl);
      }
      imagesSection.removeEventListener('click', handelClick);
      console.log('votes ', votes);
      console.log('views ', views);

      chartRender();
    }
    // console.table(Goat.all);
  }
}

//get random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

render();

function chartRender() {
  let ctx = document.getElementById('myChart').getContext('2d');
  let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: names,
      datasets: [{
        label: 'goat votes',
        backgroundColor: 'red',
        borderColor: 'rgb(255, 99, 132)',
        data: votes
      },
      {
        label: 'goat views',
        backgroundColor: 'green',
        borderColor: 'rgb(255, 99, 132)',
        data: views
      }]
    },

    // Configuration options go here
    options: {}
  });
}

