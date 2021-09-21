const Discord = require("discord.js")
const db = require("quick.db");
const config = require("../config.json")



exports.run = async (client, message, args, tools) => {

// Definições
let p = config.prefix

// -------------------------------------------------------------------------------------------

if (message.content.startsWith(config.prefix + "shop list")) {
    const embed = new Discord.MessageEmbed()
    .setTitle(config.botname)
    .setColor(config.color)
    .setDescription(`Loja do bot ${config.botname}`)
    .addField("<:pepegun:875761753735188570> Armamento", `${p}darknet`)
    .addField("<a:8BitCoin:875761753848430644> Eletronicos", `${config.prefix}shop eletronicos`)
  //  .addField("<:blobcatmeataww:875761753458376805> Comida", `${config.prefix}shop comida`)
    .addField("<a:pinkdiamond:875763820444930068> Outros", `${p}shop outros`)
    .setTimestamp()
    .setFooter(config.botname)

    message.channel.send(embed)
}

// -------------------------------------------------------------------------------------------

if (message.content.startsWith(p + "shop eletronicos")) {
    const embedeletro = new Discord.MessageEmbed()
    .setTitle(config.botname)
    .setColor(config.color)
    .setDescription("Lista de produtos")
    .addField("Notebook positivo 2009", `Para comprar, use o comando: ${p}shop comprar notebook`)
    .setTimestamp()
    .setFooter(config.botname)
message.channel.send(embedeletro)
}

// -------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------

if (message.content.startsWith(p + "shop comprar notebook")) {
    let argumentos = args.slice(1).join(' ')
    let targetMember = message.mentions.members.first(),
        amount = 1000;
  
   
 
       let selfBalance = await db.fetch(`userBalance_${message.author.id}`);
       let Notebook = await db.fetch(`userItemNote_${message.author.id}`);
  
  
      if(amount > selfBalance) return message.reply("desculpe, mas você não tem dinheiro o suficiente para comprar este produto.")
  
      db.subtract(`userBalance_${message.author.id}`, amount)

      let amountnote = 1;
      db.add(`userItemNote_${message.author.id}`, amountnote)

  message.channel.send("<a:approvedbox:875763818452619354> | Você comprou **Notebook positivo 2009**! O item já está no seu inventário")

}

// -------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------

if (message.content.startsWith(p + "shop outros")) {
    const embedeletro = new Discord.MessageEmbed()
    .setTitle(config.botname)
    .setColor(config.color)
    .setDescription("Lista de produtos")
    .addField("Experiencia empresarial", `Para comprar, use o comando: ${p}shop comprar expemp`)
    .setTimestamp()
    .setFooter(config.botname)
message.channel.send(embedeletro)
}

// -------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------

if (message.content.startsWith(p + "shop comprar expemp")) {
    let argumentos = args.slice(1).join(' ')
    let targetMember = message.mentions.members.first(),
        amount = 100000;
 
       let selfBalance = await db.fetch(`userBalance_${message.author.id}`);
       let Notebook = await db.fetch(`userItemEXP_${message.author.id}`);
  
  
      if(amount > selfBalance) return message.reply("desculpe, mas você não tem dinheiro o suficiente para comprar este produto.")
  
      db.subtract(`userBalance_${message.author.id}`, amount)

      let amountnote = 1;
      db.add(`userItemEXP_${message.author.id}`, amountnote)

  message.channel.send("<a:approvedbox:875763818452619354> | Você comprou **Experiencia empresarial**! O item já está no seu inventário")

}

// -------------------------------------------------------------------------------------------

}