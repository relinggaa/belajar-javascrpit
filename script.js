// membuat variable
// variable let adalah variable yang bisa ubah nilai nya
let nama = "Relingga";
let alamat = "Glagah";
let ttl = 19102004;
//string

// menghasilkan output R
// menggunakan method
// nama[0];
// nama.toUpperCase();
// maka output nya RELINGGA/ hurufnya jadi besar
// menggunakan parameter

// nama.indexOf(ngga);
// maka akan menghasilkan output 4

// memotong string
// nama.slice(0-8);
// maka menghasilkan output lingga

// nama.replace("Relingga","Aditya")
// maka menghasilkan output Aditya

// mengecek jumblah sting
//nama.length

// menambahkan isi variable
// nama= nama+" Aditya"
// menghasilkan output Relingga Aditya

// variable kosong
let posisi;
// variable dengan tipe data number dan operasi matematika
// + * /
let score = 0;
let a = 1;
let b = 2;
// menggabungkan array
let hasil1 = nama + alamat + ttl;
let hasil2 = a + b;
// variable
// variable const adalah variable yang tidak dapat di ubah nilai nya atau konsisten
const merdeka = "17Agustus1945";
// sama seperti let cuma jarang di pake
var saya = "manusia";

// template litteral
// `Halo Semua Nama Saya ${nama} dan alamat saya ${alamat}dan tanggal lahir saya ${ttl}`
// Menghasilkan output
// 'Halo Semua Nama Saya Relingga dan alamat saya Glagahdan tanggal lahir saya 19102004'
// templet literal menggabungkan string dengan variable
// const orang = "crush";
// console.log(`Aku sayang kamu ${orang}`);

// pengkondisian
if (nama == "Relingga") {
  sip = "mantap";
} else {
  sip = "tidak";
}
// operator pembanding
//1=='1';
//menghasilkan output true
//1==='1';
//menghasilkan output false

// console log
// console.log("Hello World");
// alert("Selamat Berpuasa");

// pengkondisian lagi
// let angka = 0.3;
// console.log(angka);

// if (angka >= 0.5) {
//   console.log("Yaa,ini di hitung mulai 0.5");
// } else {
//   console.log("tidak,ini di hitung mulai 0.5");
// }

// kondisi bercabang/bersarang

// let kondisi = prompt("Masukan Kondisi");

// if (kondisi == "lapar") {
//   alert("Makan lah");
// } else if (kondisi == "ngantuk") {
//   alert("tidurlah");
// } else if (kondisi == "haus") {
//   alert("minumlah");
// } else if (kondisi == "capek") {
//   alert("istirahat lah");
// } else {
//   alert("Tidak Ada Kondisi");
// }

// const password = prompt("Masukan Password");
// memerikasa password atau username
// if (password == "akuganteng") {
//   alert("Login Sukses");
// } else {
//   alert("Login Gagal");
// }

//logic registrasi account operator and
// const username = prompt("Masukan Username");
// const password = prompt("Masukan Password");
// const kpassword = prompt("Masukan Password Sekali Lagi");

// //cek apakah panjang password dan username lebih dari 5 karakter
// if (username && password.length >= 5) {
//   // cek apakah konfirmasi pasword sama
//   if (kpassword == password) {
//     alert("berhasil membuat akun");
//   } else {
//     alert("password tidak sama");
//   }
// } else {
//   alert("Password dan username minimal 5 karaker");
// }

// logic login account operator or

// const role = prompt("Masukan Role");

// if (role == "admin" || role == "manager") {
//   alert("Boleh Mengakses File");
// } else {
//   alert("Anda tidak berhak mengakses laman ini");
// }

// logic login account operator not

// const role = prompt("Masukan Role");

// if (role !== "admin") {
//   alert("Anda tidak berhak mengakses laman ini");
// } else {
//   alert("Selamat Datang Admin");
// }

// pengkondisian dengan switch
// const kondisi = prompt("Masukan Kondisi");

// switch (kondisi) {
//   case "lapar":
//     alert("Makan lah");
//     break;
//   case "ngantuk":
//     alert("Tidurlah");
//     break;
//   case "haus":
//     alert("Minumlah");
//     break;
//   case "capek":
//     alert("istirahatlah");
//     break;
//   default:
//     alert("Tidak ada kondisi");
// }

