'use strict';

let clockContainer = document.querySelector("#clock");
let dateContainer = document.querySelector("#date");

setInterval(() => {
    clock();
    date();
}, 1000);

function clock() {
    const date = new Date();

    let hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    hours = hours.toString().padStart(2, 0);
    minutes = minutes.toString().padStart(2, 0);
    seconds = seconds.toString().padStart(2, 0);

    clockContainer.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}

function date() {
    const date = new Date();

    let day = date.toLocaleDateString("tr-TR", { weekday: "long" });
    let month = date.toLocaleDateString("tr-TR", { month: "long" });
    let year = date.getFullYear();
    let monthİndex = date.getDate();

    dateContainer.innerHTML = `${monthİndex} ${month} ${day} ${year}`;
}

