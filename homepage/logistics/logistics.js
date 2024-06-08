'use strict';

const companyNameListkey = 'companyName';
let companyNameList = JSON.parse(localStorage.getItem(companyNameListkey)) || [];

let companyNameListSpare = [];

const logisticsCompanyListKey = 'logisticsCompanyName';
let logisticsCompanyNameList = JSON.parse(localStorage.getItem(logisticsCompanyListKey)) || [];

let logisticsCompanyNameListSpare = [];

function runEnevts() {
    document.addEventListener("DOMContentLoaded", pageLoaded);
}

export function companyNameAdd() {
    const companyNameValue = document.querySelector("#company-name").value;
    const logisticsCompanyValue = document.querySelector("#logistics-company").value;

    const compantyNameData = {
        companyName: companyNameValue,
    }

    const logisticsCompanyNameData = {
        logisticsCompany: logisticsCompanyValue,
    }

    companyNameFilter(compantyNameData, logisticsCompanyNameData)

    localStorage.setItem(companyNameListkey, JSON.stringify(companyNameList));
    localStorage.setItem(logisticsCompanyListKey, JSON.stringify(logisticsCompanyNameList));

    addLogisticsUI(compantyNameData, logisticsCompanyNameData);
}

function companyNameFilter(compantyNameData, logisticsCompanyNameData) {
    companyNameList.push(compantyNameData);
    logisticsCompanyNameList.push(logisticsCompanyNameData);
}

function addLogisticsUI(normal, logistics) {

    let compainesScreenParent = document.querySelector("#compaines-screen");
    let compainesScreenContainer = document.querySelector("#compaines-screen-container-box");

    /*
        <div id="compaines-screen-container-box">
                <div class="compaines-screen" id="compaines-name-screen">
                <span class="company-title">Firmalar</span>
                <div class="compaines-name-boxs" id="">
                    Reverse
                </div>
            </div>
            <div class="compaines-screen" id="compaines-logistics-name-screen">
                <span class="company-title">Lojistik Firması</span>
                <div class="compaines-name-boxs" id="">
                    Hun
                </div>
            </div>
        </div>
    */

    if (normal !== null && normal !== undefined) {
        const normalCompanyNameDiv = document.createElement("div");
        normalCompanyNameDiv.className = "compaines-name-boxs";
        normalCompanyNameDiv.textContent = normal.companyName;

        // Kontrol edilecek olan parent element
        let compainesNameParent = document.querySelector("#compaines-name-screen");

        // Normal companyNameDiv elementi parent içerisinde var mı kontrol et
        let existingNormalElement = compainesNameParent.querySelector(`.compaines-name-boxs[data-company="${normalCompanyNameDiv.textContent}"]`);
        if (!existingNormalElement) {
            normalCompanyNameDiv.dataset.company = normalCompanyNameDiv.textContent; // Veriyi saklamak için kullanılan bir özel özellik ekleyin
            compainesNameParent.appendChild(normalCompanyNameDiv);
        }
    }

    if (logistics !== null && logistics !== undefined) {
        const logisticsCompanyNameDiv = document.createElement("div");
        logisticsCompanyNameDiv.className = "compaines-name-boxs";
        logisticsCompanyNameDiv.textContent = logistics.logisticsCompany;

        // Kontrol edilecek olan parent element
        let logisticsCompanyParent = document.querySelector("#compaines-logistics-name-screen");

        // Logistics companyNameDiv elementi parent içerisinde var mı kontrol et
        let existingLogisticsElement = logisticsCompanyParent.querySelector(`.compaines-name-boxs[data-company="${logisticsCompanyNameDiv.textContent}"]`);
        if (!existingLogisticsElement) {
            logisticsCompanyNameDiv.dataset.company = logisticsCompanyNameDiv.textContent; // Veriyi saklamak için kullanılan bir özel özellik ekleyin
            logisticsCompanyParent.appendChild(logisticsCompanyNameDiv);
        }
    }
    compainesScreenParent.appendChild(compainesScreenContainer);
}

function companyNameCheckStorage() {
    if (localStorage.getItem("companyName") === null && localStorage.getItem("logisticsCompanyName") === null) {
        companyNameList = [];
        logisticsCompanyNameList = [];
    } else {
        companyNameListSpare = JSON.parse(localStorage.getItem(companyNameListkey));
        logisticsCompanyNameListSpare = JSON.parse(localStorage.getItem(logisticsCompanyListKey));
    }
}

function pageLoaded() {
    companyNameCheckStorage();
    if (companyNameListSpare) {
        companyNameListSpare.forEach((element) => {
            addLogisticsUI(element, null);
        });
    }

    if (logisticsCompanyNameListSpare) {
        logisticsCompanyNameListSpare.forEach((element) => {
            addLogisticsUI(null, element);
        });
    }
}

runEnevts();
