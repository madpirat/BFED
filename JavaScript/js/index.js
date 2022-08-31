// Here are some snippets of the code strictly for coding practice purposes

// Fibonacci Generator 

function fibonacciGenerator(n) {

    var output = [];
    if (n === 1) {
        output = [0];
    }
    else if (n === 2) {
        output = [0, 1];
    }
    else {
        output = [0, 1];

        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}

output = fibonacciGenerator(5)
console.log(output)

// // [Arrays] Guest List

// var guestList = ["Marcin", "Ania", "Maciek", "Agata", "Krzysiek", "Beata"];
// var guestName = prompt("What is your name?");

// if (guestList.includes(guestName)) {
//     alert("Welcome " + guestName);
// } else {
//     alert("Sorry " + guestName + ", maybe next time!")
// }

// // FizzBuzz Challenge

// var output = [];
// var count = 1;

// function fizzBuzz() {
//     if (count % 3 === 0 && count % 5 === 0) {
//         output.push("FizzBuzz");
//     }

//     else if (count % 3 === 0) {
//         output.push("Fizz");
//     }
//     else if (count % 5 === 0) {
//         output.push("Buzz");
//     }

//     else {
//         output.push(count);
//     }

//     count++;
//     console.log(output);

// }

