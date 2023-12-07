function hitung() {
    var alas = document.getElementById("alas").value;
    var tinggi = document.getElementById("tinggi").value;
   
    var luas = (alas * tinggi) / 2;

    alert("Luas segitiga: " + luas + "\nKeliling segitiga: " + keliling);
}

function calculate() {
    var sisi1 = document.getElementById("sisi1").value;
    var sisi2 = document.getElementById("sisi2").value;
    var sisi3 = document.getElementById("sisi3").value;

    var keliling = parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3);

    alert("Luas segitiga: " + luas + "\nKeliling segitiga: " + keliling);

}