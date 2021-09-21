const Discord = require('discord.js')
const config = require("../config.json")

const moment = require('moment')
moment.locale('pt-br')

module.exports = {

  run: function (client, message, args) {
    message.delete(30000)
    let botAvatar = client.user.displayAvatarURL()
    let date = client.user.createdAt
    let userName = client.user.username
    let clientping = new Date() - message.createdAt;
    

    const def = "ma"; // m para formar UM ou ma para formar UMA | Linha 27.


    // Criando embed que sera enviado para o usuário
    let embed = new Discord.MessageEmbed()
      .setTitle('Howdy 👋')
      .setDescription(`Me chamo ${config.botname}, sou u${def} bot de moderação e economia!`)
      .setColor("#fdff00")
      .setThumbnail(botAvatar)
      .addField('Nome:', config.botname, true)
      .addField('Linguagem:', "JavaScript", true)
      .addField('Estou online a:', moment().to(client.startTime, true), true)
      .addField('Ping:', Math.floor(clientping) + "ms", true)
      .addField('Criado em:', formatDate('DD/MM/YYYY, às HH:mm:ss', date), true)
      .addField('Criado por:', client.users.cache.get("717147676260433941"), true)
      .addField('Versão:',"0.2 BETA", true)
      .addField('Servidores:', `${client.guilds.cache.size}`, true)
      .addField('Usuarios:', `${client.users.cache.size}`, true)
      .addField('Hospedagem:','PC', true)
      .addField('Memoria:',`${(process.memoryUsage().heapUsed / 1024 / 1024)}`, true)
      .addField('CPU:',`${(process.cpuUsage().user)}`, true)
      .addField('RAM:',`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}(MB/s)`, true)
      .setFooter(config.botname,(client.user.avatarURL()))

    message.channel.send(embed).then(message => {message.delete(120000)});
  },
}