'use strict';

/*
        -- Yapılacaklar Listesi -- 
     - Deponun dolukuk oranları
     - Sıcaklık oranları
     - Nem oranları
     - Her bir deponun alabileceği belli bir kapasite olacak
     - Her bir girilen ürün kapasitede belli bir yer kaplayacak
     - Ve o depodaki doluluk oranı artıcak
     
        -- Notlar --

     - Depo Kapasitesi = 1.000.000 Kg

    1 - numaralı depo

    2 - numaralı depo

    3 - numaralı depo

    4 - numaralı depo

    5 - numaralı depo

    6 - numaralı depo

    TODO - her bir deponun kilo kapasitesi için arrayi olacak
    TODO - sıcaklık oranları 25 derece ile maximum 42 derece arasında belli bir orana bağlı kalmaksızın değişecek
    TODO - nem oranı sıcaklık ne kadar fazla oluursa o kadar fazla artıcak 
    TODO - depoların arrayindeki ürünlerin ağırlığını alıp toplancak ve depğo kapasitesi olan 1.000.000 kg ile yüzdelik hesaplama yapılacak
    TODO - duruma göre deponun doluluk oranı panele yansıyacak ,

    * arraylere asdece depoların doluluk oranları koyulacak
 */

// Depo nesnesi oluşturuluyor
class Warehouse {
   constructor() {
      this.weights = [];
   }

   addWeight(weight) {
      this.weights.push(weight);
   }

   getTotalWeight() {
      return this.weights.reduce((total, weight) => total + weight, 0);
   }
}

const warehouses = [
   new Warehouse(),
   new Warehouse(),
   new Warehouse(),
   new Warehouse(),
   new Warehouse(),
   new Warehouse()
];

// localStorage anahtarları
const localStorageKeys = [
   'oneWeight',
   'twoWeight',
   'threeWeight',
   'fourWeight',
   'fiveWeight',
   'sixWeight'
];

// Sayfa yüklendiğinde çalışacak işlemler
function pageLoaded() {
   storageCheck();
   updateRanges(); // Range değerlerini güncelle

   // setProgressValue(oneWeight); // İlerleme değeri burada ayarlanır.
   // setProgressValueTwo(twoWeight);
   // setProgressValueThree(threeWeight);
   // setProgressValueFour(fourWeight);
   // setProgressValuefive(fiveWeight);
   // setProgressValueSix(sixWeight);
}

// localStorage kontrolü
function storageCheck() {
   for (let i = 0; i < localStorageKeys.length; i++) {
      const key = localStorageKeys[i];
      const storedData = JSON.parse(localStorage.getItem(key)) || [];
      warehouses[i].weights = storedData;
   }
   storageChecks();
}

// Depo ağırlıklarını günceller ve localStorage'a kaydeder
export function updateWarehouse() {
   const warehouseNumberValue = parseInt(document.querySelector("#warehouse-number").value);
   const weightValue = parseInt(document.querySelector("#weight").value);
   const warehouseIndex = warehouseNumberValue - 1;
   warehouses[warehouseIndex].addWeight(weightValue);
   localStorage.setItem(localStorageKeys[warehouseIndex], JSON.stringify(warehouses[warehouseIndex].weights));
   updateTotalWeights(); // Güncellenen ağırlıkları topla
}

function updateTotalWeights() {
   const totalWeights = warehouses.map(warehouse => warehouse.getTotalWeight());
   localStorage.setItem("totalWeight", JSON.stringify(totalWeights));
   // console.log("Depo Toplam Ağırlıklar:", totalWeights);
   UIWight(totalWeights);
}

document.addEventListener("DOMContentLoaded", pageLoaded);

let rangeWeightOne = document.querySelector("#warehouse-one-range");
let rangeWeightTwo = document.querySelector("#warehouse-two-range");
let rangeWeightThree = document.querySelector("#warehouse-three-range");
let rangeWeightFour = document.querySelector("#warehouse-four-range");
let rangeWeightFive = document.querySelector("#warehouse-five-range");
let rangeWeightSix = document.querySelector("#warehouse-six-range");

const rangeArray = [
   rangeWeightOne,
   rangeWeightTwo,
   rangeWeightThree,
   rangeWeightFour,
   rangeWeightFive,
   rangeWeightSix
];

