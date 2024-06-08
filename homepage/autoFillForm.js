'use strict';

//! Test Amaçlıdır

const formData = [
    {
        "product-name": "Ürün A",
        "product-tour": "Tür 1",
        "entrytime": "09:00",
        "warehouse-number": 1,
        "company-name": "Firma A",
        "logistics-company": "Lojistik A",
        "weight": 100,
        "entry-date": "2024-05-01",
        "stayduration": "3 gün",
        "product-status": "Hasarsız",
        "additional-notes": "Not 1"
    },
    {
        "product-name": "Ürün B",
        "product-tour": "Tür 2",
        "entrytime": "10:00",
        "warehouse-number": 2,
        "company-name": "Firma B",
        "logistics-company": "Lojistik B",
        "weight": 200,
        "entry-date": "2024-05-02",
        "stayduration": "5 gün",
        "product-status": "Kısmen Hasarlı",
        "additional-notes": "Not 2"
    }
];

function fillForm(data) {
    document.getElementById('product-name').value = data['product-name'];
    document.getElementById('product-tour').value = data['product-tour'];
    document.getElementById('entrytime').value = data['entrytime'];
    document.getElementById('warehouse-number').value = data['warehouse-number'];
    document.getElementById('company-name').value = data['company-name'];
    document.getElementById('logistics-company').value = data['logistics-company'];
    document.getElementById('weight').value = data['weight'];
    document.getElementById('entry-date').value = data['entry-date'];
    document.getElementById('stayduration').value = data['stayduration'];
    document.getElementById('product-status').value = data['product-status'];
    document.getElementById('additional-notes').value = data['additional-notes'];
}

function submitForm() {
    const form = document.getElementById('warehouse-Tracking-Form');
    const formData = new FormData(form);

    // Formun submit event'ini tetiklemeden önce varsayılan davranışı engelliyoruz
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        fetch(form.action, {
            method: 'POST',
            body: formData
        }).then(response => {
            if (response.ok) {
                console.log('Form successfully submitted');
            } else {
                console.log('Form submission failed');
            }
        }).catch(error => {
            console.error('Error:', error);
        });

        // Formu temizle (gerekliyse)
        form.reset();
    });

    // Formu programatik olarak gönderiyoruz
    form.requestSubmit();
}

async function fillAndSubmitForms() {
    for (let data of formData) {
        fillForm(data);
        submitForm();
        // Formun gönderilmesi ve işlenmesi için kısa bir bekleme süresi koyuyoruz
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// Formları doldurup göndermek için işlemi başlatıyoruz
fillAndSubmitForms();
