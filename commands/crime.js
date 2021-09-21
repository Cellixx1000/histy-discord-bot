const Discord = require('discord.js')
const db = require("quick.db"),
      ms = require("parse-ms");
const config = require("../config.json")


exports.run = async (client, message, args, tools) => {


    let cooldown = 8.64e+7,
        amount = 746;


        let lastDaily = await db.fetch(`lastFurto_${message.author.id}`);
        

        if(lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastDaily));

            message.channel.send(`Você já roubou hoje! Por favor, espere ${timeObj.hours} horas e ${timeObj.minutes} minutos!`)
        } else {
            const embed = new Discord.RichEmbed()
            .setTitle(config.botname)
            .setColor(config.color)
            .setDescription(`Crime - ${config.botname}`)
            .addField("<a:8BitCoin:875761753848430644> Você roubou", `${amount} reais!`)
            .setTimestamp()
            .setFooter(config.botname)
        
            message.channel.send(embed)

            db.set(`lastFurto_${message.author.id}`, Date.now());
            db.add(`userBalance_${message.author.id}`, amount)
        }
}