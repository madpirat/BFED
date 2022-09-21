document.querySelectorAll("button").forEach(function (handleClick) {
    handleClick.addEventListener("click", function () {
        alert("I got clicked");
    });
});
