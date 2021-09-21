const Discord = require("discord.js")
const db = require("quick.db");
const config = require("../config.json")


exports.run = async (client, message, args, tools) => {
// Definições
let p = config.prefix

// -------------------------------------------------------------------------------------------


    const embed = new Discord.MessageEmbed()
    .setTitle(`Premium - ${config.botname}`)
    .setColor("#00001")
    .setDescription(`Gostaria de ser um membro **premium** da ${config.botname}? Se ainda não está convencido, veja os benefícios!`)
    .addField(`Cargo no discord`, `Você recebe um cargo no servidor da ${config.botname} automaticamente quando vira premium! Lá você tem chats exclusivos somente para os premiums!`)
    .addField(`Daily em dobro`, `Você recebe o valor do daily em dobro devido a sua assinatura premium.`)
    .addField(`Premium para amigos!`, `Se você comprar o Premium+ você pode dar o premium para algum amigo!`)
    .addField(`Parcerias`, `Você pode fechar parceria com a ${config.botname} sem ter os requisitos!`)
    .addField(`Tenho que pagar quanto por isso?`, `NADA! Você pode juntar 1 milhão de reais (no BOT) e comprar o Premium (ou juntar 1 milhão e 500 mil para o Premium+). Caso você não queira juntar essa grana toda, pode comprar o Premium ou Premium+ com dinheiro de verdade! Por apenas 5 reais você compra o Premium ou por 7 reais você compra o Premium+. Ta esperando o que? Vire premium hoje mesmo!`)
    .setTimestamp()
    .setFooter(config.botname)

    message.channel.send(embed)

// -------------------------------------------------------------------------------------------

}