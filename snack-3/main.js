/* Scrivi una funzione che accetti una stringa come argomento
e la ritorni girata (es. Ciao -> oaiC)
 */

function reverseWord(word) {
    return word.split("").reverse().join("");
}

console.log(reverseWord('ciao'));