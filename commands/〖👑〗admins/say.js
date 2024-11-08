const Discord = require("discord.js");

module.exports = { 
    name: "say", 
    alias: [""],

    execute(client, message, args) {
        let texto = message.content.slice(6).trim(); // Elimina el prefijo y espacios iniciales
        message.delete(); // Borra el mensaje original del usuario

        if (!texto) {
            // Envía el mensaje en el mismo canal, visible solo para el usuario que ejecutó el comando, y lo borra en 5 segundos
            return message.channel.send(`tienes que escribir algo MAMAHUVO.`).then(msg => {
                setTimeout(() => msg.delete(), 5000);
            });
        }
        
        message.channel.send(texto); // Envía el texto proporcionado al canal
    }
};
