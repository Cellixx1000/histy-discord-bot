const Discord = require("discord.js");
const config = require("../config.json")

module.exports.run = async (client, message, args) => {


const ajudaembed = new Discord.MessageEmbed()
.setTitle(`Ajuda - ${config.botname}`)
.setColor("#ff6545")
.setDescription(`Olá! Utilize o prefixo **${config.prefix}** para cada comando desta lista!`)
//.addField("> <:pepegun:875761753735188570> Moderação", `addrole, ban, clear, criarcargo, kick, listban, lock, mute, unlock, warn.`)
.addField("> <:pepegun:875761753735188570> Moderação", `clear, warn.`)
.addField("> <a:cryptoparrot:875761756532797470> Economia", `saldocripto, daily, pagar, saldo, darknet, shop list, crime, empresas, salario, programar, trabalhos, bg, inventario.`)
.addField("> <:premium:884564135214448680> Premium Commands", `premium, premiumdaily.`)
.addField("> <a:pinkdiamond:875763820444930068> Info", `avatar, botinfo, perfil, ping.`)
.addField("Mais comandos serão adicionados em breve! ", "<a:toosieslide:875763818280665088>")
.setTimestamp()
.setFooter(config.botname)


message.channel.send(ajudaembed)

}

module.exports.help = {
  name: "sobremim"
}