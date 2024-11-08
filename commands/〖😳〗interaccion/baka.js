const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js')

module.exports = {
 name: "baka",
 alias: [""],

execute(client, message, args){

var list = [
  'https://media.tenor.com/Xcr8fHyf84gAAAAC/baka-anime.gif',
  'https://media.tenor.com/ILl8K-ur6iEAAAAC/baka-anime.gif',
  'https://media.giphy.com/media/bOCMPVgsVnRT2/giphy.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
  let avatar = message.author.displayAvatarURL({format: 'png'});
  const baka = new EmbedBuilder()//Definimos el embed.
        .setColor('#FF007F')
        .setDescription(`¡¡B-BAAAKAAAA, ${message.author}!!`)
        .setImage(rand)
        .setTimestamp()
        
return message.reply({ embeds : [baka] });
}else{
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new EmbedBuilder()//Definimos el embed.
        .setColor('#FF007F')
        .setDescription(`¡Torpe, ${user}!`)
        .setImage(rand)
        .setTimestamp()
        
   message.channel.send({ embeds : [embed] })
}
}
}