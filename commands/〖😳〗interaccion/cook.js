const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js')

module.exports = {
 name: "cook",
 alias: [""],

execute(client, message, args){

var list = [
  'https://media.tenor.com/R1P8wHpPLacAAAAC/anime-cooking.gif',
  'https://data.whicdn.com/images/244694663/original.gif',
  'https://3.bp.blogspot.com/-R1tqSoRJLqQ/W2Ir1JXDwcI/AAAAAAABQvM/6dB9Twq9qO0ufASuQJsny8jU5ggiLcwnwCKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BEmiya-san%2BChi%2Bno%2BKyou%2Bno%2BGohan%2B-%2BEpisode%2B8%2B-%2BRin%2BFlips%2BFried%2BRice.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
  let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new EmbedBuilder()
        .setColor('#FF007F')
        .setDescription(`${message.author} está cocinando, ¿qué estará haciendo? >u<`)
        .setImage(rand)
        .setTimestamp()
        
return message.reply({ embeds : [embed] });
}else{
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed2 = new EmbedBuilder()
        .setColor('#FF007F')
        .setDescription(`${message.author} le gusta cocinar comida para ${user} >w<`)
        .setImage(rand)
        .setTimestamp()
        
   message.channel.send({ embeds : [embed2] })
}
}
}