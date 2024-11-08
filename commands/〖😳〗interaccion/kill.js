const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js')

module.exports = {
 name: "kill",
 alias: [""],

execute(client, message, args){

var list = [
  'https://media.giphy.com/media/uRadUD2n5dUj9UR0kg/giphy.gif',
  'https://i.pinimg.com/originals/fc/1f/13/fc1f13c418b93b087e60c6f6c664d7b9.gif',
  'https://i.gifer.com/XHss.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('¡Recuerda mencionar un usuario para matar!');
}else{
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new EmbedBuilder()
        .setColor('#FF007F')
        .setDescription(`${message.author} ACABA DE MATAR A ${user}`)
        .setImage(rand)
        .setTimestamp()
        
   message.channel.send({ embeds : [embed] })
}
}
}