// Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
//     stampa un messaggio appropriato sull'esito del controllo.


//     Prima di partire a scrivere codice poniamoci qualche domanda
// Che ci sia un array da qualche parte ?
//     Se dobbiamo confrontare qualcosa che "cosa" ci serve ?
//         Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// si ma noi cosa vogliamo fare ?
//     torniamo a scrivere in italiano
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"



// controlla che sia nella lista di chi può accedere
// stampa un messaggio appropriato sull'esito del controllo.


// PARTE GRAFICA
// chiedere mail all'utente tramite uno form con value
// controllare se la mail è presente nell'array
// stampare sulla pagina il risultato
// 
// 
// 
// 
const insertMailEl = document.getElementById("insert-mail");
const logInButtonEl = document.getElementById("control-button");
const finaleResultEl = document.getElementById("result");
// console.log(insertMailEl);
// Creare un array con una lista di mail
const mails = [
    "pippo@hotmail.com",
    "pluto@hotmail.com",
    "topolino@hotmail.com",
    "pippo@gmail.com",
    "pluto@gmail.com",
    "topolino@gmail.com"
]
logInButtonEl.addEventListener(
    "click",
    function () {

        // CHIEDO ALL'UTENTE LA PROPRIA MAIL 
        // const userMail = prompt(`Inserire il tuo indirizzo mail`);
        const userMail = insertMailEl.value;
        console.log(userMail);

        // CREO UNO SWITCH
        let mailInList = false;
        for (let i = 0; i < mails.length; i++) {
            if (userMail == mails[i]) {
                // SE LAL MAIL DELL'UTENTE E' NELL' ARRAY DAI IL BENVENUTO
                mailInList = true;
                // console.log(`Benvenuto ${mails[i]}`);
                finaleResultEl.innerHTML = (`Benvenuto ${mails[i]}`);
            }
        }

        // SE LA MAIL DELL'UTENTE NON E' NELL' ARRAY DAI IL MESSAGGIO DI NON ESSERE REGISTRATO
        if (mailInList) {
            finaleResultEl.innerHTML = (`Benvenuto ${mails[i]}`);

            // console.log(`Il nome utente "${userMail}" non è registrato.`);
            // finaleResultEl.innerHTML = (`Il nome utente "${userMail}" non è registrato.`);

        } else {
            finaleResultEl.innerHTML = (`Il nome utente "${userMail}" non è registrato.`);

        }
    })
        // for (let i = 0; i < mails.length; i++) {
            //     if (userMail == mails[i]) {
                //         console.log(`Benvenuto ${mails[i]} `);
                //     } else {
                    //         console.log(`Questo nome utente ${userMail} non è registrato`);
                    //     }
                    // }
                    // console.log(`Si prega di registrarsi per accedere`)