// array

// membuat array kosong
// let arraykosong = [];
// // membuat array
// let musik = ["Martin Garrix", "Calvin Harris", "Marsmellow", "Alan Walker"];
// console.log(musik[0]);

// method array
//push =Menambahkan item pada akhir array
//pop=menghapus item dari paling akhir array
//shift=menghapus item dari paling awal array
//unshift= menambahkan item pada awal array
// concat=menggabungkan array
// includes=mencari suatu  nilai true/false di dalam array
// indexOf=sama kaya string/mencari suatu index array
//join=membuat suatu string dari sebuah array
//reverse=membalikan urutan nilai dari array
//slice =menyalin sebagai nilai dari array
//splice=menghapus atau mrngubah element
//sort=mengurutkan nilai pada array

// contoh splice
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
// months.splice(5,1,"June");
// console.log(months);

// array Multi dimensi/nested array
// const makananMinuman = [
//   ["Lalapan", "Ayam Goreng", "Lele Bakar"],
//   ["Es Jeruk", "Es Teh", "Es MiLo"],
// ];
// console.log(makananMinuman[0][0]);

//membuat object
const namasaya = {
  nama: "Relingga Aditya",
  umur: "18 tahun",
  prodi: "Teknik Informatika",
  hobi: "ngoding",
};

// object di dalamnya ada object lagi
const rxga = {
  menjual: "kopi dan snake",
  tipe: "coffeshop",
  harga: {
    kopi: "10.000",
    snake: "7.000",
  },
  location: {
    banyuwangi: "glagah city",
    jakarta: "kemayoran",
    malang: "lowokwaru",
    bali: "canggu",
  },
};
//memanggil oject
// console.log(rxga["harga"]);
// // atau
// console.log(rxga.menjual);
// console.log(rxga.location.banyuwangi);

// merubah obejct
// rxga.menjual = "Es Teh";

// object di dalam array
const coffeSaya = [
  {
    product: "Americano",
    price: "20.000",
    Ready: true,
  },
  {
    product: "Macha",
    price: "10.000",
    Ready: true,
  },
  {
    product: "Cappucino",
    price: "40.000",
    Ready: true,
  },
];
// cara memanggil nya
// coffeSaya[1].price

// looping
// for
let loop = "Relingga";
//  ditambah 1
// for (let i = 1; i <= 100; i++) {
//   console.log("di dalam loop");
//   console.log(loop);
//   console.log(i);
// }

// for (let i = 1; i <= 10; i += 2) {
//   console.log("di dalam loop");
//   console.log(loop);
//   console.log(i);
// }
//  melooping array for
// const animal = ["Gajah", "Burung", "Kucing"];

// for (let i = 0; i < animal.length; i++) {
//   console.log(animal[i]);
// }

//nested loop for

// const jawaban = "ABCDE";

// for (i = 0; i < 10; i++) {
//   console.log(`${i}. Soal Nomor`);
//   for (j = 0; j < jawaban.length; j++) {
//     console.log(jawaban[j]);
//   }
// }
// Melooping nested array/array multi dimensi
// const stranger = [
//   ["Eleven", "Max", "Will"],
//   ["Nancy", "Mike", "Steve"],
// ];

// console.log(stranger[0]);

// for (let i = 0; i < stranger.length; i++) {
//   const row = stranger[i];
//   console.log(`Actor #${i}`);
//   for (a = 0; a < row.length; a++) {
//     console.log(`${row[a]}`);
//   }
// }
//  me looping nested array/ array multi dimensi
const myboo = [
  ["Rose", "Jennie", "Lisa"],
  ["As your last", "Whistle", "Boombayah"],
  ["Rose", "Jennie", "Lisa"],
  ["As your last", "Whistle", "Boombayah"],
];

// for (let i = 0; i < myboo.length; i++) {
//   console.log(`Pacar ku ke # ${i + 1}`);
//   const row = myboo[i];
//   for (j = 0; j < row.length; j++) {
//     console.log(`${row[j]}`);
//   }
// }
//looping for  object
// for (let i = 0; i < coffeSaya.length; i++) {
//   console.log(coffeSaya[i].product);
//   console.log(coffeSaya[i].price);
//   console.log(coffeSaya[i].Ready);
// }
// atau
// for (let i = 0; i < myboo.length; i++) {
//   for (let j = 0; j < myboo[i].length; j++) {
//     console.log(myboo[i][j]);
//   }
// }

