const { MessageEmbed } = require('discord.js')
const md5 = require('md5')
const { EmbedBuilder } = require('discord.js')

module.exports = {
    name: "love",
 alias: [""],
 description: "te responde tu pregunta",
   execute(client, message, args) {
        const firstMember = message.mentions.members.filter(m => m.id !== message.author.id).first();
        const secondMember =
            message.mentions.members
                .filter(m => m.id !== firstMember.id)
                .filter(m => m.id !== message.author.id)
                .first() || message.member;
        if (!firstMember || !secondMember)
            return message.reply("Menciona a un usuario para calcular");

        const members = [firstMember, secondMember].sort(
            (a, b) => parseInt(a.id, 10) - parseInt(b.id, 10)
        );
        const hash = md5(
            `${members[0].id}${members[1].user.username}${members[0].user.username}${members[1].id}`
        );

        const string = hash
            .split("")
            .filter(e => !isNaN(e))
            .join("");
        const percent = parseInt(string.substr(0, 2), 10);
        const name1 = firstMember.nickname || firstMember.user.username
        const name2 = secondMember.nickname || secondMember.user.username
        
        const embed = new EmbedBuilder()
	       .setTitle("❤️ Calculadora de amor")
        
         .setDescription(`User 1 - ${name1}\nUser2 - ${name2}\nPorcentaje de amor - ${percent}%`)
        
        .setFooter({ text: 'Dazerio ❤️ Calculator', iconURL: 'https://images-ext-2.discordapp.net/external/WQrOXkzw5n2Y0GFiZjTRGFl3VvpYkRHTZPBbpGh_3dc/https/cdn.discordapp.com/avatars/903514629790117950/0d7c3ab36bb40ca9be2319f8b14717a3.webp' })

    message.channel.send({embeds: [embed]})
    }
};



