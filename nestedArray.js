function createNestedArr(jumlahRow,jumlahCol) {
	var output=[];
	var alfabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

	for(var j=0;j<jumlahRow;j++) {
		output.push([])			   
	}

	for(var i=0;i<output.length;i++){
		for(var k=0;k<jumlahCol;k++){
			output[i].push(alfabet[Math.floor((Math.random()*alfabet.length))])
		}
	}
return output;
}


console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2))