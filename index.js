function nestedArray(row, col) {
  let array = [];
  for (var i = 0; i < row; i++) {
    array[i] = [];
    for (var j = 0; j < col; j++) {
      let randomLetterIndex = Math.floor(Math.random() * (122 - 97 + 1) + 97)
      array[i][j] = String.fromCharCode(randomLetterIndex)
    }
  }
  return array;
}

console.log(nestedArray(5, 3));
console.log(nestedArray(4, 2));