// const tkj = [
//   ["MIKROTIK", "TOTOLINK", "LINUX"],
//   ["KABEL LAN", "CRIMPING", "TESTER"],
//   ["KABEL LAN", "CRIMPING", "TESTER"],
//   ["MIKROTIK", "TOTOLINK", "LINUX"],
//   ["KABEL LAN", "CRIMPING", "TESTER"],
//   ["KABEL LAN", "CRIMPING", "TESTER"],
// ];

// for (let i = 0; i < tkj.length; i++) {
//   console.log(`tools ${i}`);
//   const row = tkj[i];
//   for (let j = 0; j < row.length; j++) {
//     console.log(`${row[j]}`);
//   }
// }

// looping while
// let i = 0;

// while (i < 10) {
//   console.log(i + 1);
//   console.log("Hello World");
//   i++;
// }

// const password = "pass123";

// let user = prompt("Masukan Password");
// while (user !== password) {
//   alert("Password salah");
//   user = prompt("Masukan Password Sekali Lagi");
// }

// alert("password benar");

// break memberhentikan looping

// let nembak = prompt("Mau Ngga Jadi Pacar Aku");

// while (true) {
//   nembak = prompt("Masukan Sekali lagi");
//   if (nembak.toLowerCase() == "mau") {
//     break;
//   }
// }
// alert("i love u");

// for (i = 0; i < 100; i++) {
//   console.log(`${i + 1}.Hello World`);
//   if (i === 50) {
//     break;
//   }
// }
// let mtk = Math.random() * 100;

// const jawaban = Math.floor(mtk);
// console.log(jawaban);

// // parseint mengconvert string ke integer atau number
// const angka = parseInt(prompt("Tebak Togel"));

// if (angka == jawaban) {
//   alert("Tebakan Benar");
// } else {
//   alert("Tebakan Salah");
// }

const pacar = [
  ["lisa", "Rose", "Jennie"],
  ["Nayeon", "Momo", "Tzuyu"],
];

// looping array simple

// for (let row of pacar) {
//   for (let ayang of row) {
//     console.log(ayang);
//   }
// }

// const hargaCoffe = {
//   cappucino: 20000,
//   Americano: 20000,
//   Machiato: 20000,
//   Taro: 20000,
//   CocaCola: 20000,
// };
// //  looping object menggunakan in
// for (let price in hargaCoffe) {
//   console.log(`${price} Harganya ${hargaCoffe[price]} `);
//   console.log(price, hargaCoffe);
//  Object.values(ARRAY)Merubah object menjadi array
// }
// const utbk = {
//   soal: "15 soal",
//   time: "durasi 20 menit",
//   date: "08 mei 2023",
// };

// for (let ujian in utbk) {
//   console.log(`calon maba harus mengerjakan ${utbk[ujian]}`);
//   console.log(`${ujian}`);
// }
/// functiom

// function lempardadu() {
//   console.log(Math.floor(Math.random() * 6) + 1);
// }

// function nama() {
//   alert("Relingga Aditya");
// }

// memanggil function
// lempardadu();
// nama();

// argumen dan parameter

function ucapan(salam = "datang") {
  return `Selamat ${salam}`;
}

// function salam(nama = "bro") {
//   alert(`Selamat Datang ${nama}`);
// }
// salam("Ucok");
// function multiple argumen dan paramter

// function penjumblahan(angka1, angka2) {
//   const hasil = angka1 + angka2;
//   console.log(hasil);
// }
// penjumblahan(10, 2);

// function penjumblahan(angka1 = 0, angka2 = 0) {
//   const hasil = angka1 + angka2;
//   return hasil;
// }
// return mengembalikajn nilai
// function perkalian(angka1, angka2) {
//   if (typeof angka1 != `number` && typeof angka2 != `number`) {
//     return "Yang kamu input kan bukan angka";
//   }
//   return angka1 * angka2;
// }

// block scope variable
// let programming = "javascript";
// function coding() {
//   let programming = "php";
//   return programming;
// }

// function pemrogaman() {
//   let programming2 = "php";
//   return programming2;
// }

