function winNum() {

    if (document.getElementsByClassName("circle").length) {
        const removeElements = (elms) => elms.forEach(el => el.remove());
        removeElements(document.querySelectorAll(".circle"));
    }
    let arr = [];
    while (arr.length < 6) {
        let r = Math.floor(Math.random() * 49 + 1);
        if (arr.indexOf(r) === -1) arr.push(r);
        let add = true;

        for (let y = 0; y < 49; y++) {
            if (arr[y] == arr) {
                add = false;
            }
        }
    }

    const sorted = [...arr].sort((a, b) => a - b);
    console.log(sorted)

    sorted.forEach(function (content) {
        let lotto = document.getElementById("lotto");
        let circle = document.createElement("span");
        circle.setAttribute("class", "circle");
        circle.textContent = content;
        lotto.append(circle);
    });
}