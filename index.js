/*jshint esversion:6*/

function createNastedArr(jumlahRow, jumlahCol) {
  let result = [];

  for (let i = 0; i < jumlahRow; i++) {
    let row = [];
    for (let j = 0; j < jumlahCol; j++) {
      let random = String.fromCharCode(97 + Math.floor(Math.random() * 26));
      row.push(random);
    }
    result.push(row);
  }
  return result;
}

console.log(createNastedArr(5, 3));
console.log('', '');
console.log(createNastedArr(4, 2));
