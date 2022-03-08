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

// Ciclo for per chiedere all'utente di inserire i numeri visualizzati
for (let i = 0; i < 5; i++){
    let userCheckNumbers = parseInt(prompt(`Inserisci i numeri che hai visto sullo schermo.`));
    // Conidizione per  verifica che i numeri siano presenti nella lista dei numeri iniziale
if (newArray.includes(userCheckNumbers)){
    check = true;
    correctNumbers++;
    document.getElementById(`correct-output`).innerHTML = `I numeri corretti sono ${correctNumbers}. Sono: `;
    document.getElementById(`correct-list`).innerHTML += `${userCheckNumbers} `;

    console.log(check)
} else {
    check = false;
    uncorrectNumbers++;
    document.getElementById(`uncorrect-output`).innerHTML = `I numeri errati sono ${uncorrectNumbers}. Sono: `;
    document.getElementById(`uncorrect-list`).innerHTML += `${userCheckNumbers} `;
    console.log(check)
}
}