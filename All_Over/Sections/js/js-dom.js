// SELECTION METHODS - DOM

var selectWithId = document.getElementById('oakParagraph');
console.log(selectWithId);

var selectWithClass = document.getElementsByClassName('background');
console.log(selectWithClass);

var selectWithTag = document.getElementsByTagName('h1');
console.log(selectWithTag);

var selectWithQueryId = document.querySelector('#oakParagraph');
console.log(selectWithQueryId);

var selectWithQueryClass = document.querySelector('.background');
console.log(selectWithQueryClass);

var selectWithQueryAllClass = document.querySelectorAll('.background');
console.log(selectWithQueryAllClass);

// MANIPULATION METHODS - DOM

var divToManipulate = document.querySelector('.background');

// divToManipulate.style.height = '50px';
// divToManipulate.style.width = '400px';
// divToManipulate.style.backgroundColor = 'red';
// divToManipulate.style.fontSize = '30px';
// divToManipulate.style.border = '5px solid black';

// divToManipulate.classList.add('addClass');
// divToManipulate.classList.remove('addClass');

divToManipulate.classList.toggle('addClass');
divToManipulate.classList.toggle('addClass');
divToManipulate.classList.toggle('addClass');