// localStorage kontrolü
function storageChecks() {
   for (let i = 0; i < localStorageKeys.length; i++) {
      const key = localStorageKeys[i];
      const storedData = JSON.parse(localStorage.getItem(key)) || [];
      warehouses[i].weights = storedData;
   }
}

// Range değerlerini günceller
function updateRanges() {
   for (let i = 0; i < rangeArray.length; i++) {
      const rangeKey = localStorageKeys[i];
      const rangeValue = JSON.parse(localStorage.getItem(rangeKey)) || 0;
      rangeArray[i] = rangeValue;
   }
}
   
// Depo ağırlıklarını günceller ve localStorage'a kaydeder
export function updateWarehouses() {
   const warehouseNumberValue = parseInt(document.querySelector("#warehouse-number").value);
   const weightValue = parseInt(document.querySelector("#weight").value);
   const warehouseIndex = warehouseNumberValue - 1;
   warehouses[warehouseIndex].addWeight(weightValue); ml
   localStorage.setItem(localStorageKeys[warehouseIndex], JSON.stringify(warehouses[warehouseIndex].weights));
   updateTotalWeights(); // Güncellenen ağırlıkları topla
   // totalWeightRange(); // Total weight range hesapla
   updateProgressBars(); // Progress barları güncelle
}

let oneWeight;
let twoWeight;
let threeWeight;
let fourWeight;
let fiveWeight;
let sixWeight;

function UIWight(arrayWeight) {
   oneWeight = arrayWeight[0];
   twoWeight = arrayWeight[1];
   threeWeight = arrayWeight[2];
   fourWeight = arrayWeight[3];
   fiveWeight = arrayWeight[4];
   sixWeight = arrayWeight[5];

   totalWeight()
}

let weightwarehouseArr = JSON.parse(localStorage.getItem("weightwarehouseArrThsz")) || [];

function totalWeight() {
   let totalWeight = oneWeight + twoWeight + threeWeight + fourWeight + fiveWeight + sixWeight;

   // Her bir ağırlığın yüzdesini hesapla
   let weightA = (oneWeight / 1000000) * 100;
   let weightB = (twoWeight / 1000000) * 100;
   let weightC = (threeWeight / 1000000) * 100;
   let weightD = (fourWeight / 1000000) * 100;
   let weightE = (fiveWeight / 1000000) * 100;
   let weightF = (sixWeight / 1000000) * 100;

   // console.log("Toplam Ağırlık: " + totalWeight);
   // console.log("Ağırlık A'nın yüzdesi: " + weightA);
   // console.log("Ağırlık B'nin yüzdesi: " + weightB);
   // console.log("Ağırlık C'nin yüzdesi: " + weightC);
   // console.log("Ağırlık D'nin yüzdesi: " + weightD);
   // console.log("Ağırlık E'nin yüzdesi: " + weightE);
   // console.log("Ağırlık F'nin yüzdesi: " + weightF);

   // Toplam ağırlığın yüzde değerini hesapla
   let ansTotalWeight = (totalWeight / 10000000) * 100; // 10 milyon
   // console.log("Toplam Ağırlığın % değeri: " + ansTotalWeight);

   weightOneThousndLocal(weightA, weightB, weightC, weightD, weightE, weightF, ansTotalWeight);
}

// let weighttarrsKey = 'weighttarrsKey';
// let  weighttarrs = JSON.parse(localStorage.setItem(weighttarrsKey)) || [];

// let totalWeightThsz = JSON.stringify(localStorage.setItem("totalWeightThsz" )) || [];
function weightOneThousndLocal(oneWeight, twoWeight, threeWeight, fourWeight, fiveWeight, sixWeight, totalWeight) {

   let weighttarrs = {
      "A": oneWeight.toLocaleString('en-US'),
      "B": twoWeight.toLocaleString('en-US'),
      "C": threeWeight.toLocaleString('en-US'),
      "D": fourWeight.toLocaleString('en-US'),
      "E": fiveWeight.toLocaleString('en-US'),
      "F": sixWeight.toLocaleString('en-US')
   };

   localStorage.setItem("weighttarrs", JSON.stringify(weighttarrs));
   // console.log(weighttarrs);

   // let totalWeightThsz = [];
   const totalWeightThsz = [totalWeight.toLocaleString('en-US')];

   totalWeightThsz.push(totalWeight);
   localStorage.setItem("totalWeightThsz", JSON.stringify(totalWeightThsz));
   // console.log(totalWeightThsz);

   setProgressValue(oneWeight.toFixed(2)); // İlerleme değeri burada ayarlanır.
   setProgressValueTwo(twoWeight.toFixed(2));
   setProgressValueThree(threeWeight.toFixed(2));
   setProgressValueFour(fourWeight.toFixed(2));
   setProgressValuefive(fiveWeight.toFixed(2));
   setProgressValueSix(sixWeight.toFixed(2));
   /*
      M ile A çarpılır ve 100'e bölünür. M 200 olsun, A da 18 o zaman 200*18= 5400 bulunur. 5400/100'den sonuç 54 çıkar.
    */
}

