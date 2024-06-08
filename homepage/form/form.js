'use strict';

import { recordHistoryCreate } from '../newRecords/newRecords.js';
import { companyNameAdd } from '../logistics/logistics.js';
import { updateWarehouse } from '../warehuseİnformation.js';
import { updateWarehouses } from '../warehuseİnformation.js';
import { setProgressValueHompage } from '../homepage.js';
import { getDataFromLocalStorage } from '../homepage.js';

document.addEventListener('DOMContentLoaded', function () {
    // Önceki verileri depolamak için bir anahtar belirle
    const storageKey = 'warehouseFormData';
    const storageKeySpare = 'warehouseFormDataSpare';

    // localStorage'den önceki verileri al
    let formDataList = JSON.parse(localStorage.getItem(storageKey)) || [];
    let formDataListSpare = JSON.parse(localStorage.getItem(storageKey)) || [];

    const form = document.querySelector('#warehouse-Tracking-Form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Formun varsayılan davranışını engeller (sayfa yenilemeyi engeller)

        // Formdaki değerleri al
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

        // Formdaki değerleri bir nesne içine yerleştirir
        const formData = {
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
        };

        // Yeni veriyi formDataList dizisine ekler
        formDataList.push(formData);
        formDataListSpare.push(formData);
        // formDataList'i local storage'e kaydet
        localStorage.setItem(storageKey, JSON.stringify(formDataList));
        localStorage.setItem(storageKeySpare, JSON.stringify(formDataListSpare));

        recordHistoryCreate();
        companyNameAdd();
        updateWarehouse();
        let totalWeightData = getDataFromLocalStorage()
        setProgressValueHompage(totalWeightData.totalWeight);

        // Diziyi konsola yazdır (isteğe bağlıdır)
        //! kalkıcak 
        // console.log(formDataList);
        // console.log(formDataListSpare);

        form.reset();
        newRecordsNotiification();
    });
});

function newRecordsNotiification() {
    /*
        <div id="notification">
            Yeni Kayıt Eklendi!
        </div>
    */

    const notificationsDiv = document.createElement("div");
    notificationsDiv.id = "notification";
    notificationsDiv.textContent = "Yeni Kayıt Eklendi!";

    let newRecordsScreen = document.querySelector("#new-records-screen");
    newRecordsScreen.appendChild(notificationsDiv);

    notificationsDiv.style.right = "-300px";

    // Bildirimin yandan kayarak gelmesi
    notificationsDiv.animate([
        // Başlangıç pozisyonu
        { right: "-300px" },
        // Bitiş pozisyonu
        { right: "20px" }
    ], {
        duration: 300, // Animasyon süresi
        fill: "forwards" // Son durumda kalmasını sağlar
    });

    setTimeout(() => {
        // Bildirimin yandan kayarak kaybolması
        notificationsDiv.animate([
            // Başlangıç pozisyonu
            { right: "20px" },
            // Bitiş pozisyonu
            { right: "-300px" }
        ], {
            duration: 300, // Animasyon süresi
            fill: "forwards" // Son durumda kalmasını sağlar
        });

        // Bildirimi DOM'dan kaldırın
        setTimeout(() => {
            notificationsDiv.remove();
        }, 500); // Animasyon süresi kadar bekleyin
    }, 3000); // Bildirimin ekranda kalma süresi
}