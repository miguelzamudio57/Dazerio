const Discord = require("discord.js");
const { EmbedBuilder } = require('discord.js')


module.exports = {
 name: "achievement",
 alias: ["logro"],

async execute(client, message, args){
  
  const Text = args.join("+")
  
  if (!Text) return message.channel.send('Por favor, especifique un texto.')
    if (Text > 22) return message.channel.send("Escriba un texto de no más de 22 caracteres")
      const embed = new EmbedBuilder()
      .setTitle('¡Logro desbloqueado!')
      .setImage(`https://skinmc.net/en/achievement/1/%C2%A1Logro+obtenido%21/${Text}`)
    message.channel.send({ embeds : [embed] })
  
  
}

}