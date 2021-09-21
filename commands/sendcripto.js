const Discord = require('discord.js')
const db = require('quick.db');
const config = require("../config.json")


exports.run = async (client, message, args, tools) => {

  if(message.author.id !== config.owner) return message.channel.send("<a:denybox:875763818955956226> |  Apenas meu dev pode usar esse comando!")

// -------------------------------------------------------------------------------------------

    if (message.content.startsWith(config.prefix + "sendcripto btc")) {

  if(!message.mentions.members.first()) return message.reply("por favor, mencione algum usuário.");

  let argumentos = args.slice(2).join(' ')
  let targetMember = message.mentions.users.first() || message.author,
      amount = parseInt(argumentos.replace(targetMember, ''));

  if(isNaN(amount)) return message.reply("por favor, defina o quanto quer adicionar.")

  let targetBalance = await db.fetch(`userSaldoBTC_${targetMember.id}`),
      selfBalance = await db.fetch(`userSaldoBTC_${message.author.id}`);


    if(targetBalance === null) targetBalance = 0;
    if(selfBalance === null) selfBalance = 0;



    db.add(`userSaldoBTC_${targetMember.id}`, amount)

    message.channel.send(`<a:approvedbox:875763818452619354> | Você adicionou com sucesso ${amount} BTC para ${targetMember}!`)

    }

// -------------------------------------------------------------------------------------------

    if (message.content.startsWith(config.prefix + "sendcripto eth")) {

        if(!message.mentions.members.first()) return message.reply("por favor, mencione algum usuário.");

        let argumentos = args.slice(2).join(' ')
        let targetMember = message.mentions.members.first(),
            amount = parseInt(argumentos.replace(targetMember, ''));

        if(isNaN(amount)) return message.reply("por favor, defina o quanto quer adicionar.")

        let targetBalance = await db.fetch(`userSaldoETH_${targetMember.id}`),
            selfBalance = await db.fetch(`userSaldoETH_${message.author.id}`);


          if(targetBalance === null) targetBalance = 0;
          if(selfBalance === null) selfBalance = 0;



          db.add(`userSaldoETH_${targetMember.id}`, amount)

          message.channel.send(`<a:approvedbox:875763818452619354> | Você adicionou com sucesso ${amount} ETH para ${targetMember}!`)

          }

// -------------------------------------------------------------------------------------------

if (message.content.startsWith(config.prefix + "sendcripto doge")) {

    if(!message.mentions.members.first()) return message.reply("por favor, mencione algum usuário.");

    let argumentos = args.slice(2).join(' ')
    let targetMember = message.mentions.members.first(),
        amount = parseInt(argumentos.replace(targetMember, ''));

    if(isNaN(amount)) return message.reply("por favor, defina o quanto quer adicionar.")

    let targetBalance = await db.fetch(`userSaldoDOGE_${targetMember.id}`),
        selfBalance = await db.fetch(`userSaldoDOGE_${message.author.id}`);


      if(targetBalance === null) targetBalance = 0;
      if(selfBalance === null) selfBalance = 0;



      db.add(`userSaldoDOGE_${targetMember.id}`, amount)

      message.channel.send(`<a:approvedbox:875763818452619354> | Você adicionou com sucesso ${amount} DOGE para ${targetMember}!`)

      }

// -------------------------------------------------------------------------------------------

}
