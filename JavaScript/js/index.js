// Here are some snippets of the code strictly for coding practice purposes

// // [Arrays] Guest List

// var guestList = ["Marcin", "Ania", "Maciek", "Agata", "Krzysiek", "Beata"];
// var guestName = prompt("What is your name?");

// if (guestList.includes(guestName)) {
//     alert("Welcome " + guestName);
// } else {
//     alert("Sorry " + guestName + ", maybe next time!")
// }

// FizzBuzz Challenge

var output = [];
var count = 1;

function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }

    else if (count % 3 === 0) {
        output.push("Fizz");
    }
    else if (count % 5 === 0) {
        output.push("Buzz");
    }

    else {
        output.push(count);
    }

    count++;
    console.log(output);

}