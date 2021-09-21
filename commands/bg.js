const Discord = require("discord.js")
const db = require("quick.db");
const config = require("../config.json")



exports.run = async (client, message, args, tools) => {

// Definições
let p = config.prefix

let user = message.mentions.members.first() || message.author;

// -------------------------------------------------------------------------------------------


if (message.content.startsWith(config.prefix + "bg list")) {
    const embed = new Discord.MessageEmbed()
    .setTitle(config.botname)
    .setColor(config.color)
    .setDescription(`Loja de Backgrounds`)
    .addField("ROG background", `para mais informações, use ${p}bg rog`)
    .addField("Vaporwave background", `para mais informações, use ${p}bg vaporwave`)
    .addField("VIP background", `para mais informações, use ${p}bg vip`)
    .setTimestamp()
    .setFooter(config.botname)

    message.channel.send(embed)
}


// -------------------------------------------------------------------------------------------


if (message.content.startsWith(p + "bg rog")) {
    const embedrog = new Discord.MessageEmbed()
    .setTitle(config.botname)
    .setColor(config.color)
    .setDescription("ROG BG")
    .addField("Valor:", `<:bitcoin:875761753068273675> 3 BTC`)
    .setImage("https://media.discordapp.net/attachments/881574890719838269/884094542998011924/rog.png")
    .setTimestamp()
    .setFooter("Para adquirir esse bg, use h.bg comprar rog")
message.channel.send(embedrog)
}


// -------------------------------------------------------------------------------------------


if (message.content.startsWith(p + "bg vip")) {
  const embedvip = new Discord.MessageEmbed()
  .setTitle(config.botname)
  .setColor(config.color)
  .setDescription("VIP BG")
  .addField("Valor:", `<:bitcoin:875761753068273675> 0 BTC`)
  .setImage("https://media.discordapp.net/attachments/881574890719838269/883937321546821702/50379554f716bec32ff12628a664d79a.png")
  .setFooter("É necessário ter o Premium da " + config.botname + " para comprar esse bg! Use h.bg comprar vip")
  message.channel.send(embedvip)
}


// -------------------------------------------------------------------------------------------

if (message.content.startsWith(p + "bg vaporwave")) {
  const embedvapor = new Discord.MessageEmbed()
  .setTitle(config.botname)
  .setColor(config.color)
  .setDescription("VAPORWAVE BG")
  .addField("Valor:", `<:bitcoin:875761753068273675> 3 BTC`)
  .setImage("https://media.discordapp.net/attachments/881574890719838269/884094541328703558/vaporwave.png")
  .setTimestamp()
  .setFooter("Para adquirir esse bg, use h.bg comprar vaporwave")
message.channel.send(embedvapor)
}


// -------------------------------------------------------------------------------------------


if (message.content.startsWith(p + "bg comprar rog")) {

  let Background = await db.fetch(`userBg_${user.id}`);
  let amount = "3"
  let selfBalance = await db.fetch(`userSaldoBTC_${message.author.id}`);
  let bg = "https://media.discordapp.net/attachments/881574890719838269/884094542998011924/rog.png?width=889&height=281";
  

  if(Background === null) Background = "https://media.discordapp.net/attachments/881574890719838269/884094546626105405/hollowknigt.png?width=889&height=281";


  if(amount > selfBalance) return message.reply("desculpe, mas você não tem dinheiro o suficiente para comprar esse bg.");
  if(Background === "https://media.discordapp.net/attachments/881574890719838269/884094542998011924/rog.png?width=889&height=281") return message.reply("desculpe, mas você já tem esse background.");



    db.subtract(`userSaldoBTC_${message.author.id}`, amount)
    db.set(`userBg_${message.author.id}`, bg)

  message.channel.send("<a:approvedbox:875763818452619354> | Você comprou o background **ROG** com sucesso! O background já está no seu " + config.prefix + "perfil ;)")



}


// -------------------------------------------------------------------------------------------


if (message.content.startsWith(p + "bg comprar vaporwave")) {

  let Background = await db.fetch(`userBg_${user.id}`);
  let amount = "3"
  let selfBalance = await db.fetch(`userSaldoBTC_${message.author.id}`);
  let bg1 = "https://media.discordapp.net/attachments/881574890719838269/884094541328703558/vaporwave.png";
  

  if(Background === null) Background = "https://media.discordapp.net/attachments/881574890719838269/884094546626105405/hollowknigt.png?width=889&height=281";


  if(amount > selfBalance) return message.reply("desculpe, mas você não tem dinheiro o suficiente para comprar esse bg.");
  if(Background === "https://media.discordapp.net/attachments/881574890719838269/884094541328703558/vaporwave.png") return message.reply("desculpe, mas você já tem esse background.");


    db.subtract(`userSaldoBTC_${message.author.id}`, amount)
    db.set(`userBg_${message.author.id}`, bg1)

  message.channel.send("<a:approvedbox:875763818452619354> | Você comprou o background **VAPORWAVE** com sucesso! O background já está no seu " + config.prefix + "perfil ;)")



}


// -------------------------------------------------------------------------------------------


if (message.content.startsWith(p + "bg comprar vip")) {

  let premium = await db.fetch(`userPremium_${message.author.id}`);
  let Background = await db.fetch(`userBg_${user.id}`);
  //let amount = "3"
  let selfBalance = await db.fetch(`userSaldoBTC_${message.author.id}`);
  let bg1 = "https://media.discordapp.net/attachments/881574890719838269/883937321546821702/50379554f716bec32ff12628a664d79a.png";
  

  if(Background === null) Background = "https://media.discordapp.net/attachments/881574890719838269/884094546626105405/hollowknigt.png?width=889&height=281";


 // if(amount > selfBalance) return message.reply("desculpe, mas você não tem dinheiro o suficiente para comprar esse bg.");
 if(premium === null) return message.reply("você não pode resgatar o PremiumDaily por que você não é um usuário Premium.")
 if(Background === "https://media.discordapp.net/attachments/881574890719838269/883937321546821702/50379554f716bec32ff12628a664d79a.png") return message.reply("desculpe, mas você já tem esse background.");


   // db.subtract(`userSaldoBTC_${message.author.id}`, amount)
    db.set(`userBg_${message.author.id}`, bg1)

  message.channel.send("<a:approvedbox:875763818452619354> | Você comprou o background **VIP** com sucesso! O background já está no seu " + config.prefix + "perfil ;)")



}


// -------------------------------------------------------------------------------------------

}