// localStorage'dan verileri alırken virgülleri geri dönüştürme
function getDataFromLocalStorage() {
   const weighttarrsString = localStorage.getItem("weighttarrs");
   const totalWeightThszString = localStorage.getItem("totalWeightThsz");
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

function updateProgressBars() {
   const totalWeights = JSON.parse(localStorage.getItem("totalWeight")) || [0, 0, 0, 0, 0, 0];
   setProgressValue(totalWeights[0]); // İlerleme değeri burada ayarlanır.
   setProgressValueTwo(totalWeights[1]);
   setProgressValueThree(totalWeights[2]);
   setProgressValueFour(totalWeights[3]);
   setProgressValuefive(totalWeights[4]);
   setProgressValueSix(totalWeights[5]);
}

let circularProgress = document.querySelector("#circular-progress-id");
let progressValue = document.querySelector("#progress-value-id");

function setProgressValue(value) {
   let angle = value * 3.6;

   progressValue.textContent = `${value}%`;
   circularProgress.style.background = `conic-gradient(#7d2ae8 ${angle}deg, #ededed 0deg)`;
}

let circularProgressTwo = document.querySelector("#circular-progress-id-two");
let progressValueTwo = document.querySelector("#progress-value-id-two");

function setProgressValueTwo(value) {
   let angle = value * 3.6;
   progressValueTwo.textContent = `${value}%`;
   circularProgressTwo.style.background = `conic-gradient(#7d2ae8 ${angle}deg, #ededed 0deg)`;
}

let circularProgressThree = document.querySelector("#circular-progress-id-three")
let progressValueThree = document.querySelector("#progress-value-id-three")

function setProgressValueThree(value) {
   let angle = value * 3.6;
   progressValueThree.textContent = `${value}%`;
   circularProgressThree.style.background = `conic-gradient(#7d2ae8 ${angle}deg, #ededed 0deg)`;
}

let circularProgressFour = document.querySelector("#circular-progress-id-four");
let progressValuefour = document.querySelector("#progress-value-id-four");

function setProgressValueFour(value) {
   let angle = value * 3.6;
   progressValuefour.textContent = `${value}%`;
   circularProgressFour.style.background = `conic-gradient(#7d2ae8 ${angle}deg, #ededed 0deg)`;
}

let circularProgressFive = document.querySelector("#circular-progress-id-five");
let progressValueFive = document.querySelector("#progress-value-id-five");

function setProgressValuefive(value) {
   let angle = value * 3.6;
   progressValueFive.textContent = `${value}%`;
   circularProgressFive.style.background = `conic-gradient(#7d2ae8 ${angle}deg, #ededed 0deg)`;
}

let circularProgressSix = document.querySelector("#circular-progress-id-six");
let progressValueSix = document.querySelector("#progress-value-id-six");

function setProgressValueSix(value) {
   let angle = value * 3.6;
   progressValueSix.textContent = `${value}%`;
   circularProgressSix.style.background = `conic-gradient(#7d2ae8 ${angle}deg, #ededed 0deg)`;
}

document.addEventListener("DOMContentLoaded", () => {
   const { weights, totalWeight } = getDataFromLocalStorage();

   setProgressValue((weights.A).toFixed(2));
   setProgressValueTwo((weights.B).toFixed(2));
   setProgressValueThree((weights.C).toFixed(2));
   setProgressValueFour((weights.D).toFixed(2));
   setProgressValuefive((weights.E).toFixed(2));
   setProgressValueSix((weights.F).toFixed(2));
});

