const Discord = require('discord.js')
const config = require("../config.json")
module.exports.run = async (client, message, args) => {
    let clientping = new Date() - message.createdAt;
    message.delete(30000)

    message.channel.send(`${message.author}`).then(message => {message.delete(120000)});
    let pEmbed = new Discord.MessageEmbed()
        .setTitle("Ping")
        .addField(":robot:BOT: ", Math.floor(clientping) + "ms")
        .addField(":desktop:API: ", Math.floor(client.ws.ping) + "ms")
        .setFooter(`${config.botname}`,(client.user.avatarURL()))
        .setColor("#fdff00")

        message.channel.send(pEmbed).then(message => {message.delete(120000)});
}

module.exports.help = {
    name: "ping"
}
