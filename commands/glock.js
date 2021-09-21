const Discord = require("discord.js")
const db = require("quick.db");
const config = require("../config.json")



exports.run = async (client, message, args, tools) => {

// Definições
let p = config.prefix

// -------------------------------------------------------------------------------------------

 
    let argumentos = args.slice(1).join(' ')
    let targetMember = message.mentions.members.first(),
        amount = 7;
  
   
 
       let selfBalance = await db.fetch(`userSaldoETH_${message.author.id}`);
       let Notebook = await db.fetch(`userItemNote_${message.author.id}`);
  
  
      if(amount > selfBalance) return message.reply("desculpe, mas você não tem dinheiro o suficiente para comprar este item.")
  
      db.subtract(`userSaldoETH_${message.author.id}`, amount)

      let amountnote = 1;
      db.add(`userItemGun_${message.author.id}`, amountnote)

  message.channel.send("<a:approvedbox:875763818452619354> | Você comprou **Glock 9mm**! O item já está no seu inventário")

}