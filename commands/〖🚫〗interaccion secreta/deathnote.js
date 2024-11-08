const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js')

module.exports = {
 name: "deathnote",
 alias: [""],

execute(client, message, args){

var list = [
  'https://media.tenor.com/1ybUFYQpNDgAAAAd/death-note-light-yagami.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('¡Recuerda mencionar un usuario!');
}else{
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new EmbedBuilder()
        .setColor('#FF007F')
        .setDescription(`${message.author} Esta escribiendo algo sospechoso.`)
        .setImage(rand)
        .setFooter({ text: 'comando secreto 2/15' })
        
   message.channel.send({ embeds : [embed] })

  setTimeout(() => {
     const deathEmbed = new EmbedBuilder()
        .setColor('#FF007F')
        .setDescription(`${user} ¡HA MUERTO! D:`)
        .setImage('https://media.tenor.com/rhA2DBfPzN4AAAAd/death-note-heart-attack.gif')
        .setFooter({ text: 'comando secreto 2/15' })
        
     message.channel.send({ embeds : [deathEmbed] });
   }, 10000); // espera 10 segundos antes de enviar el segundo embed
  message.delete();
}
}
}