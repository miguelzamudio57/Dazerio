const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js')

module.exports = {
 name: "clap",
 alias: [""],

execute(client, message, args){

var list = [
  'https://media.tenor.com/xdj7XE8llU8AAAAM/nekopara-clap.gif',
  'https://i.pinimg.com/originals/7e/77/ba/7e77ba07b8fe6ddd58613b4817e331c5.gif',
  'http://31.media.tumblr.com/b5237659b9591cf1489ae73f8b5a326c/tumblr_nr24hvvHNn1uu7rcro1_400.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
  let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new EmbedBuilder()
        .setColor('#FF007F')
        .setDescription(`${message.author} se puso a aplaudir`)
        .setImage(rand)
        .setTimestamp()
        
return message.reply({ embeds : [embed] });
}else{
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed2 = new EmbedBuilder()
        .setColor('#FF007F')
        .setDescription(`${message.author} reconoce las hazañas de ${user}`)
        .setImage(rand)
        .setTimestamp()
        
   message.channel.send({ embeds : [embed2] })
}
}
}