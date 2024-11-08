const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js')

module.exports = {
 name: "bite",
 alias: [""],

execute(client, message, args){

var list = [
  'https://media.tenor.com/n0DPyBDtZHgAAAAC/anime-bite.gif',
  'https://media.tenor.com/RS7jYiWS9EcAAAAC/bite-anime.gif',
  'https://media.giphy.com/media/OqQOwXiCyJAmA/giphy.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
  let avatar = message.author.displayAvatarURL({format: 'png'});
  const baka = new EmbedBuilder()
        .setColor('#FF007F')
        .setDescription(`Eres muy dulce ${message.author}, no puedo evitar moderte >u<`)
        .setImage(rand)
        .setTimestamp()
        
return message.reply({ embeds : [baka] });
}else{
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new EmbedBuilder()
        .setColor('#FF007F')
        .setDescription(`Eres muy dulce ${user}, no puedo evitar moderte >u<`)
        .setImage(rand)
        .setTimestamp()
        
   message.channel.send({ embeds : [embed] })
}
}
}