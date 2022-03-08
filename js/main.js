function generateRandomNumber (){
    const newArray = [];

    for (let i = 0; i < 5; i++){
        let newNumber = parseInt((Math.floor(Math.random() * 100) + 1));
        newArray.push(newNumber);
    }
    return newArray;
}

document.getElementById(`output-numbers`).innerHTML=(generateRandomNumber());
console.log(generateRandomNumber());
let check = false;

let checkNumbers = parseInt(prompt(`Inserisci i numeri che hai visto sullo schermo.`).value);
if (generateRandomNumber().includes(checkNumbers)){
    check = true;
} else {
    check = false;
}
console.log(check)