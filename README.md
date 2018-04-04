# create-nested-array
- CREATE function createNestedArr with two parameter row and col
-   INITIALIZE result to empty array 
-   LOOP from 0 to jumlahRow and plus one for every iteration
-       INITIALIZE temp to empty array for collect random alphabet
-       LOOP from 0 to jumlahCol and plus one for every iteration
-           INITIALIZE randomAlphabet to random alphabet a - z
-           PUSH randomAlphabet to temp
-       PUSH temp to result
-   RETURN result