const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js')

module.exports = {
 name: "bye",
 alias: [""],

execute(client, message, args){

var list = [
  'https://media.tenor.com/1ZNXoqckZuoAAAAM/bye.gif',
  'https://media.tenor.com/WGVm71AESV0AAAAM/anime-bye-bye-yugi-amane.gif',
  'https://media.tenor.com/2GNTbMm8kMYAAAAC/thompson-milly.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
  let avatar = message.author.displayAvatarURL({format: 'png'});
  const baka = new EmbedBuilder()
        .setColor('#FF007F')
        .setDescription(`${message.author}. se está despidiendo, bye bye~`)
        .setImage(rand)
        .setTimestamp()
        
return message.reply({ embeds : [baka] });
}else{
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new EmbedBuilder()
        .setColor('#FF007F')
        .setDescription(`${message.author}. se está despidiendo de ${user}, bye bye~`)
        .setImage(rand)
        .setTimestamp()
        
   message.channel.send({ embeds : [embed] })
}
}
}