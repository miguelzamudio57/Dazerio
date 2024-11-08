const Discord = require("discord.js");

module.exports = {
 name: "verificacion",
 alias: [""],

execute(client, message, args){

  const embed = new EmbedBuilder()
  .setTitle("Server de panas")
  .setDescription(`**¡Bienvenido a la comunidad de Miguelzamudio57!**
  
[•] Para poder enviar mensajes en el servidor debes dar click-izquierdo al botón de verificar ✅.

[•] No te olvides de leer las reglas en ⁠<#933970204709507122> para no tener ningún problema en el servidor.

¡Muchas gracias por unirte y esperamos que te diviertas!`)
  .setImage("https://cdn.discordapp.com/attachments/995907990332907530/1112516113176211526/Bienvenido_a_server_de_panas.png")
  .setColor("GREEN")
  .setFooter("Server de panas Network.")
  

  const row = new Discord.MessageActionRow()
  .addComponents(
    new Discord.MessageButton()
    .setCustomId("Verify")
    .setStyle("SUCCESS")
    .setLabel("Verificate")
    .setEmoji("✅")

    )

  message.channel.send({ embeds: [embed], components: [row] })
  
}

}
