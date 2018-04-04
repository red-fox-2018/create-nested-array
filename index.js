var alphabeth = 'abcdefghijklmnopqrstuvwxyz'
function createsNestedArr(jumlahROw,JumlahCol){
  var result = []
  for (let i = 0; i < jumlahROw; i++) {
    var colValue = []
    for (let j = 0; j < JumlahCol; j++) {
      let randomAlphabet = alphabeth[Math.floor(Math.random()*26)]
      colValue.push(randomAlphabet)
    }
    result.push(colValue)
  }
  return result
}

console.log(createsNestedArr(5,3))
console.log(createsNestedArr(4,2))
