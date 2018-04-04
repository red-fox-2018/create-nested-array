function nestedArray(row, col) {
  let array = [];
  for (var i = 0; i < row; i++) {
    array[i] = [];
    for (var j = 0; j < col; j++) {
      array[i][j] = String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1) + 97))
    }
  }
  return array;
}

console.log(nestedArray(5, 3));
console.log(nestedArray(4, 2));
