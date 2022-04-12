/* 
Crea un array di 10 oggetti che rappresentano una zucchina,
indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
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

let sum = 0;
zucchine.forEach((zucchina) => {
    console.log(zucchina.peso);
    let weight = zucchina.peso;
    sum += weight;
})

console.log(sum);