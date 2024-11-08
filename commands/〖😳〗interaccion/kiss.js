const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js')

module.exports = {
 name: "kiss",
 alias: [""],

execute(client, message, args){

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('¡Recuerda mencionar un usuario para besar!');
}else{
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new EmbedBuilder()
        .setColor('#FF007F')
        .setDescription(`${message.author} Beso a ${user}`)
        .setImage(rand)
        .setTimestamp()
        
   message.channel.send({ embeds : [embed] })
}
}
}