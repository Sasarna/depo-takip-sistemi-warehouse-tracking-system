'use strict';

let warehouseBtnOne = document.getElementById("warehouse-box-container-btn-one");
let warehouseBtnTwo = document.querySelector("#warehouse-box-container-btn-two");
let warehouseBtnThree = document.querySelector("#warehouse-box-container-btn-three");
let warehouseBtnFour = document.querySelector("#warehouse-box-container-btn-four");
let warehouseBtnFive = document.querySelector("#warehouse-box-container-btn-five");
let warehouseBtnSix = document.querySelector("#warehouse-box-container-btn-six");

let warehouseScreenOne = document.querySelector("#warehouse-box-container-screen-one");
let warehouseScreenTwo = document.querySelector("#warehouse-box-container-screen-two");
let warehouseScreenThree = document.querySelector("#warehouse-box-container-screen-three");
let warehouseScreenFour = document.querySelector("#warehouse-box-container-screen-four");
let warehouseScreenFive = document.querySelector("#warehouse-box-container-screen-five");
let warehouseScreenSix = document.querySelector("#warehouse-box-container-screen-six");

let warehouseOffXmark = document.querySelectorAll("#xmark-off");

let screenswarehouse = document.querySelectorAll(".warehouse-box-container");

//TODO let warehouseBackBlock = document.querySelector("#warehouse-block");

let warehousePool = [
    {
        target: warehouseBtnOne,
        status: false,
        trigger: warehouseScreenOne
    },
    {
        target: warehouseBtnTwo,
        status: false,
        trigger: warehouseScreenTwo
    },
    {
        target: warehouseBtnThree,
        status: false,
        trigger: warehouseScreenThree
    },
    {
        target: warehouseBtnFour,
        status: false,
        trigger: warehouseScreenFour
    },
    {
        target: warehouseBtnFive,
        status: false,
        trigger: warehouseScreenFive
    },
    {
        target: warehouseBtnSix,
        status: false,
        trigger: warehouseScreenSix
    }
];

warehouseStatus()
function warehouseStatus() {
    warehousePool.forEach((element) => {
        let e = element.status;
        if (e == false) {
            screenswarehouse.forEach((screen) => {
                screen.style.display = "none"
            });
        }
        warehouseClickStatus(element);
        element.target.addEventListener("dragstart", (event) => {
            event.preventDefault();
        });
    });
}

function warehouseClickStatus(element) {
    if (element.status == false) {
        element.target.addEventListener("click", () => {
            element.trigger.style.display = "block";
            element.status = true;
        });
    } else {
        element.target.addEventListener("click", () => {
            element.trigger.style.display = "none";
            element.status = false;
        });
    }
}

warehouseOffXmark.forEach(xmark => {
    xmark.addEventListener("click", () => {
        screenswarehouse.forEach(screen => {
            screen.style.display = "none";
        });
        warehousePool.forEach(element => {
            element.status = false;
        });
    });
});
