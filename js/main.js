// setTimeout da applicare alla funzione per nascondere i numeri 
const timerNumbers = setTimeout(hideNumbers, 30000)

// Funzione per nascondere i numeri dopo 30 secondi
function hideNumbers(){
    document.getElementById(`output-numbers`).classList.add(`d-none`);
}

// Funzione per generare un array di numeri casuali
function generateRandomNumber (){
    const newArray = [];

    // Ciclo for per creare i numeri e aggiungerli all'array vuoto appena creato
    for (let i = 0; i < 5; i++){
        let newNumber = parseInt((Math.floor(Math.random() * 100) + 1));
        newArray.push(newNumber);
    }
    return newArray;
}

// Prendo l'array creato dalla funzione
let newArray = generateRandomNumber();
console.log(newArray);

// Inserisco nell'HTML i numeri dell'array
document.getElementById(`output-numbers`).innerHTML=newArray;
let check = false;
let correctNumbers = 0;
let uncorrectNumbers = 0;

// setTimeout per ritardare l'inizio del gioco a dopo la scomparsa dei numeri
const clock = setTimeout(insertNumber, 30000);

// Funzione per far partire il gioco
function insertNumber() {
    // Ciclo for per chiedere all'utente di inserire i numeri visualizzati
for (let i = 0; i < 5; i++){
    let userCheckNumbers = parseInt(prompt(`Inserisci i numeri che hai visto sullo schermo.`));
        while (isNaN(userCheckNumbers)){
            userCheckNumbers = parseInt(prompt(`Inserisci i numeri che hai visto sullo schermo.`));
            console.log(typeof(userCheckNumbers))
        }

        // Conidizione per  verifica che i numeri siano presenti nella lista dei numeri iniziale
        if (newArray.includes(userCheckNumbers)){
        check = true;
        correctNumbers++;
        document.getElementById(`correct-output`).innerHTML = `Il totale dei numeri corretti inseriti è ${correctNumbers}. Sono: `;
        document.getElementById(`correct-list`).innerHTML += `${userCheckNumbers} `;

        console.log(check)
        } else {
        check = false;
        uncorrectNumbers++;
        document.getElementById(`uncorrect-output`).innerHTML = `Il totale dei numeri errati inseriti è ${uncorrectNumbers}. Sono: `;
        document.getElementById(`uncorrect-list`).innerHTML += `${userCheckNumbers} `;
        console.log(check)
        }
    }
}