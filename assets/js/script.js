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

const verify = document.getElementById("check")

btn.addEventListener("click", function() {
    /* verifica e-mail */
    
    if (checkedUsers.includes(userMail.value)) {
        verify.innerHTML = `
                            ciao, la tua e-mail: ${userMail.value} è registrata
                            `
    
    
        /* chiedere numero random */
        const numPc = Math.floor(Math.random() * 6) + 1;
    
        const userNum = parseInt(document.getElementById("num").value);
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
        verify.innerHTML = `
                            mi dispiace, ma la tua e-mail: ${userMail.value} non è registrata..
                            `
    }

})





