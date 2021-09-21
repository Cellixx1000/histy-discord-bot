const Discord = require('discord.js')
const config = require("../config.json")

exports.run = (bot,message,args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não tem permissão para executar este comando.") 
  let mensagemDeletar = args.slice(0).join(" ");
  if(mensagemDeletar < 2 || mensagemDeletar > 100) message.reply('Você só pode limpar de 2 a 100 mensagens.');
  if(args.lengt === 0) return message.reply(`Use ${config.prefix}limpar (Número de mensages) para o comando funcionar corretamente!`);
  if(isNaN(args[0])) return message.reply('');

  try {
      message.channel.bulkDelete(mensagemDeletar)

      let limparembed = new Discord.MessageEmbed()
      .setTitle("🚯 Lixeiro")
      .setColor("#fdff00")
      .setDescription("Chat limpo!")
      .addField("👤 Chat limpo por ", `${message.author}`)
      .addField("📑 Foram fornecidas", `${MensagemDeletar} messagens para deletar`)
      .setTimestamp()
      .setFooter(config.botname)

      message.channel.send(limparembed);
  } catch (e) {
    
  }
}

exports.help = {
  name: "limparchat"
}
