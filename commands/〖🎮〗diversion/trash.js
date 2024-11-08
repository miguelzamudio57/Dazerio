const { MessageEmbed, MessageAttachment } = require("discord.js");
const canvacord = require("canvacord");
const { EmbedBuilde } = require('discord.js')

module.exports = {
 name: "trash",
 aliases: [],
 description: "Trash?",
 category: "Image",
 usage: "trash [user mention, user id, user name]",
 async execute(client, message, args){
  try {
   const User = (await message.mentions.members.first()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find((r) => r.user.username.toLowerCase().includes() === args.join(" ").toLocaleLowerCase()) || message.guild.members.cache.find((r) => r.displayName.toLowerCase().includes() === args.join(" ").toLocaleLowerCase()) || message.member;
     const wait = new MessageEmbed() // Prettier
    .setColor("#5865f2")
    .setDescription(`Por favor espera... Estoy generando tu imagen`);
   message.reply({ embeds: [wait] }).then((msg) => {
    (async () => {
     const trash = await canvacord.Canvas.trash(
      User.user.displayAvatarURL({
       dynamic: false,
       format: "png",
       size: 2048,
      })
     );
     const attachment = new MessageAttachment(trash, "trash.png");
     msg.edit({ embeds: [], files: [attachment] });
    })();
   });
  } catch (err) {
   console.log(err);
   return client.createCommandError(message, err);
  }
 },
};
