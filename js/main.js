// setTimeout da applicare alla funzione per nascondere i numeri 
const timerNumbers = setTimeout(hideNumbers, 3000)

// Funzione per nascondere i numeri dopo 30 secondi
function hideNumbers(){
    document.getElementById(`output-numbers`).classList.add(`d-none`);
}

const newArray = [];

// Ciclo for per generare 5 numeri diversi tra loro da stampare nel DOM
for (let i = 0; i < 5; i++){
    newArray.push(generateUniqueRandomNumber(newArray, 0, 100));
}


// Prendo l'array creato dalla funzione
console.log(newArray);

// Inserisco nell'HTML i numeri dell'array
document.getElementById(`output-numbers`).innerHTML=newArray;
let check = false;
let correctNumbers = 0;
let uncorrectNumbers = 0;

// setTimeout per ritardare l'inizio del gioco a dopo la scomparsa dei numeri
const clock = setTimeout(insertNumber, 3000);

// Funzione per far partire il gioco
function insertNumber() {
    // Ciclo for per chiedere all'utente di inserire i numeri visualizzati
for (let i = 0; i < 5; i++){
    let userCheckNumbers = parseInt(prompt(`Inserisci i numeri che hai visto sullo schermo.`));
        while (isNaN(userCheckNumbers)){
            userCheckNumbers = parseInt(prompt(`Inserisci i numeri che hai visto sullo schermo.`));
        }

        // Condizione per verificare che i numeri siano presenti nella lista dei numeri iniziale
        if (newArray.includes(userCheckNumbers)){
        check = true;
        correctNumbers++;
        document.getElementById(`correct-output`).innerHTML = `Il totale dei numeri corretti inseriti è ${correctNumbers}. Sono: `;
        document.getElementById(`correct-list`).innerHTML += `${userCheckNumbers} `;
        } else {
        check = false;
        uncorrectNumbers++;
        document.getElementById(`uncorrect-output`).innerHTML = `Il totale dei numeri errati inseriti è ${uncorrectNumbers}. Sono: `;
        document.getElementById(`uncorrect-list`).innerHTML += `${userCheckNumbers} `;
        }
    }
}


/**
 * Function that generates a random number between two included values, which is not already present in the given blacklist.
 *
 * @param {*} numsBlacklist The blacklist to check.
 * @param {*} min The minimum value of the random generated integer.
 * @param {*} max The maximum value of the random generated integer.
 * @returns A random generated integer which is not present in the blacklist.
 */
function generateUniqueRandomNumber( numsBlacklist, min, max){
    let check = false;
    let randomInt;

    while ( !check ){
        randomInt  = Math.floor(Math.random() * ((max + 1) - min) + min);
        if ( !numsBlacklist.includes(randomInt) ){
            check = true;
        }
    }
    return randomInt;
}

/**
 * Adds an element into an array IN PLACE only if is not already present.
 *
 * @param {*} array the array to change
 * @param {*} elementToAdd the unique element to add
 * @returns The given array
 */
function pushUnique(array, elementToAdd){
    if (!array.includes(elementToAdd)){
        array.push(elementToAdd);
        return array;
    }
}