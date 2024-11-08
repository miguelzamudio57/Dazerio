const Discord = require("discord.js");
const { EmbedBuilder } = require('discord.js')

module.exports = {
  name: "8ball",
  alias: [],
  description: "Te responde tu pregunta",
  execute(client, message, args) {
    let mensaje = args.join(" "); // Definimos el mensaje.
    if (!mensaje) return message.channel.send("Necesito que me digas una pregunta."); // Si no se proporciona una pregunta, se envía este mensaje.

    let respuestas = ["En mi opinión, sí", "Es cierto", "Es decididamente así", "Probablemente", "Buen pronóstico", "Todo apunta a que sí", "Sin duda", "Sí", "Sí - definitivamente", "Debes confiar en ello", "Respuesta vaga, vuelve a intentarlo", "Pregunta en otro momento", "Será mejor que no te lo diga ahora", "No puedo predecirlo ahora", "Concéntrate y vuelve a preguntar", "Puede ser", "No cuentes con ello", "Mi respuesta es no", "Mis fuentes me dicen que no", "Las perspectivas no son buenas", "Muy dudoso"]; // Definimos todas las respuestas en un Array.

      const ball = new EmbedBuilder() // Definimos el embed.
      .setFooter({ text: '8Ball', iconURL: 'https://media.discordapp.net/attachments/995907990332907530/1192644307283349584/png-clipart-t-shirt-icon-eight-ball-pool-number-8-game-logo.png?ex=65a9d391&is=65975e91&hm=28de36aeb4241bb5174718e1&=&format=webp&quality=lossless&width=676&height=676' }) // Le ponemos un Footer.
      .setTitle(`A la pregunta \`${mensaje}\`, de \`${message.author.username}\``) // En el título mostramos el autor y la pregunta.
      .setDescription(`Mi respuesta es: ${respuestas[Math.floor(Math.random() * respuestas.length)]}.`); // Seleccionamos una respuesta aleatoria del Array de respuestas.

    message.channel.send({ embeds: [ball] }); // Enviamos el embed.
  }
};