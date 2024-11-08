const { MessageEmbed } = require("discord.js");
const { EmbedBuilder } = require('discord.js')

module.exports = {
  name: "clear",
  aliases: ["borrar", "limpiar"],
  description: "Borra un número especificado de mensajes en el canal actual.",
  usage: "<cantidad>",
  permissions: ["MANAGE_MESSAGES"],

  execute(client, message, args) {
    const cantidadMensajes = Number(args[0]);
    message.delete();

    if (isNaN(cantidadMensajes) || cantidadMensajes < 1 || cantidadMensajes > 100) {
      return message.reply({
        content: "Por favor, especifica una cantidad válida de mensajes a borrar (entre 1 y 100).",
        allowedMentions: { repliedUser: false },
      });
    }

    message.channel.bulkDelete(cantidadMensajes, true)
      .then((mensajes) => {
        const embed = new EmbedBuilder()
          .setColor(008000)
          .setDescription(`Se han borrado ${mensajes.size} mensajes.`);

        message.channel.send({ embeds: [embed] })
          .then((msg) => {
            setTimeout(() => msg.delete(), 5000);
          });
      })
      .catch((error) => {
        console.error(error);
        message.reply({
          content: "Ocurrió un error al intentar borrar los mensajes.",
          allowedMentions: { repliedUser: false },
        });
      });
  },
};

