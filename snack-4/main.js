/* 
Scrivi una funzione che fonda due array 
(aventi lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

const arrayA = [1, 2, 3];
const arrayB = ['a', 'b', 'c'];


function myFunction(arrayA, arrayB) {
    let arrayC = [];
    arrayA.forEach((element, i) => {
        arrayC.push(element);
        arrayC.push(arrayB[i]);
    })
    return arrayC;
}

console.log(myFunction(arrayA, arrayB));