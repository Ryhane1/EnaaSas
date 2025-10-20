const prompt = require("prompt-sync")();

let C = prompt("Température en Celsius : ");

F = (C * 1.8) + 32;


console.log("Fahrenheit :"+F);