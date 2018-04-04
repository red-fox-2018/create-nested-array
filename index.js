function createNestedArr(jumlahRow, jumlahCol) {
    let result = [];

    for (let i = 0; i < jumlahRow; i++) {
        let temp = [];
        for (let j = 0; j < jumlahCol; j++) {
            let randomAlphabet = String.fromCharCode(96 + Math.ceil(Math.random() * 26) );
            temp.push(randomAlphabet);
        }

        result.push(temp);
    }

    return result;
}

console.log(createNestedArr(5, 3));
console.log(createNestedArr(4, 2));