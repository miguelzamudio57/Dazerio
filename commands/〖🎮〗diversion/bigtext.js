const Discord = require("discord.js");
const db = require('megadb')


module.exports = {
  name: "bigtext",
  alias: ["bigt", "bt"],

execute (client, message, args){
if (!args.length) return message.channel.send(':x: | Debes agregar un mensaje!');
// Si no hay argumentos

message.channel.send(BigText(args.join(' ')));
// BigText('Palabra') => Llamamos a la funciÃ³n y en los parametros colocamos el texto (Para convertirlo en "Grande")

function BigText(args) {
    const array = [];
    // AquÃ­ es donde guardaremos la palabra
    for (letra of Array.from(args)) {
        // Sacamos letra a letra y vericamos con los if lo siguiente...
        if (/\d/g.test(letra)) {
            // Si la letra es un numero
            switch(letra) {
                case '0':
                    // si la letra es 0 => emoji
                    array.push(':zero:');
                break;
                case '1':
                    // si la letra es 1 => emoji
                    array.push(':one:');
                break;
                case '2':
                    // si la letra es 2 => emoji
                    array.push(':two:');
                break;
                case '3':
                    // ...
                    array.push(':three:');
                break;
                case '4':
                    // ...
                    array.push(':four:')
                break;
                case '5':
                    // ...
                    array.push(':five:');
                break;
                case '6':
                    // ...
                    array.push(':six:');
                break;
                case '7':
                    // ...
                    array.push(':seven:');
                break;
                case '8':
                    // ...
                    array.push(':eight:');
                break;
                case '9':
                    // ...
                    array.push(':nine:');
                break;
            }
        } else if (/[^a-z]/gi.test(letra)) {
            // Si no es una letra ni numero
            array.push(letra);
            // lo pusheamos tal cual esta
        } else {
            // Si no es un numero o otro caracter
            // pusheamos el emoji de la letra
            array.push(`:regional_indicator_${letra.toLowerCase()}:`);
            // Si la letra esta en mayuscula la convertiremos a minuscula con toLowerCase()
        }
    }
    return array.join(' ');
    // Unimos el array y lo separamos un poco
}

 
 }

}