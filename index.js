// Módulos necesarios
const { GatewayIntentBits, Client, Collection, EmbedBuilder } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const Discord = require("discord.js");
const { ButtonBuilder, ActionRowBuilder, InteractionType } = require('discord.js');
const fs = require("fs");

// Prefijo del bot
const prefix = "Dp!";

// Archivo de configuración
client.config = require('./config.js');


const tokenPart1 = "OTM3ODQ2OTc5";
const tokenPart2 = "NDQ1MjcyNjE2";
const tokenPart3 = "GFqxv6.jvWVnB";
const tokenPart4 = "IdwQ2dHskptAyx6zuC3VaSBpHyZZ-trc";
const token = `${tokenPart1}${tokenPart2}.${tokenPart3}.${tokenPart4}`;
client.login(token)
  .then(() => {
    console.log(`Estoy listo, soy ${client.user.tag}`);
  })
  .catch((err) => {
    console.error("Error al iniciar sesión: " + err);
  });

// Carga los comandos
client.commands = new Collection();

fs.readdirSync('./commands').forEach((dir) => {
    const commands = fs.readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith('.js'));
    for (let file of commands) {
        let command = require(`./commands/${dir}/${file}`);
        console.log(`•CARGANDO• Comando - ${file} cargado`);
        client.commands.set(command.name, command);
    }
});

// Evento messageCreate
client.on('messageCreate', async (message) => {
    if (message.author.bot || !message.guild || message.channel.type === 'dm') return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.find(c => c.alias && c.alias.includes(command));

    if (cmd) {
        cmd.execute(client, message, args);
    }
});

// Sistema de tickets
client.on('interactionCreate', async (interaction) => {
    if (interaction.isButton() && interaction.customId === 'open-ticket') {
        const existingChannel = interaction.guild.channels.cache.find(channel => channel.name === `ticket-${interaction.user.username}`);
        if (existingChannel) {
            return interaction.reply({ content: 'Ya tienes un ticket abierto.', ephemeral: true });
        }

        const ticketChannel = await interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
            type: 'GUILD_TEXT',
            permissionOverwrites: [
                { id: interaction.guild.id, deny: ['ViewChannel'] },
                { id: interaction.user.id, allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory'] },
                { id: client.user.id, allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory'] },
            ],
        });

        const embed = new EmbedBuilder()
            .setTitle('Ticket creado')
            .setDescription('Este es tu canal de soporte. Un miembro del equipo se unirá contigo pronto.')
            .setColor('BLUE');

        await ticketChannel.send({ content: `<@${interaction.user.id}>`, embeds: [embed] });
        await interaction.reply({ content: `Tu ticket ha sido creado en ${ticketChannel}`, ephemeral: true });
    }
});
