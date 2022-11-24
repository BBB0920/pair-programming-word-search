const transpose = require("../../async/matrix_transposition");
const eqArrays = require("../../lotide/eqArrays")

const wordSearch = (letters, word) => { 

    if (eqArrays(letters, [])) {

        return false;
    
    }

    const horizontalJoin = letters.map(ls => ls.join(''))

    for (l of horizontalJoin) {
       
        if (l.includes(word)) return true
    }

    let newLetters = transpose(letters);

    const verticalJoin = newLetters.map(rs => rs.join(''))

    for (r of verticalJoin) {
       
        if (r.includes(word)) return true
    }

    return false;
}

module.exports = wordSearch