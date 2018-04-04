/*
PSEUDOCODE

1. buat array kosong untuk menampung array array hasil
2. buat variabel untuk menampung alphabet dari a - z
3. looping dari i = 0 sampai i < jumlahRow
  3.a. buat variabel berisi array kosong
  3.b. looping dari j = 0 sampai j < jumlahCol
    3.b.i. buat variabel berisi angka random dari 0 sampai panjang variabel alphabet
    3.b.ii. push ke array isi dari variebel alphabet dengan index variabel random
    3.b.iii. jika panjang array sama dengan panjang jumlahCol
      3.b.iii.1. push array ke dalam array arrHasil
      3.b.iii.2. kosongkan isi array kembali
4. return arrHasil
*/

function createNestedArr(jumlahRow, jumlahCol) {
  var arrHasil = [];
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < jumlahRow; i++) {
    var arr = [];
    for (var j = 0; j < jumlahCol; j++) {
      var random = Math.floor(Math.random() * alphabet.length);
      arr.push(alphabet[random]);
      if (arr.length == jumlahCol) {
        arrHasil.push(arr);
        arr = [];
      }
    }
  }
  return arrHasil;
}

console.log(createNestedArr(5, 3));

console.log(createNestedArr(4, 2));
