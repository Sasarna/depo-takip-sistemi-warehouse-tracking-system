'use strict';

let circularProgressHompage = document.querySelector("#circular-progress-id-hompage");
let progressValueHompage = document.querySelector("#progress-value-id-hompage");

export function setProgressValueHompage(value) {
    let angle = value * 3.6;
    progressValueHompage.textContent = `${value}%`;
    circularProgressHompage.style.background = `conic-gradient(#7d2ae8 ${angle}deg, #ededed 0deg)`;
}

export function getDataFromLocalStorage() {
    const weighttarrsString = localStorage.getItem("weighttarrs");
    const totalWeightThszString = localStorage.getItem("totalWeightThsz"); // totalWeightThsz'yi localStorage'dan alıyoruz
    if (weighttarrsString && totalWeightThszString) {
        // JSON formatındaki veriyi alıyoruz
        const weighttarrs = JSON.parse(weighttarrsString);
        const totalWeightThsz = JSON.parse(totalWeightThszString);

        // Her bir ağırlığı geri dönüştürerek bir nesne oluşturuyoruz
        const weights = {};
        for (const key in weighttarrs) {
            // Her bir değeri stringe dönüştürerek kontrol ediyoruz
            const valueAsString = weighttarrs[key].toString();
            // Stringe dönüştürülen değeri kullanarak virgülü kaldırmamız gerekebilir
            weights[key] = parseFloat(valueAsString.replace(/,/g, ''));
        }

        // Toplam ağırlığı geri dönüştürüyoruz
        // totalWeightThsz[0] değerini kontrol ediyoruz
        const totalWeightString = totalWeightThsz[0].toString();
        // Stringe dönüştürülen değeri kullanarak virgülü kaldırıyoruz
        const totalWeight = parseFloat(totalWeightString.replace(/,/g, ''));

        return { weights, totalWeight };
    } else {
        return { weights: {}, totalWeight: 0 }; // localStorage'da veri yoksa varsayılan değerleri döndürüyoruz
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const { weights, totalWeight } = getDataFromLocalStorage();

    setProgressValueHompage((totalWeight).toFixed(2));
});

ymaps.ready(init);
function init() {
    // Harita oluşturma, belirtilen koordinatlar ve varsayılan yakınlaştırmayı kullanma
    let myMap = new ymaps.Map("map", {
        center: [37.761470, 31.284043], // Belirtilen koordinatlar
        zoom: 10, // Yakınlaştırma seviyesi (örneğin)
        controls: [],
    });

    // Harita üzerindeki yakınlaştırma ve uzaklaştırma kontrollerini ekleneceği kısım
    myMap.controls.add('zoomControl');

    // Belirtilen konuma bir işaret koyma
    let placemark = new ymaps.Placemark([37.761470, 31.284043], {}, {
        iconColor: 'red',
        draggable: false
    });
    myMap.geoObjects.add(placemark);
    myMap.controls.remove('searchControl');
    myMap.behaviors.enable('drag');
}

