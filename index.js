/*

@ Iswanul Umam - Red Fox
*/

function randomAlphabet() {
  let randNum = Math.random() * (123 - 97) + 97;
  return String.fromCharCode(randNum);
}

function createNestedArray(totalRow, totalColumn) {
  let board = [];
  for (let i = 0; i < totalRow; i++) {
    board[i] = [];
    for (let j = 0; j < totalColumn; j++) {
      board[i].push(randomAlphabet());
    }
  }
  return board;
}

console.log(createNestedArray(5, 3));
console.log(createNestedArray(4, 2));