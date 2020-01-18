// import { doc } from 'prettier';

// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myUl = document.createElement('ul');

// add three list items with the words "one, two three" in them
const li = document.createElement('li');
li.textContent = 'one';
myUl.append(li);
const li2 = document.createElement('li');
li2.textContent = 'two';
myUl.append(li2);
const li3 = document.createElement('li');
li3.textContent = 'three';
myUl.append(li3);

// console.log(myUl);
// put that list into the above wrapper
myDiv.appendChild(myUl);

// create an image
const myImg = document.createElement('img');
// console.log(myImg);

// set the source to an image
myImg.src = 'https://picsum.photos/250';

// set the width to 250
myImg.width = 250;

// add a class of cute
myImg.classList.add('cute');

// add an alt of Cute Puppy
myImg.alt = 'Cute Puppy';
console.log(myImg);

// Append that image to the wrapper
myDiv.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div class='wrapper'>
    <p></p>
    <p></p>
  </div>
`;
const myString = document.createRange().createContextualFragment(myHTML);

document.body.append(myString);

// put this div before the unordered list from above
myDiv.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
const newClass = myHTML.querySelector('p');
newClass.classList.add('warning');
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  // have that function return html that looks like this:
  // <div class="playerCard">
  //   <h2>NAME — AGE</h2>
  //   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
  // </div>
  const cards = `<div class="playerCard">
  <h2>NAME — AGE</h2>
  <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
  </div>`;
  return cards;
}

// make a new div with a class of cards
const functionDiv = document.createElement('div');
functionDiv.classList.add('cards');

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
