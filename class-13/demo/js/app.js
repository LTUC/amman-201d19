'use strict';
// console.log('hello');
// target our order form from the html
const orderForm = document.getElementById('orderForm');
const orders = document.getElementById('orders');

// console.log(JSON);

// let normalObj = { name: 'Fidaa', age: 20 };
// console.log('normal', normalObj);
// let stringObj = JSON.stringify(normalObj)
// localStorage.setItem('obj', stringObj);
// console.log('stringified obj', stringObj)
// constructor function to create a basic drink
function Coffee(name, size, milk, isHot, drinkType) {
    this.name = name;
    this.size = size;
    this.isHot = isHot;
    this.drinkType = drinkType;
    this.milk = milk;

    // add every drink that gets created into an array
    Coffee.drinks.push(this);

    settingItem();
}

// set the global array to empty
Coffee.drinks = [];

function settingItem() {
    let data = JSON.stringify(Coffee.drinks);
    // console.log(data);
    localStorage.setItem('coffee', data);
}


function gettingItem() {
    let stringObj = localStorage.getItem('coffee');
    // console.log('from the local storage', stringObj);
    let normalObj = JSON.parse(stringObj);
    // console.log('after parsing', normalObj);
    if (normalObj !== null) {

        Coffee.drinks = normalObj;
    }
    renderOrders();
}


// event handler function to run every time the form is submitted
function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target);

    // get all the values from the form
    const drink = event.target;
    const name = drink.name.value;
    const size = drink.size.value;
    const isHot = drink.isHot.checked;
    const dType = drink.drinkType.value;
    const milk = drink.milk.value;

    new Coffee(name, size, milk, isHot, dType);

    // update the previous orders with the new order
    renderOrders();

}


function renderOrders() {
    // clear all my current uls to prevent duplicate information
    orders.textContent = '';
    // console.log('my array', Coffee.drinks);
    // go through the array and output the details of each drink in the array
    for (var i = 0; i < Coffee.drinks.length; i++) {
        var drinkLI = document.createElement('li');
        var infoP = document.createElement('p');
        var temp;
        if (Coffee.drinks[i].isHot) {
            temp = 'hot';
        } else {
            temp = 'cold';
        }
        infoP.textContent = `${Coffee.drinks[i].name} ordered a ${temp} ${Coffee.drinks[i].size} ${Coffee.drinks[i].drinkType} with ${Coffee.drinks[i].milk}`;
        drinkLI.appendChild(infoP);
        orders.appendChild(drinkLI);
    }
}

// Add an event listener to the submit button
orderForm.addEventListener('submit', handleSubmit);
gettingItem();