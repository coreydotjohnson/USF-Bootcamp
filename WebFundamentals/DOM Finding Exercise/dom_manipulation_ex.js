//Select the section with an id of container without using querySelector.
let container = document.getElementById('container');

//Select the section with an id of container using querySelector.
container = document.querySelector('#container');

//Select all of the list items with a class of “second”.
let secondLis = document.querySelectorAll('.second');

//Select a list item with a class of third, but only the list item inside of the ol tag.
let thirdOlLi = document.querySelector('ol .third');

//Give the section with an id of container the text “Hello!”.
let hello = document.createElement('span')
hello.textContent = 'Hello!'
document.querySelector('#container').prepend(hello);

//Add the class main to the div with a class of footer.
let footer = document.querySelector('.footer');
footer.classList.add('.main');

//Remove the class main on the div with a class of footer.
footer.classList.remove('.main');

//Create a new li element.
const newLi = document.createElement('li');

//Give the li the text “four”.
newLi.textContent = 'four';

//Append the li to the ul element.
document.querySelector('ul').append(newLi);

//Loop over all of the lis inside the ol tag and give them a background color of “green”.

const olLis = document.querySelectorAll('ol li');
// for (let i = 0; i < olLis.length; i++) {
//     olLis[i].style.backgroundColor = 'green';
// }

for (let i in Object.entries(olLis)) {
    olLis[i].style.backgroundColor = 'green';
}