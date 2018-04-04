var CreatedNestedArray = function(x,y){
    let Alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let ArrRow = [];

    for(let i=0;i<x;i++){
        ArrRow.push([]);
    }
    for(let i=0;i<ArrRow.length;i++){
        for(let j=0;j<y;j++){
            var letter = Math.floor(Math.random()*25);
            ArrRow[i].push(Alphabet[letter]);
        }
    }
    return ArrRow;
}
console.log(CreatedNestedArray(5,3));
console.log(CreatedNestedArray(4,2));