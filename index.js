
function nestedArray(row,col){
let result=[]
let alphabet ='abcdefghijklmnopqrstuvwxyz'
  for (var i = 0; i < row; i++) {
    result.push([])
    for (var j = 0; j < col; j++) {
      let random= Math.round(Math.random()*25)
        result[i].push(alphabet[random])
    }
  }
return result
}

console.log(nestedArray(5,3));
console.log(nestedArray(4,2));
