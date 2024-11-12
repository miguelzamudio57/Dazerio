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

// Define el token dividido en dos partes
const tokenPart1 = "OTM3ODQ2OTc5NDQ1MjcyNjE2";
const tokenPart2 = "GFqxv6.jvWVnBIdwQ2dHskptAyx6zuC3VaSBpHyZZ-trc";

// Unir las dos partes al iniciar sesión en Discord
client.login(`${tokenPart1}.${tokenPart2}`)
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
