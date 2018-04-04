function createdNestedArr(jumlahRow,jumlahCol){
    var result = []
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    for(let row=0;row<jumlahRow;row++){
        var nestedArr = []
        for(let col=0;col<jumlahCol;col++){
            var random = Math.round(Math.random() * (25))
            nestedArr.push(abjad[random])
        }
        result.push(nestedArr)
    }
    return result
}
console.log(createdNestedArr(5,3))
console.log(createdNestedArr(4,2))