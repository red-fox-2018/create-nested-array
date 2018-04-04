
function createNestedArr(row, col){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let arr = []

  for(let i = 0; i < row; i++){
    arr.push([])
    for(let j = 0; j < col; j++){
      let randomAlphabet = alphabet[Math.floor(Math.random()*26)]
      arr[i].push(randomAlphabet)
    }
  }
  return arr
}


console.log(createNestedArr(5, 3));
