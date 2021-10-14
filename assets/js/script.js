/* Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

/* creare lista utenti che possono accedere */
const checkedUsers = ["valentina@gmail.com", "lorenzo@gmail.com", "joseph@gmail.com", "riccardo@gmail.com"]

/* chiedere mail all utente */
const userMail = document.getElementById("mail")

const btn = document.getElementById("btn")


/* verifica e-mail */

function risultato() {

    
    if (checkedUsers.includes(userMail.value)) {
        alert("puoi accedere")
    
    
        /* chiedere numero random */
        const numPc = Math.floor(Math.random() * 6) + 1;
    
        const userNum = parseInt(prompt("adesso inserisci un num. da 1 a 6"));
        /* console.log(userNum, numPc); */
    
    
        /* dichiarare il vincitore */
        if (userNum > numPc) {
            
            const result = document.getElementById("result");

            result.innerHTML = ` 
                                bravo, hai vinto! poichè il tuo num: ${userNum} è superiore a quello del tuo avversario: ${numPc}
                                
                                `
        }
        else {
           
            const result = document.getElementById("result");

            result.innerHTML = `
                                     mi dispiace hai perso.. poichè il tuo num: ${userNum} è inferiore a quello del tuo avversario: ${numPc}
                                `

        }
    
    
    } 
    
    else {
        alert("mi dispiace, ma non puoi accedere al gioco")
    }
    
}


