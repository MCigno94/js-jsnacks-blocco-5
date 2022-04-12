/* 
Scrivi una funzione che fonda due array 
(aventi lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

/* const firstArray = [1, 2, 3];
const secondArray = ['a', 'b', 'c'];

/**
 * 
 * @param {Array} firstArray 
 * @param {Array} secondArray 

function arrayFusion(firstArray, secondArray) {
    firstArray.forEach((element) => {
        element
    })
} 
*/

const arrayA = [1, 2, 3];
const arrayB = ['a', 'b', 'c'];
let arrayC = [];

arrayA.forEach(myFunction)

function myFunction(item, i) {
    arrayC.push(item);
    arrayC.push(arrayB[i]);
    //console.log(item);
    //console.log(arrayA[i]);
    //console.log(arrayB[i]);
}

console.log(arrayC);