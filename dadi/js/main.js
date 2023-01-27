// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



// Dichiarare il giocatore e il cpu
// Scrivere la funzione per generare un numero casuale da 1 a 6
// estrarre un numero casuale sia per il giocatore che per la cpu
// confrontare i numeri casuali tra giocatore e cpu
// IF  giocatore ha un numero > della cpu, messaggio output che dichiara vincente il giocatore
// ELSE IF giocatore ha numero < cpu, messaggio output che dichiara vincente la cpu
// ELSE giocatore e cpu hanno lo stesso numero, messaggio output che dichiara parità


// PARTE GRAFICA
// Creare 2 bottoni per generare il lancio di dadi (player - cpu) e scrivere il numero
// Creare bottone per confrontare i 2 lanci di dadi
// assegnare le funzioni ai bottoni 
// scrivere il messaggio per il vincitore
const buttonPlayerEl = document.getElementById("player-button");
// console.log(buttonPlayerEl);
const buttonCpuEl = document.getElementById("cpu-button");
// console.log(buttonPlayerEl);
const resultPlayer = document.getElementById("result-player");
const resultCpu = document.getElementById("result-cpu");
const finalResult = document.getElementById("result");

// Scrivere la funzione per generare un numero casuale da 1 a 6



buttonPlayerEl.addEventListener(
    'click',
    function () {
        const randomNumberDiceCpu = Math.floor(Math.random() * 6 + 1);
        const randomNumberDicePlayer = Math.floor(Math.random() * 6 + 1);

        // Dichiarare un numero casuale per il giocatore e per la cpu
        const cpuNumber = randomNumberDiceCpu;
        const playerNumber = randomNumberDicePlayer;
        randomNumberDicePlayer;
        // alert(randomNumberDicePlayer);
        randomNumberDiceCpu;
        // alert(randomNumberDicePlayer);
        resultPlayer.innerHTML = (`PLAYER <br> ${playerNumber}`);
        resultCpu.innerHTML = (`CPU <br> ${cpuNumber}`);
        if (playerNumber > cpuNumber) {
            finalResult.innerHTML = (`Il GIOCATORE vince`);
            // console.log(`Il giocatore vince`);

            // ELSE IF giocatore ha numero < cpu, messaggio output che dichiara vincente la cpu
        } else if (playerNumber < cpuNumber) {
            finalResult.innerHTML = (`La CPU vince`);

            // console.log(`La CPU vince`);

            // ELSE giocatore e cpu hanno lo stesso numero, messaggio output che dichiara parità
        } else {
            finalResult.innerHTML = (`Parità`);

            // console.log(`Parità`);
        }
    }

)
// buttonCpuEl.addEventListener(
//     'click',
//     function () {
//         randomNumberDiceCpu;
//         // alert(randomNumberDicePlayer);
//         resultCpu.innerHTML = cpuNumber;
//     }

// )



// console.log('dado CPU:  ' + cpuNumber);
// console.log('dado Player: ' + playerNumber);

// IF  giocatore ha un numero > della cpu, messaggio output che dichiara vincente il giocatore
// if (playerNumber > cpuNumber) {
//     finalResult.innerHTML = (`Il giocatore vince`);
//     // console.log(`Il giocatore vince`);

//     // ELSE IF giocatore ha numero < cpu, messaggio output che dichiara vincente la cpu
// } else if (playerNumber < cpuNumber) {
//     finalResult.innerHTML = (`La CPU vince`);

//     // console.log(`La CPU vince`);

//     // ELSE giocatore e cpu hanno lo stesso numero, messaggio output che dichiara parità
// } else {
//     finalResult.innerHTML = (`Parità`);

//     // console.log(`Parità`);
// }
