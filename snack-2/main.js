/* 
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

const zucchine = [{
        varieta: 'trombetta',
        peso: 21,
        lunghezza: 19
    },
    {
        varieta: 'romanesca',
        peso: 12,
        lunghezza: 17
    },
    {
        varieta: 'napoletana',
        peso: 20,
        lunghezza: 25
    },
    {
        varieta: 'tonda',
        peso: 16,
        lunghezza: 14
    },
    {
        varieta: 'nera',
        peso: 12,
        lunghezza: 15
    },
    {
        varieta: 'faenza',
        peso: 17,
        lunghezza: 19
    },
    {
        varieta: 'lunga fiorentina',
        peso: 18,
        lunghezza: 28
    },
    {
        varieta: 'siciliana',
        peso: 7,
        lunghezza: 9
    },
    {
        varieta: 'bianca',
        peso: 10,
        lunghezza: 16
    },
    {
        varieta: 'pugliese',
        peso: 11,
        lunghezza: 13
    }
]

//Dividi in due array separati le zucchine che misurano meno o più di 15cm

const maggioreDi15 = zucchine.filter((zucchina) => zucchina.lunghezza > 15);
console.log(maggioreDi15);

const minoreDi15 = zucchine.filter((zucchina) => zucchina.lunghezza < 15);
console.log(minoreDi15);

function sum(array) {
    let sum = 0;
    array.forEach((element) => {
        //console.log(element.lunghezza);
        let weight = element.lunghezza;
        sum += weight;
    })
    return sum;
}

console.log(sum(maggioreDi15));
console.log(sum(minoreDi15));