// function logic() {
//   programming2 = "nodejs";
//   return programming2;
// }

// var variable yang bisa di akses dimanapun
// var tinggi = 7;
// if (tinggi > 5) {
//   var lebar = 10;
// }
// if (lebar > 5) {
//   lebar = 20;
// }
// console.log(lebar);
// console.log(tinggi);

// lexical scope function di dalam function
function lowonganpekerjaan() {
  const jabatan = "programmer";
  function orangdalam() {
    console.log(`Orang Dalam Sangat Sakti Karena Bisa Memasukan ${jabatan}`);
  }
  orangdalam();
}

// function expressions

function penambahan(nilai1, nilai2) {
  return nilai1 + nilai2;
}

let hasil = penambahan(10, 90);

let perkalian = function (nilai1, nilai2) {
  return nilai1 * nilai2;
};

perkalian(10, 10);

function looping(kata) {
  for (i = 0; i < 100; i++) {
    console.log(`${i} ${kata}`);
  }
}

// function sebagai argumen function lain

function duakali(peng2) {
  peng2();
  peng2();
}

function kata() {
  console.log("Relinggaa");
}

// mereturn function
function returnfunction() {
  const angkaacak = Math.random();
  if (angkaacak > 0.1) {
    return function () {
      console.log(`Angka lebih Dari 0.1 Yaitu ${angkaacak}`);
    };
  } else {
    return function () {
      console.log(` Angka Kurang Dari 0.1 Yaitu ${angkaacak}`);
    };
  }
}

let hasilreturnfunction = returnfunction();

function transportasi(via) {
  if (via == "darat") {
    return function () {
      console.log("Ojek,Angkot,Bus,Travel,Kereta api");
    };
  } else if (via == "udara") {
    return function () {
      console.log("Pesawat Terbang, Helicopter");
    };
  }
}

let hasiltransport = transportasi("darat");

// method suatu function yang di definisikan sebagai objek

const matematika = {
  perkalian: function (angka1, angka2) {
    return angka1 * angka2;
  },
  penjumlahan: function (angka1, angka2) {
    return angka1 + angka2;
  },
};

//this di gunakan untuk memanggil properti yang ada di dalam objek
const thatsme = {
  nama: "Relingga Aditya",
  Hobi: "Turu",
  kenalan: function () {
    return `Halo Nama Gw ${this.nama} hobi gw ${this.Hobi}`;
  },
};

// penanganan eror dan tetap menjalankan kode lainya ketika eror
// try {
//   thatsme.makanan();
// } catch (eror) {
//   console.log("Terjadi eror");
//   console.log(eror);
// }

// console.log("kode yang di eksekusi setelah eror");

const series = [
  {
    title: "Stranger Things",
    rate: 90,
  },
  {
    title: "Money Heist",
    rate: 92,
  },
  {
    title: "Squid Game",
    rate: 89,
  },
];

const sosmed = [
  ["instagram", "facebook", "twitter"],
  ["youtube", "tiktok", "vidio"],
  ["whatsaap", "line", "mi-chat"],
];
// callback function
// mengulang setiap elemen dalam array dan menjalankan fungsi callback untuk setiap elemen
// sosmed.forEach(function (sosialmedia) {
//   sosialmedia.forEach(function (medsos) {
//     console.log(medsos);
//   });
// });

// series.forEach(function (serie) {
//   console.log(`${serie.title} ${serie.rate} /100`);
// });

// // map()``` digunakan untuk membuat array baru dari array yang ada

// const kopi = ["Americano", "Cappucino", "Espresso", "coffe late"];

// const ngopi = kopi.map(function (coffe) {
//   return coffe.toUpperCase();
// });

// const netflix = series.map(function (title) {
//   return title.title.toUpperCase();
// });

// arrow function

const perpangkatan = (angka1) => {
  return angka1 * angka1;
};

const hasilperpangkatan = perpangkatan(5);

// tanpa menggunakan return apabila hanya 1 perintah
// disarankan menggunakan petik apabila sintaks panjang
const angkarandom = () => Math.floor(Math.random() * 5);
// kalo sintaks pendek gass aja
const pertambahan = (angka1, angka2) => angka1 + angka2;

// console.log("Halo");
// // memberi jeda waktu berapa lama kode akan di eksekusi
// setTimeout(() => {
//   console.log("Aku dimana?");
// }, 3000);

