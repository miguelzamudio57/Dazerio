const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js')

module.exports = {
 name: "angry",
 alias: [""],

execute(client, message, args){

var list = [
  'https://media.tenor.com/X3x3Y2mp2W8AAAAC/anime-angry.gif',
  'https://media.tenor.com/rzDkOlEDun0AAAAC/hayase-nagatoro-nagatoro-angry.gif',
  'https://media.tenor.com/sJQ885Lw2MsAAAAd/miku-angry.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
  let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new EmbedBuilder()//Definimos el embed.
        .setColor('#FF007F')
        .setDescription(`${message.author} siente mucha molestia`)
        .setImage(rand)
        .setTimestamp()
        return message.reply({embeds: [embed]})//Se envia el embed.
}
}
}
