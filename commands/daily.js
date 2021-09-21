const db = require("quick.db"),
      ms = require("parse-ms");


exports.run = async (client, message, args, tools) => {


    let cooldown = 8.64e+7,
        amount = 1000;


        let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);
        

        if(lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastDaily));

            message.channel.send(`Você já resgatou seu auxilio! Por favor, espere ${timeObj.hours} horas e ${timeObj.minutes} minutos!`)
        } else {
            message.channel.send(`Você resgatou com sucesso ${amount} reais!`)

            db.set(`lastDaily_${message.author.id}`, Date.now());
            db.add(`userBalance_${message.author.id}`, 1000)

        }
}