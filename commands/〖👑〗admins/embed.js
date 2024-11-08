const Discord = require("discord.js");
const { EmbedBuilder } = require('discord.js')

module.exports = {
  name: "embed",
  aliases: ["create-embed"],
  description: "Crea un embed personalizado.",
  usage: "<título> | <descripción> | [URL de la imagen]",
  execute(client, message, args) {

    const [title, description, image] = args.join(" ").split(" | ");

    if (!title || !description) {
      return message.reply("Por favor, proporciona un título, descripción y imagen(opcional) para crear el embed. Ejemplo: `Dp!embed Título | Descripción | URL de la imagen`");
    }

    const embed = new EmbedBuilder()
      .setColor(0xff007f)
      .setTitle(title)
      .setDescription(description);

    if (image) {
      embed.setImage(image);
    }

    message.channel.send({ embeds: [embed] });
  },
};