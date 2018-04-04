function createNestedArray(jumlahRow, jumlahCol) {

  const kamus = 'qwertyuiopasdfghjklzxcvbnm'

  const result = []

  for (var i = 0; i < jumlahRow; i++) {

    let row = []

    for (var j = 0; j < jumlahCol; j++) {

      let random = Math.ceil(Math.random() * kamus.length-1)

      row.push(kamus[random])

    }

    result.push(row)

  }

  return result

}

console.log(createNestedArray(5,3));
console.log(createNestedArray(4,2));
