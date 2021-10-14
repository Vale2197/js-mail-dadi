/* Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

/* creare lista utenti che possono accedere */
const checkedUsers = ["valentina@gmail.com", "lorenzo@gmail.com", "joseph@gmail.com", "riccardo@gmail.com"]

/* chiedere mail all utente */
const userMail = prompt("inserisci la tua e-mail")

if (checkedUsers.includes(userMail) ) {
    alert("puoi accedere")
} else {
    alert("mi dispiace, ma non puoi accedere al gioco")
}

/* verifica mail */

for (let i = 0; i < checkedUsers.length; i++) {
    const users = checkedUsers[i];
    /* 
    if (checkedUsers[i] === userMail ) {
        alert("ok")
    } else {
        alert("no")
    } */
    
}