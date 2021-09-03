/**
 * 
 * Un alert() espone 5 numeri generati casualmente.
 * Da li parte un timer di 30 secondi.
 * Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
 * Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */


function getRandomNumber(min, max) { //funzione che crea un numero randomico tra un intervallo
    return Math.floor(Math.random() * (max - min) + min);
}

function insertGuessedNumber(){
    for (i = 0; i < displayedNumbers.length; i++){

        let guessedNumber = parseInt(prompt('inserisci un numero che hai visto precedentemente'));

        if (isNaN(guessedNumber)){

            alert('inserisci un numero valido!');
            i--;

        } else if (displayedNumbers.includes(guessedNumber)){

            userNumbers.push(guessedNumber);
            correctNumbers.push(guessedNumber);

        }
    }
}

let displayedNumbers=[]; //array of generated numbers
let userNumbers = []; //array of the prompted numbers
let correctNumbers = []; //array of the correct guessed numbers 


for(i = 0; i < 50; i++){
    
    let memoryNumber = getRandomNumber(1, 100);

    if (!displayedNumbers.includes(memoryNumber)){

        displayedNumbers.push(memoryNumber);
        // alert(memoryNumber); //show for each generated number  a single alert
        console.log(memoryNumber);
    } 

}

alert(displayedNumbers);

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
// tramite il prompt().

setTimeout(insertGuessedNumbers, 30000);
