// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like (e.g cuddling, chasing string, napping)
// - an image
// good with kids
// good with dogs
// good with other cats
// breed (e.g Egyptian Mau, Persian, British shorthair)

// TODO: dynamically generate kitten objects using form data

// constructor function | factory function
// 1 name start with CAPS
// 2 the use of 'new' keyword for new object
// 3 prototype methods
'use strict';
function Cat(name, likes, isGoodWithKids, isGoodWithDogs, isGoodWithCats, breed) {
  this.name = name;
  this.age = 0;
  this.likes = likes;
  this.imagePath = `./images/${this.name}.jpeg`;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithCats = isGoodWithCats;
  this.breed = breed;
}

Cat.prototype.getAge = function (min, max) {
  // console.log(this);
  this.age = getRandomNumber(min, max);
  // console.log(this);
};

Cat.prototype.render = function () {
  const container = document.getElementById('kitten-profiles');
  // create the element
  // append the element to it's parent
  // add text content to the element || attribuates
  const articleEl = document.createElement('article');
  container.appendChild(articleEl);
  const h2El = document.createElement('h2');
  articleEl.appendChild(h2El);
  h2El.textContent = this.name;
  const pEl = document.createElement('p');
  articleEl.appendChild(pEl);
  pEl.textContent = `${this.name} is adorable, and is ${this.age} months old.`;
  const ulEl = document.createElement('ul');
  articleEl.appendChild(ulEl);
  for (let i = 0; i < this.likes.length; i++) {
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = this.likes[i];
  }
  const tableEl = document.createElement('table');
  articleEl.appendChild(tableEl);
  const headerRowEl = document.createElement('tr');
  tableEl.appendChild(headerRowEl);
  const th1El = document.createElement('th');
  headerRowEl.appendChild(th1El);
  th1El.textContent = 'Good With Dogs';
  const th2El = document.createElement('th');
  headerRowEl.appendChild(th2El);
  th2El.textContent = 'Good With Cats';
  const th3El = document.createElement('th');
  headerRowEl.appendChild(th3El);
  th3El.textContent = 'Good With Kids';
  const tableDataRow = document.createElement('tr');
  tableEl.appendChild(tableDataRow);
  const td1El = document.createElement('td');
  tableDataRow.appendChild(td1El);
  td1El.textContent = this.isGoodWithDogs;
  const td2El = document.createElement('td');
  tableDataRow.appendChild(td2El);
  td2El.textContent = this.isGoodWithCats;
  const td3El = document.createElement('td');
  tableDataRow.appendChild(td3El);
  td3El.textContent = this.isGoodWithKids;
  const imgEl = document.createElement('img');
  articleEl.appendChild(imgEl);
  imgEl.setAttribute('src', this.imagePath);
};


//today we will create the object's instances depend on the user inputs

// const frankie = new Cat('frankie',['cuddling', 'chasing string', 'napping'],true,false,true,'British shorthair');
// const jumper = new Cat('jumper',['cuddling'],true,true,false,'British shorthair');
// const serena = new Cat('serena',['chasing string', 'napping'],true,false,false,'shorthair');

// frankie.getAge(2,10);
// frankie.render();

// jumper.getAge(2,10);
// jumper.render();

// serena.getAge(2,10);
// serena.render();
// console.log(serena);

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

