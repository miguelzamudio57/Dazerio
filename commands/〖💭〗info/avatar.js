const Discord = require("discord.js");
const { EmbedBuilder } = require('discord.js')

module.exports = {
 name: "avatar",
 alias: [""],

async execute(client, message, args){

  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member

  if (!member) {
    return message.reply({ content: `${emoji.negativo} | **Por favor mencione a un usuario válido`, allowedMentions: { repliedUser: false } })
  }

  const globalAvatar = member.user.displayAvatarURL({ format: 'png', size: 1024, dynamic: true })

  const guildAvatar = member.user.displayAvatarURL({ format: 'png', size: 1024 , dynamic: true })

  if(globalAvatar === guildAvatar){
    const embed = new EmbedBuilder()
      .setTitle(`Avatar de ${member.user.username}`)
      .setURL(globalAvatar)
      .setImage(globalAvatar)
      .setFooter({ text: `Avatar` })
      

    message.reply({ embeds : [embed], allowdMentions : { repliedUser: false } })
  } else {
    const embed = new new EmbedBuilder()
      
    .setTitle(`Avatar de ${member.user.username}`)
    .setURL(globalAvatar)
    .setImage(globalAvatar)
    .setDescription(`Global avatar: [Click Aqui](${globalAvatar})\nAvatar del servidor: [Click aqui](${globalAvatar})`)
    .setFooter({ text: `Avatar` })
    

    const embed2 = new EmbedBuilder()
    .setURL(globalAvatar)
    .setImage(globalAvatar)

    message.reply({ embeds : [embed, embed2], allowedMentions : { repliedUser: false } })
  }
}
}