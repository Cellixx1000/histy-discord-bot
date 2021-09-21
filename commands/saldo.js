const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, utils) => {
  let user = message.mentions.members.first() || message.author;
  let bal = db.fetch(`userBalance_${user.id}`);
  if (bal === null) bal = 0;
  let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle(`Santander`)
    .setDescription(`Conta bancaria de ${message.author}`)
    .addField("Seu saldo", `${bal} reais.`)
  message.channel.send(embed);
};

module.exports.help = {
  name: "balance"
};
