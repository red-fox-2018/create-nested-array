function nestedArray (kolom,baris){

  var result = [];
  var huruf = 'abcdefghijklmnopqrstuvwxyz';

  for(var i = 0 ; i < kolom ; i++){
    var valueColumn = [];
    for(var j = 0 ; j < baris ;j++){
      valueColumn.push(huruf[Math.round(Math.random()*26)]);
    }
    result.push(valueColumn);
  }
  return result;
}



console.log(nestedArray(5,3))
console.log(nestedArray(4,2))
