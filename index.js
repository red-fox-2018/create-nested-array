function createNestedArr(jumlahRow, jumlahCol) {
  let huruf = 'abcdefghijklmnopqrstuvwxyz'
  let resultArr = []
  for (var i = 0; i < jumlahRow; i++) {
    resultArr.push([])
    for (var j = 0; j < jumlahCol; j++) {
      resultArr[i].push(huruf[Math.floor(Math.random()*26)])
    }
  }
  return resultArr
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
