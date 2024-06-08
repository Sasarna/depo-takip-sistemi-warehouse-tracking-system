'use strict';

import { openModal } from '../newRecords/registrationDetail.js';

let filterİnput = document.querySelector("#record-search");

const recDataListKey = 'recDataList';
let recordsHistoryDataList = JSON.parse(localStorage.getItem(recDataListKey)) || [];

let recordsHistoryDataListSpare = [];

function runEvents() {
    document.addEventListener("DOMContentLoaded", pageLoaded);
    filterİnput.addEventListener("keyup", filter);
}

export function recordHistoryCreate() {

    // const productNameValue = document.querySelector("#product-name").value;
    // const entrytimeValue = document.querySelector("#entrytime").value;
    // const warehouseNumberValue = document.querySelector("#warehouse-number").value;
    // const companyNameValue = document.querySelector("#company-name").value;
    // const logisticsCompanyValue = document.querySelector("#logistics-company").value;
    // const weightValue = document.querySelector("#weight").value;
    // const entryDateValue = document.querySelector("#entry-date").value;
    // const productStatusValue = document.querySelector("#product-status").value;

    const productNameValue = document.querySelector("#product-name").value;
    const productTourValue = document.querySelector("#product-tour").value;
    const entrytimeValue = document.querySelector("#entrytime").value;
    const warehouseNumberValue = document.querySelector("#warehouse-number").value;
    const companyNameValue = document.querySelector("#company-name").value;
    const logisticsCompanyValue = document.querySelector("#logistics-company").value;
    const weightValue = document.querySelector("#weight").value;
    const entryDateValue = document.querySelector("#entry-date").value;
    const staydurationValue = document.querySelector("#stayduration").value;
    const productStatusValue = document.querySelector("#product-status").value;
    const additionalNotesValue = document.querySelector("#additional-notes").value;

    const recordsHistoryData = {
        productName: productNameValue,
        productTour: productTourValue,
        entrytime: entrytimeValue,
        warehouseNumber: warehouseNumberValue,
        companyName: companyNameValue,
        logisticsCompany: logisticsCompanyValue,
        weight: weightValue,
        entryDate: entryDateValue,
        stayduration: staydurationValue,
        productStatus: productStatusValue,
        additionalNotes: additionalNotesValue
    }

    recordsHistoryDataList.push(recordsHistoryData);

    localStorage.setItem(recDataListKey, JSON.stringify(recordsHistoryDataList));

    addNewRecordUI(recordsHistoryData);
}

