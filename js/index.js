function hitungLuas(alas, tinggi) {
    return 0.5 * alas * tinggi;
}

// Contoh penggunaan:
var alas = 5;
var tinggi = 10;
var luas = hitungLuas(alas, tinggi);
document.getElementById('hasil').innerHTML = "Luas segitiga: " + luas;
