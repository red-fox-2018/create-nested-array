function createNestedArr(jumlahRow, jumlahCol) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let output = [];
  for (let row = 0; row < jumlahRow; row++) {
    output.push([])
    for (let col = 0; col < jumlahCol; col++) {
      randomAlphabet = Math.floor(Math.random() * 26)
      output[row].push(alphabet[randomAlphabet]);
    }
  }
  return output
}

console.log(createNestedArr(5,3));
// output: 
  [['p', 's', 'w'],
   ['r', 'a', 'i'],
   ['q', 'x', 'c'],
   ['r', 'q', 'w'],
   ['m', 'o', 'y']]

console.log(createNestedArr(4,2));
// output
[['b', 'r'],
 ['h', 'u'],
 ['c', 'v'],
 ['i', 'i']]