function addNewRecordUI(recordsHistoryElement) {
    /*
    <ul class="list-groups">
        <li class="list-group-items">
            <div class="records-qualifications">
                <div class="records-qualifications-box-box" id="records-qualifications-box-box-one">
                    <div class="records-qualifications-boxs"><span id="productName-span">Ürün Adı : demir çelik </span></div>
                    <div class="records-qualifications-boxs"><span id="warehouseNumber-span">Depo Numarası :4 </span></div>
                </div>
                <div class="records-qualifications-box-box" id="records-qualifications-box-box-two">
                    <div class="records-qualifications-boxs"><span id="productStatus-span">Ürün Durumu : hasarsız </span></div>
                    <div class="records-qualifications-boxs"><span id="logisticsCompany-span">Lojistik Firması : hun lojistik</span></div>
                </div>
                <div class="records-qualifications<-box-box" id="records-qualifications-box-box-three">
                    <div class="records-qualifications-boxs"><span id="weight-span">Ürün Ağırlığı : 18kg</span></div>
                    <div class="records-qualifications-boxs"><span id="companyName-span">Firma Adı : yazıcılar</span></div>
                </div>
                <div class="records-qualifications-box-box" id="records-qualifications-box-box-date-time">
                    <div class="records-qualifications-boxs" id="date-records-time"><span id="entrytime-span">14:25</span></div>
                    <div class="records-qualifications-boxs" id="date-records-time"><span id="entryDate-span">01-25-2021</span></div>
                </div>
            </div>
        </li>
    </ul>
    */
    /*
        const recordsHistoryData = {
        productName: productNameValue,
        entrytime: entrytimeValue,
        warehouseNumber: warehouseNumberValue,
        companyName: companyNameValue,
        logisticsCompany: logisticsCompanyValue,
        weight: weightValue,
        entryDate: entryDateValue,
        productStatus: productStatusValue,
    }
*/
    let listGroups = document.querySelector(".list-groups");

    const parentLi = document.createElement("li");
    parentLi.className = "list-group-items";

    const parentDiv = document.createElement("div");
    parentDiv.className = "records-qualifications";

    //! One box box one
    const childOneBoxOneDiv = document.createElement("div");
    childOneBoxOneDiv.className = "records-qualifications-box-box";
    childOneBoxOneDiv.id = "records-qualifications-box-box-one";

    //! Two box box two
    const childTwoBoxTwoDiv = document.createElement("div");
    childTwoBoxTwoDiv.className = "records-qualifications-box-box";
    childTwoBoxTwoDiv.id = "records-qualifications-box-box-two";

    //! Three box box three
    const childThreeBoxThreeDiv = document.createElement("div");
    childThreeBoxThreeDiv.className = "records-qualifications-box-box";
    childThreeBoxThreeDiv.id = "records-qualifications-box-box-three";

    //! Four box box four date time
    const childFourBoxFourDiv = document.createElement("div");
    childFourBoxFourDiv.className = "records-qualifications-box-box";
    childFourBoxFourDiv.id = "records-qualifications-box-box-date-time";

    //! smalled child div \\\ <div class="records-qualifications-boxs"> /// <span id="productName-span">Ürün Adı : demir çelik </span></div>

    createAndAppendDivWithSpan(childOneBoxOneDiv, "productName-span", `Ürün Adı : ${recordsHistoryElement.productName}`);
    createAndAppendDivWithSpan(childOneBoxOneDiv, "warehouseNumber-span", `Depo Numarası : ${recordsHistoryElement.warehouseNumber}`);

    createAndAppendDivWithSpan(childTwoBoxTwoDiv, "productStatus-span", `Ürün Durumu : ${recordsHistoryElement.productStatus}`);
    createAndAppendDivWithSpan(childTwoBoxTwoDiv, "logisticsCompany-span", `Lojistik Firması : ${recordsHistoryElement.logisticsCompany}`);

    createAndAppendDivWithSpan(childThreeBoxThreeDiv, "weight-span", ` Ürün Ağırlığı : ${recordsHistoryElement.weight} kg`);
    createAndAppendDivWithSpan(childThreeBoxThreeDiv, "companyName-span", `Firma Adı : ${recordsHistoryElement.companyName}`);

    createAndAppendDivWithSpan(childFourBoxFourDiv, "entrytime-span", `Giriş Saati : ${recordsHistoryElement.entrytime}`);
    createAndAppendDivWithSpan(childFourBoxFourDiv, "entryDate-span", `Giriş Tarihi : ${recordsHistoryElement.entryDate}`);

    //TODO appendChild

    parentDiv.appendChild(childOneBoxOneDiv);
    parentDiv.appendChild(childTwoBoxTwoDiv);
    parentDiv.appendChild(childThreeBoxThreeDiv);
    parentDiv.appendChild(childFourBoxFourDiv);

    parentLi.prepend(parentDiv);

    listGroups.prepend(parentLi);

    parentLi.addEventListener('click', function () {
        openModal(recordsHistoryElement); // Modalı açmak için bir fonksiyon çağırıyoruz ve kayıt verilerini parametre olarak iletiyoruz
    });
}

function createAndAppendSpan(parent, id, text) {
    const span = document.createElement("span");
    span.id = id;
    span.textContent = text;
    parent.appendChild(span);
}

function createAndAppendDivWithSpan(parent, id, text) {
    const div = document.createElement("div");
    div.className = "records-qualifications-boxs";
    const span = document.createElement("span");
    span.id = id;
    span.textContent = text;
    div.appendChild(span);
    parent.appendChild(div);
}

function recordsHistoryCheckStorage() {
    if (localStorage.getItem("recDataList") === null) {
        recordsHistoryDataListSpare = [];
    } else {
        recordsHistoryDataListSpare = JSON.parse(localStorage.getItem("recDataList"));
    }
}

function pageLoaded() {
    recordsHistoryCheckStorage();
    recordsHistoryDataListSpare.forEach((records) => {
        addNewRecordUI(records);
    })
}

function filter(e) {
    const value = filterİnput.value.toLowerCase().trim();
    const recordsHistoryUlList = document.querySelectorAll(".list-group-items");
    recordsHistoryUlList.forEach((element) => {
        if (element.textContent.toLocaleLowerCase().trim().includes(value)) {
            element.setAttribute("style", "display : block");
        } else {
            element.setAttribute("style", "display : none !important")
        }
    });
}

runEvents();

