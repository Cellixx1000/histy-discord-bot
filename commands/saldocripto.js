const Discord = require("discord.js");
const db = require("quick.db")
const config = require("../config.json")

exports.run = async (client, message, args, tools) => {
  let user = message.mentions.users.first() || message.author;

  let BalanceBTC = await db.fetch(`userSaldoBTC_${user.id}`);
  let BalanceETH = await db.fetch(`userSaldoETH_${user.id}`);
  let BalanceDOGE = await db.fetch(`userSaldoDOGE_${user.id}`);

  if(BalanceBTC === null) BalanceBTC = 0;
  if(BalanceETH === null) BalanceETH = 0;
  if(BalanceDOGE === null) BalanceDOGE = 0;


  const embed = new Discord.MessageEmbed()
  .setTitle("Binance")
  .setColor("#fdff00")
  .setThumbnail("https://cdn.discordapp.com/emojis/875761753626144858.png?v=1")
  .setDescription(`Conta de criptomoedas de ${user}`)
  .addField("BTC", `${BalanceBTC}`)
  .addField("ETH", `${BalanceETH}`)
  .addField("DOGE", `${BalanceDOGE}`)
  .setTimestamp()
  .setFooter(config.botname)

  //message.channel.send(`${user} - Reais: $${Balance}`)
  message.channel.send(embed)
}