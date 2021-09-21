const Discord = require("discord.js")
const db = require("quick.db");
const config = require("../config.json")



exports.run = async (client, message, args, tools) => {

     let selfBalance = await db.fetch(`userItemNote_${message.author.id}`);
  
    /*  if(targetBalance === null) targetBalance = 0;
      if(selfBalance === null) selfBalance = 0;*/
  
      if(selfBalance === null) return message.reply("você não pode entrar na darknet, pois, você não tem um notebook/pc")

// Definições
let p = config.prefix

// -------------------------------------------------------------------------------------------

    const embed = new Discord.MessageEmbed()
    .setTitle("𝐃𝐀𝐑𝐊𝐍𝐄𝐓")
    .setColor("#00001")
    .setDescription(`Bem-vindo a darknet.`)
    .addField("<:pepegun:875761753735188570> Armamento", `${p}armamento`)
    .setTimestamp()
    .setFooter(config.botname)

    message.channel.send(embed)

// -------------------------------------------------------------------------------------------

}