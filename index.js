/*
* PSEUDOCODE
* CREATE function createNestedArr with parameter = 'jumlahROw', 'jumlahCol'
*> CREATE variable abjad with value = 'a-z'
*> CREATE variable result
*> DO loop until jumlahRow
*>> CREATE variable array temp for temporary save abjad
*>> DO loop until jumlahCol
*>>> CREATE abjadRandom for randomize index of abjad
*>>> PUSH abjad index of abjadRandom to variable temp
*>> PUSH variable temp to variable result
*> PRINT result
*/


function createNestedArr(jumlahRow, jumlahCol) {

    let abjad = 'abcdefghijklmnopqrstuvwxyz'
    let result = []

    for (var i=0; i<jumlahRow; i++) {

        let temp = [] 

        for (var j=0; j<jumlahCol; j++) {

            let abjadRandom = Math.floor(Math.random()*Math.floor(abjad.length))
            temp.push(abjad[abjadRandom])
        }

        result.push(temp)
    }

    console.log(result);    
}

createNestedArr(5,3)
createNestedArr(4,2)