'use strict';

let prevScrollpos = window.pageYOffset;
let header = document.querySelector("#header-box-iframe");
let navBar = document.querySelector('nav');
let headerBarOffBtn = document.querySelector("#off-header");
let headerİframe = document.querySelector("#header-iframe");
let mainScreen = document.querySelector("main");
let navBarBtn = document.querySelectorAll(".nav-bar-btn");

let headerBoll = true;

window.onscroll = function () {
    if (headerBoll == true) {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            header.style.top = "0";
            navBar.style.top = "13%"; //! navbar ı tekrar göster
            headerBoll = true;
            mainScreen.style.marginTop = "12%"
        } else {
            header.style.top = "-13%"; //! header ı aşağı kaydır
            navBar.style.top = "0"; //! navbar ı yukarı kaydır
            if (headerBoll == false) {
                headerBoll = true;
            }
            mainScreen.style.marginTop = "12%";
        }
        prevScrollpos = currentScrollPos;
    }
}

headerBarOffBtn.addEventListener("click", () => {
    if (headerBoll == false) {
        headerBoll = true;
        mainScreen.style.marginTop = "0";
    } else if (headerBoll == true) {
        headerBoll = false;
        mainScreen.style.marginTop = "9%";
    }
    headerOff();
    //!console.log(headerBoll.valueOf());
});

function headerOff() {
    if (headerBoll == false) {
        navBar.style.top = "0";
        setTimeout(() => {
            headerİframe.style.marginBottom = "12%";
        }, 115);
        mainScreen.style.marginTop = "6%";
    } else {
        headerİframe.style.display = "flex";
        header.style.top = "0";
        navBar.style.top = "13%";
        setTimeout(() => {
            headerİframe.style.marginBottom = "0";
        }, 60);
        mainScreen.style.marginTop = "12%";
    }
}

document.querySelector("#off-header").onclick = function () {
    this.classList.toggle("rotate");
};

btnBgColor("click");

function btnBgColor(params) {
    let lastClickedBtn = null;
    navBarBtn.forEach(btn => {
        btn.addEventListener(params, function () {
            if (lastClickedBtn !== null) {
                lastClickedBtn.classList.remove("active");
            }
            this.classList.add("active");
            lastClickedBtn = this;
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

let hompageBtn = document.querySelector("#hompage-btn");
let recordsBtn = document.querySelector("#records-btn");
let newRecordsBtn = document.querySelector("#new-record-btn");
let compainesBtn = document.querySelector("#compaines-btn");
let warehouseBtn = document.querySelector("#warehouse-btn");

let hompageScreen = document.querySelector("#hompage-screen");
let recordsScreen = document.querySelector("#records-screen");
let newRecordsScreen = document.querySelector("#new-records-screen");
let compainesScreen = document.querySelector("#compaines-screen");
let warehouseScreen = document.querySelector("#warehouse-screen");

let screens = document.querySelectorAll(".screen");
let warehouseScreens = document.querySelectorAll(".warehouse-box-container");

let interactionSqS = [
    {
        target: hompageBtn,
        status: false,
        trigger: hompageScreen
    },
    {
        target: recordsBtn,
        status: false,
        trigger: recordsScreen
    },
    {
        target: newRecordsBtn,
        status: false,
        trigger: newRecordsScreen
    },
    {
        target: compainesBtn,
        status: false,
        trigger: compainesScreen
    },
    {
        target: warehouseBtn,
        status: false,
        trigger: warehouseScreen
    }
];

status();

function status() {
    interactionSqS.forEach((sequence) => {
        let e = sequence.status;
        if (e == false) {
            screens.forEach((screen) => {
                screen.style.display = "none";
            });
        }
        clickStatus(sequence);
        sequence.target.addEventListener("dragstart", (event) => {
            event.preventDefault();
        });
    });
    interactionSqS.forEach((defSc) => {
        if (defSc.trigger == hompageScreen) {
            defSc.trigger.style.display = "block";
            defSc.status = true;
            defSc.target.style.backgroundColor = "black";
        }
    });
}

function clickStatus(sequence) {
    if (sequence.status == false) {
        sequence.target.addEventListener("click", () => {
            offOtherStatus(sequence);
            sequence.trigger.style.display = "block";
            sequence.status = true;
        });
    } else {
        sequence.target.addEventListener("click", () => {
            sequence.trigger.style.display = "none";
            sequence.status = false;
        });
    }
}

function offOtherStatus(clickedSequence) {
    navBarBtn.forEach(btn => btn.style.backgroundColor = "rgb(44, 46, 45)");
    clickedSequence.target.style.backgroundColor = "black";
    interactionSqS.forEach((sequence) => {
        if (sequence.target !== clickedSequence.target && sequence.status === true) {
            sequence.trigger.style.display = "none";
            sequence.status = false;
        }
    });
}

