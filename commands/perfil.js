const db = require('quick.db')
const Discord = require('discord.js')
const config = require("../config.json")

exports.run = async (client, message, args, tools) => {

    // DEF
    let user = message.mentions.members.first() || message.author;

    // SALDO REAIS
    let bal = db.fetch(`userBalance_${user.id}`);
    if(bal === null) bal = 0;

    // SALDO CRIPTO

    let BalanceBTC = await db.fetch(`userSaldoBTC_${user.id}`);
    let BalanceETH = await db.fetch(`userSaldoETH_${user.id}`);
    let BalanceDOGE = await db.fetch(`userSaldoDOGE_${user.id}`);
  
    if(BalanceBTC === null) BalanceBTC = 0;
    if(BalanceETH === null) BalanceETH = 0;
    if(BalanceDOGE === null) BalanceDOGE = 0;

    // SOBREMIM
    let sobre = await db.fetch(`userSobre_${message.author.id}`);
    
    if(sobre === null) sobre = "Use h.sobreset";

    // BG
    let Background = await db.fetch(`userBg_${user.id}`);
  
    if(Background === null) Background = "https://media.discordapp.net/attachments/881574890719838269/884094546626105405/hollowknigt.png?width=889&height=281";


    // Premium

    let premium = await db.fetch(`userPremium_${message.author.id}`);
    
    if(premium === null) sobre = "Não";

    // MSG

    const embed = new Discord.MessageEmbed()
    .setTitle("Perfil")
    .setDescription(`Perfil de ${user}`)
    .setColor(config.color)
    .addField("<a:8BitCoin:875761753848430644> Seu saldo", `${bal} reais.`, true)
    .addField("<:bitcoin:875761753068273675> Seu saldo BTC", `${BalanceBTC} BTC.`, true)
    .addField("<:ethereum:875761753479323678>  Seu saldo ETH", `${BalanceETH} BTC.`, true)
    .addField("<a:dogecoin:875761753634525194> Seu saldo DOGE", `${BalanceDOGE} DOGE.`, true)
    .addField("<:blobcatpopcorn:875761753160556626> Sobre mim", `${sobre}`, true)
    .addField("<:premium:884564135214448680> Premium", `${premium}`, true)
    .addField(":frame_photo: Background", "Seu background será exibido abaixo! Para adquirir um novo, use h.bg list!")
    .setImage(Background)
    .setFooter(config.botname)
    .setTimestamp()

    message.channel.send(embed)
}