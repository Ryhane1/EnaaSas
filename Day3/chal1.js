const prompt = require("prompt-sync")();

const nombre = parseInt(prompt("Entrez un nombre : "));


    let estPremier = true;

    for (let i = 2; i < nombre; i++)
       {
        if (nombre % i === 0) 
          {
            estPremier = false;
            break;
        }
    }

    if (estPremier) {
        console.log(nombre + " est un nombre premier.");
    } else {
        console.log(nombre + " n'est pas un nombre premier.");
    }

    