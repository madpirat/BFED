function DiceMe() {


    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    // generating random number from 0 to 5.99.. 
    // (floor rounds to even number, +1 changes range from 0 to 1)

    var randomDiceImage = "dice" + randomNumber1 + ".png"; // from dice1.png to dice6.png

    var randomImageSource = "images/" + randomDiceImage; // images/dice1.ong to images/dice6.png

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    //depending on the result, h1 changes


}