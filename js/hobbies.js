/* 2 - hobbies.js
        1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.
        2. Esporta la funzione dal file.
*/

function hobbiesList(hobbyOne, hobbyTwo, hobbyThree) {
    return [hobbyOne, hobbyTwo, hobbyThree];
}

// checking function
const hobbiesA = hobbiesList("surfing", "paragliding", "skitouring");
console.log(hobbiesA); 

// export function
module.exports = hobbiesList;