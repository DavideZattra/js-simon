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

function isBetweenInt(int, min, max){ //funzione che verifica se un intero è tra un intervallo

    if (int < min || int > max){
        
        return false;
    }
    return true;
}



let displayedNumbers=[]; //array of generated numbers
let userNumbers = []; //array of the prompted numbers
let correctNumbers = []; //array of the correct guessed numbers 


for(i = 0; i < 5; i++){
    
    let memoryNumber = getRandomNumber(1, 100);

    if (!displayedNumbers.includes(memoryNumber)){

        displayedNumbers.push(memoryNumber);
        // alert(memoryNumber); //show for each generated number  a single alert
        console.log(memoryNumber);
    } 

}

alert(displayedNumbers);

setTimeout(function insertGuessedNumber(){ // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
                                            // tramite il prompt().

    for (i = 0; i < displayedNumbers.length; i++){

        let guessedNumber = parseInt(prompt('inserisci un numero che hai visto precedentemente'));

        if (isNaN(guessedNumber) || !isBetweenInt(guessedNumber, 1, 100)){

            alert('inserisci un numero valido tra 1 e 100!');
            i--;

        } else if (displayedNumbers.includes(guessedNumber)){

            userNumbers.push(guessedNumber);
            correctNumbers.push(guessedNumber);

        } else {
            userNumbers.push(guessedNumber)
        }
    }

    alert('Hai inserito i numeri ' + userNumbers)
    alert(' i numeri corretti tra questi erano ' + correctNumbers) 
}, 30000);







