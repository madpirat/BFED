document.querySelectorAll("button").forEach(function (handleClick) {
    handleClick.addEventListener("click", function () {
        this.style.color = "#fff";
    });
});


// var audio = new Audio("sounds/tom-1.mp3")
// audio.play();