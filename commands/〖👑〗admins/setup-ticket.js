const Discord = require("discord.js"); const { EmbedBuilder } = require('discord.js')

module.exports = { name: "setup-ticket", alias: ["st"],

execute(client, message, args){
  const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel

  if(!channel) return message.reply("Debes mencionar un canal")

  const embed = new EmbedBuilder()
    .setTitle("Soporte")
    .setDescription("Haz click en el boton para abrir un ticket")
    .setColor("Green")

  const row = new Discord.ActionRowBuilder()
    .addComponents(
      new Discord.ButtonBuilder()
        .setCustomId('open-ticket')
        .setLabel('Abrir Ticket')
        .setStyle(Discord.ButtonStyle.Primary)
    )

  channel.send({ embeds: [embed], components: [row] })
  .then(msg => {
    const filter = i => i.customId === 'open-ticket' && i.user.id !== client.user.id;
    const collector = msg.createMessageComponentCollector({ filter });
    collector.on('collect', async i => {
      await i.deferUpdate();
      const guild = i.guild;
      const member = guild.members.cache.get(i.user.id);
      const channel = await guild.channels.create(`1-ticket`, {
        parent: '1303486087171149874',
        permissionOverwrites: [
          {
            id: i.user.id,
            allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory'],
          },
          {
            id: guild.roles.everyone.id,
            deny: ['ViewChannel'],
          },
        ],
      });
      const ticketEmbed = new EmbedBuilder()
        .setTitle(`Ticket de ${member.user.username}`);
      channel.send({ embeds: [ticketEmbed] });
    });
  });
}

}