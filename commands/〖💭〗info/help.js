const Discord = require("discord.js");
const { EmbedBuilder } = require('discord.js')

module.exports = { 
  name: "help",
  alias: [""],

execute(client, message, args){

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new EmbedBuilder()
        
        .setDescription(`\<:Dazerio:1303838344735883284> Buenardas ~ Mi nombre es **Daziro**. Este es el listado de mis comandos, si tienes algún problema o duda sin resolver, puedes visitar el servidor de soporte:`)
    
    .addFields({ name: "Divertidos", value:
      "`8ball`, `achievement`, `bigtext`, `cat`, `choose`, `jumbo`, `love`,`trash`, `triggered`"} )
    
    .addFields({ name: "Información", value: "`help`, `avatar`"})

    .addFields({ name: "Admins", value:
      "`say`, `embed`, `clear`" })
    
        .setImage()
        .setTimestamp()
        .setColor(0xFFFF00)
   message.channel.send({ embeds : [embed] })
}
  
}



//.addFields({ name: "Interacción", value: "`baka`, `bite`, `bye`, `cheeks`, `claps`, `cook`, `cookie`, `cuddle`, `dance`, `feed`, `handholding`, `hi`, `highfive`, `hug`, `kickbutts`, `kill`, `kiss`, `laugh`, `lick`, `pat`, `poke`, `punch`, `run`, `scared`, `slap`, `sleep`, `splash`, `spray`, `tickle`, `tsundere`" })

//.addFields({ name: "Moderación", value: "`addrole`, `ban`, `cleanwarns`, `createrole`, `deleterole`, `editembed`, `editsay`, `hackban`, `kick`, `lock`, `mute`, `nickname`, `purge`, `removerole`, `sdm`, `softban`, `tempmute`, `unban`, `unlock`, `unmute`, `unwarn`, `warn`, `warnings`" })

//.addFields({ name: "Reacción", value: "`angry`, `banghead`, `blush`, `boom`, `bored`, `confused`, `cry`, `dab`, `die`, `discouraged`, `disgust`, `facepalm`, `fbi`, `game`, `happy`, `jpose`, `lewd`, `like`, `nope`, `pout`, `shrug`, `sing`, `sip`, `smug`, `think`, `vomit`" })