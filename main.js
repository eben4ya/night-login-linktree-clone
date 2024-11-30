// cout << "hello world" << endl;

// console.log("Hello World");

// const nama = "Benaya Imanuela";

// nama = "Deren Tanaphan";

// console.log(nama);

// const phi = 3.14;

// const r1 = 10;

// const luasLingkaran = phi * r1 ** 2;

// console.log(luasLingkaran);

// let pesanan = 15;

// const statusPengiriman = "terkirim";

// if (statusPengiriman == "terkirim") {
//   pesanan = pesanan + 2;
// }

// console.log(pesanan);

// for (let i = 0; i <= 3; i++) {
//   console.log(i);
// }

// const nama = "Benaya";
// const nama2 = "Aqiil";
// const jurusan = "Teknologi Informasi";
// const bool = false;

// const perkenalan = "Hai, aku " + nama + ", prodi " + jurusan;
// console.log(perkenalan);

// const perkenalan2 = `Hai, aku ${bool ? nama2 : nama} , prodi ${jurusan}`;

// console.log(perkenalan2);

// const perkenalan = (nama, jurusan) => {
//   return `Hai, aku ${nama} , prodi ${jurusan}`;
// };

// console.log(perkenalan("Benaya", "TIF22"));
// console.log(perkenalan("Aufa", "TIF21"));
// console.log(perkenalan("Aria", "TIF21"));
// console.log(perkenalan("Farhan", "TIF21"));

// let angka = [1, 3, 5, 63, 7, 5, 89, 9];

// mapping
// const hasilAngka = angka.map((angkas) => angkas * 2);

// console.log(hasilAngka);

// filter
// const angkaGanjil = angka.filter((angkas) => angkas % 2 == 1);

// console.log(angkaGanjil);

// const dataDiri = {
//   nama: "Benaya Imanuela",
//   prodi: "Teknologi Pertanian",
//   umur: "66",
// };

// console.log(dataDiri);
// console.log(dataDiri.prodi);

const tugas = "Tugas1_494710_Benaya-Imanuela_Webdev.pdf";

const nama = tugas.split("_");

console.log(nama);

console.log(nama[2]);

const namaTugas = nama[3].split(".");

console.log(namaTugas);

console.log(namaTugas[0]);
