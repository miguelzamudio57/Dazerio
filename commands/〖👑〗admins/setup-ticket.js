const Discord = require("discord.js");
const { EmbedBuilder } = require('discord.js');

// Mapa para rastrear los tickets abiertos por usuario
const openTickets = new Map();

module.exports = {
  name: "setup-ticket",
  alias: ["st"],

  execute(client, message, args) {
    const embedChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
    const categoryID = args[1];

    if (!embedChannel) return message.reply("Debes mencionar un canal o proporcionar su ID.");
    if (!categoryID) return message.reply("Debes proporcionar el ID de la categoría donde se crearán los tickets.");

    const embed = new EmbedBuilder()
      .setTitle("Soporte")
      .setDescription("Haz click en el botón para abrir un ticket")
      .setColor("Green");

    const row = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
          .setCustomId('open-ticket')
          .setLabel('Abrir Ticket')
          .setStyle(Discord.ButtonStyle.Primary)
      );

    // Enviamos el embed al canal especificado
    embedChannel.send({ embeds: [embed], components: [row] })
      .then(msg => {
        const filter = i => i.customId === 'open-ticket' && i.user.id !== client.user.id;
        const collector = msg.createMessageComponentCollector({ filter });
        
        collector.on('collect', async i => {
          await i.deferUpdate();
          const guild = i.guild;
          const member = guild.members.cache.get(i.user.id);

          // Verificamos si el usuario ya tiene un ticket abierto
          if (openTickets.has(member.user.id)) {
            return i.followUp({ content: "Ya tienes un ticket abierto.", ephemeral: true });
          }

          // Creamos el canal en la categoría especificada con solo el nombre del usuario
          const ticketChannel = await guild.channels.create({
            name: `ticket-${member.user.username}`, // Solo incluye el nombre del usuario
            type: Discord.ChannelType.GuildText,
            parent: categoryID,
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

          // Agregamos el ticket al mapa para que no pueda crear otro
          openTickets.set(member.user.id, ticketChannel.id);

          const ticketEmbed = new EmbedBuilder()
            .setTitle(`Ticket de ${member.user.username}`)
            .setDescription("Gracias por abrir un ticket. El equipo de soporte estará contigo pronto.")
            .setColor("Blue");

          ticketChannel.send({ embeds: [ticketEmbed] });
        });
      })
      .catch(err => console.error("Error al enviar el mensaje de soporte:", err));

    // Escuchamos para eliminar el ticket del mapa cuando se borre el canal
    client.on('channelDelete', (deletedChannel) => {
      // Eliminamos el ID del usuario de openTickets si el canal eliminado es un ticket
      openTickets.forEach((channelId, userId) => {
        if (channelId === deletedChannel.id) {
          openTickets.delete(userId);
        }
      });
    });
  }
};
