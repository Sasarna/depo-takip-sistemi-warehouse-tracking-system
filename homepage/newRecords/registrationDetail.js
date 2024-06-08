'use strict';

export function openModal(recordData) {
    // alert(`Ürün Adı: ${recordData.productName}\nGiriş Saati: ${recordData.entrytime}\nDepo Numarası: ${recordData.warehouseNumber}`);
    UIModalCreate(recordData)
}

function UIModalCreate(recordsData) {

    if(recordsData.additionalNotes === undefined || recordsData.additionalNotes === null || recordsData.additionalNotes === "" ) {
        recordsData.additionalNotes = "Ek bir not bulunmamaktadır";
    } else {
        recordsData.additionalNotes;
    }

    // Modal arkaplanını oluştur
    const modalBackdrop = document.createElement("div");
    modalBackdrop.className = "modal-backdrop";
    document.body.appendChild(modalBackdrop);

    // Modal kutusunu oluştur
    const modalBox = document.createElement("div");
    modalBox.className = "modal-box";

    // Modal içeriği oluştur
    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>Ürün Detayları</h2>
            <button class="modal-close-btn">&times;</button>
        </div>
        <br>
            <p><strong>Ürün Adı:</strong> ${recordsData.productName}</p>
            <p><strong>Ürün Türü:</strong> ${recordsData.productTour}</p>
            <p><strong>Giriş Saati:</strong> ${recordsData.entrytime}</p>
            <p><strong>Depo Numarası:</strong> ${recordsData.warehouseNumber}</p>
            <p><strong>Firma Adı:</strong> ${recordsData.companyName}</p>
            <p><strong>Lojistik Firması:</strong> ${recordsData.logisticsCompany}</p>
            <p><strong>Ürün Ağırlığı:</strong> ${recordsData.weight} kg</p>
            <p><strong>Giriş Tarihi:</strong> ${recordsData.entryDate}</p>
            <p><strong>Kalma Süresi:</strong> ${recordsData.stayduration} Gün</p>
            <p><strong>Ürün Durumu:</strong> ${recordsData.productStatus}</p>
            <p><strong>Ek Notlar:</strong> ${recordsData.additionalNotes}</p>   
    `;

    // productName: productNameValue,
    // productTour: productTourValue,
    // entrytime: entrytimeValue,
    // warehouseNumber: warehouseNumberValue,
    // companyName: companyNameValue,
    // logisticsCompany: logisticsCompanyValue,
    // weight: weightValue,
    // entryDate: entryDateValue,
    // stayduration: staydurationValue,
    // productStatus: productStatusValue,
    // additionalNotes: additionalNotesValue

    // Modal kutusuna içeriği ekle
    modalBox.appendChild(modalContent);
    document.body.appendChild(modalBox);

     // Modalı görünür hale getir ve animasyon ekleyerek aç
     modalBox.style.opacity = 0; // Başlangıçta modalı görünmez yap
     modalBox.style.transition = "opacity 0.5s ease"; // Geçiş efekti için opaklık geçişi tanımla
     setTimeout(() => {
         modalBox.style.opacity = 1; // Belirli bir süre sonra modalı yavaş yavaş görünür hale getir
     }, 0.1);
 

    // Modalı kapatma işlevselliği ekle
    const closeButton = modalContent.querySelector(".modal-close-btn");
    closeButton.addEventListener("click", closeModal);
}

function closeModal() {
    const modalBackdrop = document.querySelector(".modal-backdrop");
    const modalBox = document.querySelector(".modal-box");

    modalBackdrop.remove();
    modalBox.remove();
}