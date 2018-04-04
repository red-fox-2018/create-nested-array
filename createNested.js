function createNestedArray(jumlahRow,JumlahCol) {
	// body...
	var nested = []
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'
	for(var i=0;i<jumlahRow;i++){
		nested.push([])
	}
	var row = 0
	for(var i=0;i<nested.length;i++){
		for(var j=0;j<jumlahRow;j++){
			var huruf = Math.floor(Math.random()*alphabet.length)
			nested[i].push(alphabet[huruf])
		}
	}
	return nested
}
console.log(createNestedArray(6,5));
