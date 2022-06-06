// // SELECTION METHODS - DOM

// var selectWithId = document.getElementById('oakParagraph');
// console.log(selectWithId);

// var selectWithClass = document.getElementsByClassName('background');
// console.log(selectWithClass);

// var selectWithTag = document.getElementsByTagName('h1');
// console.log(selectWithTag);

// var selectWithQueryId = document.querySelector('#oakParagraph');
// console.log(selectWithQueryId);

// var selectWithQueryClass = document.querySelector('.background');
// console.log(selectWithQueryClass);

// var selectWithQueryAllClass = document.querySelectorAll('.background');
// console.log(selectWithQueryAllClass);

// // MANIPULATION METHODS - DOM

// var divToManipulate = document.querySelector('.background');

// // divToManipulate.style.height = '50px';
// // divToManipulate.style.width = '400px';
// // divToManipulate.style.backgroundColor = 'red';
// // divToManipulate.style.fontSize = '30px';
// // divToManipulate.style.border = '5px solid black';

// // divToManipulate.classList.add('addClass');
// // divToManipulate.classList.remove('addClass');

// divToManipulate.classList.toggle('addClass');
// divToManipulate.classList.toggle('addClass');
// divToManipulate.classList.toggle('addClass');

// // MANIPULATION METHODS PART 2 - DOM

// var paragraph = document.querySelector('#oakParagraph');

// // console.log(paragraph.textContent);
// // paragraph.textContent = 'Oak academy is the best, really!';

// paragraph.innerHTML = 'Oak academy is <strong>great</strong>';

// // MANIPULATION METHODS - DOM - ATTRIBUTE

// var myLink = document.querySelector('a');

// console.log(myLink.getAttribute('href'));


// myLink.setAttribute('href', 'http://facebook.com')
// console.log(myLink.getAttribute('href'));

// myLink.textContent = 'Go To FaceBook Now!'

// EVENT HANDLERS

var button = document.querySelector('#btn1');
var title = document.querySelector('#OAKTitle');

button.addEventListener('click', function () {
    console.log('You clicked the button');
    title.style.backgroundColor = 'red';
});

// var listParent = document.querySelector('ul');

// // My Solution
// var liColorChange = document.querySelectorAll('li');
// liColorChange.setAttribute('li', '#colorChange');

// liColorChange.addEventListener('click', function () {
//     liColorChange.style.backgroundColor = 'white';
// });


// // PROPER SOLUTION 

// var listParent = document.querySelector('ul');
// var listItems = document.querySelectorAll('li');
// console.log('listItems', listItems);

// listParent.addEventListener('click', function () {
//     console.log('You clicked the UL');
//     listParent.style.backgroundColor = 'blue';
// });

// for (var i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener('click', function () {
//         this.style.color = 'white';
//     })
// }


// // CALLBACK FUNCTION

// var oakParagraph = document.querySelector('#oakParagraph');

// function toggleBackground() {
//     oakParagraph.classList.toggle('toggleBackground');
// }

// oakParagraph.addEventListener('click', toggleBackground);

// TO-DO List Quiz - Solution

// var firstTodoItem = document.querySelector('.todoItem');
// firstTodoItem.addEventListener('mouseover', function () {
//     firstTodoItem.style.backgroundColor = 'blue';
//     firstTodoItem.style.color = 'white';
// })

// firstTodoItem.addEventListener('mouseout', function() {
//     firstTodoItem.style.backgroundColor = 'white';
//     firstTodoItem.style.color = 'black';
// })

var todoListItems = document.querySelectorAll('.todoItem');

for (var i = 0; i < todoListItems.length; i++) {
    todoListItems[i].addEventListener('mouseover', function () {
        this.style.backgroundColor = 'blue'
        this.style.color = 'white'
    })

    todoListItems[i].addEventListener('mouseout', function () {
        this.style.backgroundColor = 'white'
        this.style.color = 'black'
    })

    todoListItems[i].addEventListener('click', function () {
        this.classList.add('okay');
    })
}







