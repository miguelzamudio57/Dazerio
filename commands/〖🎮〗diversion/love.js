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
        
        .setFooter({ text: 'Dazerio ❤️ Calculator', iconURL: 'https://cdn.discordapp.com/attachments/1294292965476536390/1305884022450290741/Dazerio_2.png?ex=6734a6c5&is=67335545&hm=83253c2dcb9aa73dcdcfb6741d6e7d73765b03cf4d76b2c3abc695e319f6c520&' })

    message.channel.send({embeds: [embed]})
    }
};



