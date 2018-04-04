function nestedArr(row, col) {
  var alphabets = 'abcdefghijklmnopqrstuvwxyz'
  var arrLuar = [];
  for(var i = 0; i < row; i++) {
    var arrDalam = [];
    for(var j = 0; j < col; j++) {
      var random = Math.floor(Math.random() * (26 - 1) + 1)
      arrDalam.push(alphabets[random])
    }
    arrLuar.push(arrDalam);
  }
  return arrLuar
}

console.log(nestedArr(5, 3));
