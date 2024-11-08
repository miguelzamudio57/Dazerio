const Discord = require("discord.js");
const { EmbedBuilder } = require('discord.js')

module.exports = {
  name: "",
  aliases: ["moneda", "lanzarmoneda"],
  execute(client, message, args) {
    // Arreglo con las opciones de lanzamiento de la moneda
    const opciones = [
      { nombre: "cara!", imagen: "https://cdn.discordapp.com/attachments/933994475225751593/1092645930043457566/CCCOIN.png" },
      { nombre: "cruz!", imagen: "https://cdn.discordapp.com/attachments/933994475225751593/1092645956111048724/CCCCOIN.png" }
    ];
    // Seleccionar una opción aleatoriamente
    const resultado = opciones[Math.floor(Math.random() * opciones.length)];
    // Embed inicial para indicar que se está lanzando la moneda
    const embed1 = new EmbedBuilder()
      .setColor("#0099ff")
      .setTitle("Lanzando la moneda...");
    message.channel.send({ embeds: [embed1] }).then((msg) => {
      // Embed final con el resultado del lanzamiento
      const embed2 = new EmbedBuilder()
        .setColor("#0099ff")
        .setTitle(`¡Cayó ${resultado.nombre.toUpperCase()}`)
        .setImage(resultado.imagen);
      setTimeout(() => {
        msg.edit({ embeds: [embed2] });
      }, 2000); // Esperar 2 segundos antes de mostrar el resultado
    });
  },
};

