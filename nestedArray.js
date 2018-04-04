function nestedArray(jumlahRow,jumlahCol){
    var array=[]
    var alphabet ="abcdefghijklmnopqrstuvwxyz".split("")
    
    for(var i=0; i<jumlahRow; i++){
        array.push([])
        for(var j=0; j<jumlahCol; j++){
            var randomAlphabet = parseInt(Math.random()*alphabet.length)
            array[i].push(alphabet[randomAlphabet])
        }
        
    }
    return array
}
console.log(nestedArray(4,3))