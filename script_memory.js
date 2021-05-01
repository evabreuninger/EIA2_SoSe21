"use strict";
var L03_MemorySettings;
(function (L03_MemorySettings) {
    window.addEventListener("load", handleLoad);
    let div;
    let cardArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z "];
    let playCardArray = [];
    let choosenArray = [];
    let hiddenCards = [];
    let inputNo = 0;
    function handleLoad(_event) {
        let start = document.querySelector("button");
        start.addEventListener("click", createCards);
    }
    function createCards(_event) {
        let formData = new FormData(document.forms[0]);
        let inputString = formData.get("NrPairs");
        if (inputString) {
            inputNo = Number(inputString);
        }
        else {
            inputNo = 5;
        }
        if (inputNo < 5 || inputNo > 25) {
            createCards(_event);
        }
        let cardSize = formData.get("SzCards");
        let bground = formData.get("CoBground");
        let cardBground = formData.get("CoCard");
        let fontColor = formData.get("CoFont");
        let fontStyle = formData.get("Radiogroup");
        div = document.querySelector(".game");
        div.innerHTML = "";
        div.style.backgroundColor = bground.toString();
        for (let i = 0; i < inputNo; i++) {
            let card = document.createElement("div");
            card.innerHTML = "<p>" + cardArray[i] + "</p>";
            card.style.width = cardSize + "px";
            card.style.height = cardSize + "px";
            card.setAttribute("class", "front hidden");
            card.style.backgroundColor = cardBground.toString();
            card.style.color = fontColor.toString();
            card.style.fontStyle = fontStyle.toString();
            playCardArray.push(card);
            div.appendChild(card);
            let secCard = document.createElement("div");
            secCard.innerHTML = "<p>" + cardArray[i] + "</p>";
            secCard.style.width = cardSize + "px";
            secCard.style.height = cardSize + "px";
            secCard.setAttribute("class", "front hidden");
            secCard.style.backgroundColor = cardBground.toString();
            secCard.style.color = fontColor.toString();
            secCard.style.fontStyle = fontStyle.toString();
            playCardArray.push(secCard);
            div.appendChild(secCard);
            card.addEventListener("click", function () {
                if (choosenArray.length < 2 && card.classList.contains("hidden") && card != choosenArray[0]) {
                    card.classList.remove("hidden");
                    card.classList.add("open");
                    console.log(card);
                    choosenArray.push(card);
                    checkPairs(_event);
                }
            });
            secCard.addEventListener("click", function () {
                if (choosenArray.length < 2 && secCard.classList.contains("hidden") && secCard != choosenArray[0]) {
                    secCard.classList.remove("hidden");
                    secCard.classList.add("open");
                    choosenArray.push(secCard);
                    checkPairs(_event);
                }
            });
            playCardArray.sort(() => 0.5 - Math.random());
            div.appendChild(playCardArray[i]);
        }
    }
    function checkPairs(_event) {
        if (choosenArray.length == 2) {
            setTimeout(() => {
                if (choosenArray[0].innerHTML == choosenArray[1].innerHTML) {
                    choosenArray[0].classList.remove("open");
                    choosenArray[0].classList.add("visible");
                    choosenArray[1].classList.remove("open");
                    choosenArray[1].classList.add("visible");
                    hiddenCards.push(choosenArray[0]);
                    hiddenCards.push(choosenArray[1]);
                }
                else {
                    choosenArray[0].classList.add("hidden");
                    choosenArray[0].classList.remove("open");
                    choosenArray[1].classList.add("hidden");
                    choosenArray[1].classList.remove("open");
                    choosenArray = [];
                }
                choosenArray = [];
                gameEnd();
            }, 2000);
        }
    }
    function gameEnd() {
        if (hiddenCards.length == playCardArray.length) {
            alert("Congratulation! You won!");
            let playAgain = document.createElement("div");
            playAgain.innerHTML = "<button>play again</button>";
            div.appendChild(playAgain);
            playAgain.addEventListener("click", function (e) {
                e.preventDefault();
                location.reload();
            });
        }
    }
})(L03_MemorySettings || (L03_MemorySettings = {}));
//# sourceMappingURL=script_memory.js.map