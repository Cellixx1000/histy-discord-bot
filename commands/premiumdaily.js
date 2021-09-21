const Discord = require("discord.js")
const db = require("quick.db"),
      ms = require("parse-ms");

const config = require("../config.json")



exports.run = async (client, message, args, tools) => {

     let selfBalance = await db.fetch(`userPremium_${message.author.id}`);
  
    /*  if(targetBalance === null) targetBalance = 0;
      if(selfBalance === null) selfBalance = 0;*/
  
      if(selfBalance === null) return message.reply("você não pode resgatar o PremiumDaily por que você não é um usuário Premium.")

  let cooldown = 8.64e+7,
        amount = 1000;


        let lastDaily = await db.fetch(`lastPremiumDaily_${message.author.id}`);
        

        if(lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastDaily));

            message.channel.send(`Você já resgatou seu PremiumDaily! Por favor, espere ${timeObj.hours} horas e ${timeObj.minutes} minutos!`)
        } else {
            db.set(`lastPremiumDaily_${message.author.id}`, Date.now());
            db.add(`userBalance_${message.author.id}`, 1000)

            message.channel.send(`Você resgatou com sucesso ${amount} reais!`)
        }
}