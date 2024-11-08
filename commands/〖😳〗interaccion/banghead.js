const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js')

module.exports = {
 name: "banghead",
 alias: [""],

execute(client, message, args){

var list = [
  'https://media.tenor.com/uCcqfhMrcesAAAAC/anime-head-bang.gif',
  'https://media.tenor.com/JhRyrdi0LeYAAAAC/head-bang-anime.gif',
  'https://media.tenor.com/UfX3rhJ6xM0AAAAC/izumi-parasite.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
  let avatar = message.author.displayAvatarURL({format: 'png'});
  const baka = new EmbedBuilder()//Definimos el embed.
        .setColor('#FF007F')
        .setDescription(`${message.author} estampa la cabeza contra lo que sea...`)
        .setImage(rand)
        .setTimestamp()
        
return message.reply({ embeds : [baka] });
}
}
}