// mengeksekusi kode sesuai jeda waktu yang di tentukan
// const interval = setInterval(() => {
//   console.log("WAKE UPPPP!!! BELAJAR WOYY,PIKIRIN MASA DEPAN");
// }, 2000);
// memperhentikan interval
// clearInterval(namavariable);

//  filter membuat  array yang sesuai dengan kriteria tertentu.

const nomor = [1, 2, 3, 4, 5, 6, 7];
const nomordibawah5 = nomor.filter((number) => {
  return number < 6;
});

const seriesbagusbanget = series.filter((series) => series.rate >= 90);
const serialradabagus = series.filter((series) => series.rate < 90);
// cocok di combo dengan map
const judulseriesbagusbanget = seriesbagusbanget.map(
  (bagusbanget) => bagusbanget.title
);
// every
//Method ini hanya mengembalikan nilai true jika semua elemen array yang diuji mengembalikan nilai true.
//Jika salah satu elemen mengembalikan nilai false ketika diuji menggunakan fungsi yang disediakan, maka method ini mengembalikan false.
const katakata = ["kamu", "saya", "kita"];
const terkata = katakata.every((kata) => {
  return kata.length === 4;
});
// some
// Method ini akan mengembalikan nilai true jika setidaknya satu elemen array lulus atau mengembalikan nilai truthy ketika diuji dengan menggunakan fungsi callback.
// Atau mengembalikan nilai false jika semua elemen array tidak lulus atau mengembalikan nilai falsy ketika diuji dengan fungsi callback.
const quotes = ["kamu", "saya", "kita", "aku"];
const terquotes = quotes.some((perquotes) => {
  return perquotes.length === 4;
});

const cekseries = series.some((serial) => {
  return serial.rate > 90;
});
//reduce
// menjumlahkan semua elemen arraay
const nilaiujian = [10, 10, 10, 10];

const totalnilaiujian = nilaiujian.reduce((total, nilai) => {
  return total + nilai;
});
// mengatur default value
const selamat = (hebat = "kamu") => console.log(`selamat ${hebat} kamu menang`);

// spread operator

// menyebarkan atau mengeluarkan elemen yang ada di dalam array atau properti objek ke tempat dimana nilai tersebut diharapkan
const nomerku = [1, 2, 3, 4, 5];

Math.max(nomerku); // NaN
Math.max(...nomerku); //5
// bisa juga menggabungkan array seperti concat
const mhs = ["Relingga", "richard", "steve"];
const address = ["america", "england", "london"];

const gabungan = [...mhs, ...address];
// kalo concat gabisa kaya gini
const gabunganstring = [...mhs, "orang", ...address];

// bisa juga mencopy array
const newgabungan = [...gabungan];

// menggabungkan properti object
const makanan = {
  nama: "lalapan",
  rasa: "enak",
};
const minuman = {
  nama: "esjeruk",
  rasa: "manis",
};

const gabungmakanan = {
  ...makanan,
  minuman: "esteh",
  cucimulut: "esjeruk",
};
const bergabung = { ...minuman, ...makanan };
//rest parameter merupakan sintaks yang memungkinkan sebuah fungsi menerima argumen dalam jumlah yang tak terbatas atau dinamis
const mynumber = (...number) => {
  return number;
};

function ditambahkan(...angka) {
  return angka.reduce((angka1, angka2) => angka1 + angka2);
}
const dekripsi = (...dekripsi) => {
  return dekripsi;
};
console.log(dekripsi("Relingga", "Aditya", "Ganteng"));
// destruction Bongkar Element Array Ke Masing-Masing Variabel Dengan Mudah/mengunboxing array
const jurusan = [
  "rekayasa perangkat lunak",
  "teknik komputer jaringan",
  "Cyber Security",
];

const [relingga, ucok, afro] = jurusan;

// untuk objek
const akun = {
  username: "Relingga",
  id: 2020,
  password: "relinggaa",
};

const { username, password } = akun;

// di dalam function objek

const hp = {
  brand: "iphone",
  ram: "16GB",
};

const branddanram = ({ brand, ram }) => {
  return `${brand} ${ram}`;
};

console.log(branddanram(hp)); // Output: iphone 2GB
