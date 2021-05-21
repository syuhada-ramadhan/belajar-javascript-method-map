// array hewan
const hewan = ["Kambing", "Kelinci", "Kerbau", "Kucing", "Sapi"];

// map dan join setiap elemen array hewan
const namaHewan = hewan.map((elemen) => `<tr><td>${elemen}</td></tr>`).join("");

// ambil class tbody dari index.html
const tbody = document.querySelector(".tbody");

// masukan variable namaHewan ke variable tbody
tbody.innerHTML = namaHewan;

// cetak array hewan
console.log(hewan);
