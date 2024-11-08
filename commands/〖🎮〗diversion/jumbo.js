const Discord = require("discord.js");
const { EmbedBuilder } = require('discord.js')

module.exports = {
 name: "jumbo",
 alias: [""],

async execute(client, message, args){

  if(!args[0]) return message.channel.send(`> Debes decirme un emoji que este dentro del server`)

  let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])

  if(!emoji) return message.channel.send(`Tienes que poner un emoji`)

  const embed = new EmbedBuilder()

  .setTitle(`Emoji`)
  .setImage(emoji.url)
  .setFooter({ text:`Te gusta el emoji?`})
  

  message.channel.send({ embeds : [embed] })





}

}