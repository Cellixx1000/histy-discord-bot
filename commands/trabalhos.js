const Discord = require("discord.js")
const db = require("quick.db");
const config = require("../config.json")



exports.run = async (client, message, args, tools) => {

// Definições
let p = config.prefix

// -------------------------------------------------------------------------------------------

    const embed = new Discord.MessageEmbed()
    .setTitle(config.botname)
    .setColor(config.color)
    .setDescription(`Trabalhos - ${config.botname}`)
    .addField(":man_technologist: Programador", "Você pode trabalhar nesta area sem ter experiência! Basta ter um notebook!")
    .addField(":classical_building: Empresas", "Use h.empresas list")
    .addField(":man_running: Crime", "Você pode trabalhar nesta area sem ter experiência e itens!")
    .setTimestamp()
    .setFooter(config.botname)

    message.channel.send(embed)

}