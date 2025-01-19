/* 3 - people.js
        1. Importa la tua funzione da names.js
        2. Importa la tua funzione da hobbies.js
        3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto 
*/

// Importa la tua funzione da names.js
const personObject = require("./names.js");

// Importa la tua funzione da hobbies.js
const hobbiesList = require("./hobbies.js");

// Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto 

const person = () => {
    const name = personObject("John", "Smith");
    const hobbies = hobbiesList("surfing", "paragliding", "skitouring");

    return {
        fullName: `${name.firstName} ${name.lastName}`,
        hobbies
    }
}

console.log(person)



