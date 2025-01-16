/* 1 - names.js
        1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
        2. Esporta la funzione dal file. 
*/

function personObject(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    };
}

// to check function above: 
const personA = personObject("John", "Smith");
console.log(personA); 
