const { MessageEmbed } = require("discord.js");
const { EmbedBuilder } = require('discord.js')

module.exports = {
  name: "choose",
  alias: ["elige"],
  execute(client, message, args) {
    const opciones = args.join(" ").split("|").map((opcion) => opcion.trim());
    
    if (opciones.length < 2) {
      return message.reply({ content: "Por favor, proporciona al menos dos opciones separadas por `|`.", allowedMentions: { repliedUser: false } });
    }
    
    const opcionElegida = opciones[Math.floor(Math.random() * opciones.length)];
    
    const embed = new EmbedBuilder()
      
      .setTitle("Elección")
      .addFields({ name: "Esta es mi elección:", value: opcionElegida });
      
    message.channel.send({ embeds: [embed] });
  },
};