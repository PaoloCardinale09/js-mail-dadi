// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



// Dichiarare il giocatore e il cpu
// Scrivere la funzione per generare un numero casuale da 1 a 6
// estrarre un numero casuale sia per il giocatore che per la cpu
// confrontare i numeri casuali tra giocatore e cpu
// IF  giocatore ha un numero > della cpu, messaggio output che dichiara vincente il giocatore
// ELSE IF giocatore ha numero < cpu, messaggio output che dichiara vincente la cpu
// ELSE giocatore e cpu hanno lo stesso numero, messaggio output che dichiara parità
// 
// 


// Scrivere la funzione per generare un numero casuale da 1 a 6
const randomNumberDiceCpu = Math.floor(Math.random() * 6 + 1);
const randomNumberDicePlayer = Math.floor(Math.random() * 6 + 1);

// Dichiarare un numero casuale per il giocatore e per la cpu
const cpuNumber = randomNumberDiceCpu;
const playerNumber = randomNumberDicePlayer;

console.log('dado CPU:  ' + cpuNumber);
console.log('dado Player: ' + playerNumber);

// IF  giocatore ha un numero > della cpu, messaggio output che dichiara vincente il giocatore
if (playerNumber > cpuNumber) {
    console.log(`Il giocatore vince`);

    // ELSE IF giocatore ha numero < cpu, messaggio output che dichiara vincente la cpu
} else if (playerNumber < cpuNumber) {
    console.log(`La CPU vince`);

    // ELSE giocatore e cpu hanno lo stesso numero, messaggio output che dichiara parità
} else {
    console.log(`Parità`);
}
