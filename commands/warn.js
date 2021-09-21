const Discord = require("discord.js");
const config = require("../config.json")

module.exports.run = (client,message,args)=>{
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não tem permissão para executar este comando.") 
  var user = message.mentions.users.first();
  var motivo = args.slice(1).join(" ")
  message.delete(30000)
  if(!user) return message.reply(`:x: | ${config.prefix}warn <mencione user> <motivo>`).then(message => {message.delete(30000)});
  if(!motivo) return message.feply(`:x: | ${config.prefix}warn <mencione user> <motivo>`).then(message => {message.delete(30000)});
  
  var pEmbed = new Discord.MessageEmbed()
          .setThumbnail(message.guild.iconURL())
          .setTitle(":no_entry_sign: **Você foi avisado! Servidor: ** "+`${message.guild.name}`)
          .addField(":police_officer: Avisado por:", `${message.author.tag}`)
          .addField(":pencil: Motivo:", motivo)
          .addField("⚠ Acha que isso é um erro?", `Por favor, reporte no [meu servidor](https://discord.gg/2mPgMPjqDm)`)
          .setTimestamp()
          .setFooter(`${config.botname}`, message.author.displayAvatarURL())
          .setColor("#fdff00")
  
  client.users.cache.get(user.id).send(pEmbed)
  
  message.channel.send("<a:btCheckBlack:875761753886191619> | Warn enviado !")
}