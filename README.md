# create-nested-array

FUNCTION createNastedArr parameter JUMLAHROW dan JUMLAHCOL
  SET RESULT ke []

  LOOP index i = 0, index i kurang dari JUMLAHROW, increment satu
    SET ROW ke []
    LOOP index j = 0, index j kurang dari JUMLHCOL, increment satu
      SET RANDOM sama dengan ubah STRING dari fromCharCode 97 ditambah pembulatan ke bawah dari random dikali 26
      PUSH RANDOM ke ROW
    END LOOP
    PUSH ROW ke RESULT
  END LOOP
  RETURN RESULT
END FUNCTION
