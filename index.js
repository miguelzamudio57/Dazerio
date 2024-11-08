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

// Inicia sesión en Discord con el token definido en config.
client.login("OTM3ODQ2OTc5NDQ1MjcyNjE2.GHLec2.-BH4SfO2Y5pnEe5qNA_esu4BAOMh3aNEy7wf5s")
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

// Verificación del servidor en línea
const http = require('http');
const { token } = require('./config.js');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end(`
        <html>
          <head>
            <title>Your Web View</title>
          </head>
          <body style="margin: 0; padding: 0;">
            <iframe width="100%" height="100%" src="https://axocoder.vercel.app/" frameborder="0" allowfullscreen></iframe>
          </body>
        </html>`);
});

server.listen(3000, () => {
  console.log('Server Online Verification ✅!!');
});
