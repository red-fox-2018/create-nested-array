function createNestedArr(jumlahRow, jumlahCol){
    let abjad = 'abcdefghijklmnopqrstuvwxyz'
    let result = []

    for(let i=0;i<jumlahRow;i++){
        var penampungArray = []
        for(let k=0;k<jumlahCol;k++){
            penampungArray.push(abjad[Math.ceil(Math.random()*25)])
        }
        result.push(penampungArray)
    }
    console.log(result)
}

createNestedArr(5,3)
//output
// [ ['p','s','w'], 
//   ['r','a','i'],
//   ['q','x','c'],
//   ['r','q','w'],
//   ['m','o','y'], ]

createNestedArr(4,2)
//output
// [ ['b','r'], 
//   ['h','u'],
//   ['c','v'],
//   ['i','i'], ]