function createNestedArr(jumlahRow, jumlahCol){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let arr = [];
  for(let i=0; i<jumlahRow; i++){
    arr.push([])
    for(let j=0; j<jumlahCol; j++){
      let value = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
      arr[i].push(value)
    }
  }
  console.log(arr);
}
createNestedArr(5,3)
createNestedArr(4,2)

// console.log(Math.random().toString(36).replace(/[^a-z]+/g,''));
