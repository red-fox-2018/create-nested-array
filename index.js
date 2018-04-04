function createNestedArr(jumlahRow, jumlahCol){
  var abjad = 'abcdefghijklmnopqrstuvwxyz'
  // console.log(abjadRandom)
  let board = []
  for(let i=0; i<jumlahRow; i++){
    let baris = []
    for(let j=0; j<jumlahCol; j++){
      var angkaRandom = Math.round(Math.random() * 25 + 1)
      var abjadRandom = abjad[angkaRandom]
      baris.push(abjadRandom)
    }
    board.push(baris)
  }
  console.log(board)
}

createNestedArr(5,3)
createNestedArr(4,2)
