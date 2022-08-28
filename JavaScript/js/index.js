// Here are some snippets of the code strictly for coding practice purposes

// [Arrays] Guest List

var guestList = ["Marcin", "Ania", "Maciek", "Agata", "Krzysiek", "Beata"];
var guestName = prompt("What is your name?");

if (guestList.includes(guestName)) {
    alert("Welcome " + guestName);
} else {
    alert("Sorry " + guestName + ", maybe next time!")
}