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

'use strict';

console.log(this);
const frankie = {
  name:'frankie',
  age:0,
  likes:['cuddling', 'chasing string', 'napping'],
  imagePath: './images/frankie.jpeg',
  isGoodWithKids: true,
  isGoodWithDogs: false,
  isGoodWithCats: true,
  breed:'British shorthair',
  getAge: function(min,max){
    console.log(this);
    this.age = getRandomNumber(min,max);
    console.log(this);
  },
  render: function(){
    const container = document.getElementById('kitten-profiles');
    // console.log(container);
    // <!-- generate this from js: -->
    // <article>
    //   <h2>frankie</h2>
    //   <p>Frankie is adorable, and is 4 months old.</p>
    //   <ul>
    //     <li>cuddling</li>
    //     <li>chasing string</li>
    //   </ul>
    //   <img src="images/frankie.jpeg" />
    // </article>

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
    for(let i=0; i< this.likes.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = this.likes[i];
    }
    const imgEl = document.createElement('img');
    articleEl.appendChild(imgEl);
    imgEl.setAttribute('src',this.imagePath);
  }
};

frankie.getAge(2,10);
frankie.render();


const jumper = {
  name:'jumper',
  age:0,
  likes:['chasing string', 'napping'],
  imagePath: './images/jumper.jpeg',
  isGoodWithKids: true,
  isGoodWithDogs: true,
  isGoodWithCats: false,
  breed:'Egyptian Mau',
  getAge: function(min,max){
    console.log(this);
    this.age = getRandomNumber(min,max);
    console.log(this);
  },
  render: function(){
    const container = document.getElementById('kitten-profiles');
    // console.log(container);
    // <!-- generate this from js: -->
    // <article>
    //   <h2>frankie</h2>
    //   <p>Frankie is adorable, and is 4 months old.</p>
    //   <ul>
    //     <li>cuddling</li>
    //     <li>chasing string</li>
    //   </ul>
    //   <img src="images/frankie.jpeg" />
    // </article>

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
    for(let i=0; i< this.likes.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = this.likes[i];
    }
    const imgEl = document.createElement('img');
    articleEl.appendChild(imgEl);
    imgEl.setAttribute('src',this.imagePath);
  }
};

jumper.getAge(2,10);
jumper.render();

const serena = {
  name:'serena',
  age:0,
  likes:['napping'],
  imagePath: './images/serena.jpeg',
  isGoodWithKids: true,
  isGoodWithDogs: true,
  isGoodWithCats: false,
  breed:'Egyptian Mau',
  getAge: function(min,max){
    console.log(this);
    this.age = getRandomNumber(min,max);
    console.log(this);
  },
  render: function(){
    const container = document.getElementById('kitten-profiles');
    // console.log(container);
    // <!-- generate this from js: -->
    // <article>
    //   <h2>frankie</h2>
    //   <p>Frankie is adorable, and is 4 months old.</p>
    //   <ul>
    //     <li>cuddling</li>
    //     <li>chasing string</li>
    //   </ul>
    //   <img src="images/frankie.jpeg" />
    // </article>

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
    for(let i=0; i< this.likes.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = this.likes[i];
    }
    const imgEl = document.createElement('img');
    articleEl.appendChild(imgEl);
    imgEl.setAttribute('src',this.imagePath);
  }
};

function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

serena.getAge(2,10);
serena.render();
