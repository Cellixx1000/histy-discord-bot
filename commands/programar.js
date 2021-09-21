const Discord = require('discord.js')
const db = require("quick.db"),
    ms = require("parse-ms");
const config = require("../config.json")


exports.run = async (client, message, args, tools) => {


    let cooldown = 8.64e+7,
        amount = 2000;


        let lastDaily = await db.fetch(`lastCode_${message.author.id}`);
        

        if(lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastDaily));

            message.channel.send(`Você já programou hoje! Por favor, espere ${timeObj.hours} horas e ${timeObj.minutes} minutos!`)
        } else {
            const embed = new Discord.RichEmbed()
            .setTitle(`Programação - ${config.botname}`)
            .setColor(config.color)
            .setDescription(`Você programou um sistema de vendas usando ReactJS para uma empresa!`)
            .addField("<a:pinkdiamond:875763820444930068> Comissão", `${amount} reais!`)
            .setTimestamp()
            .setFooter(config.botname)
        
            message.channel.send(embed)

            db.set(`lastCode_${message.author.id}`, Date.now());
            db.add(`userBalance_${message.author.id}`, amount)
        }
}