const db = require('quick.db');
const config = require("../config.json")


exports.run = async (client, message, args, tools) => {

  if(message.author.id !== config.owner) return message.channel.send("<a:denybox:875763818955956226> |  Apenas meu dev pode usar esse comando!")

  if(!message.mentions.members.first()) return message.reply("por favor, mencione algum usuário.");

  let argumentos = "Sim"
  let targetMember = message.mentions.members.first()

  let targetBalance = await db.fetch(`userPremium_${targetMember.id}`)

    if(targetBalance === null) targetBalance = 0;

    db.set(`userPremium_${targetMember.id}`, argumentos)

    message.channel.send(`<a:approvedbox:875763818452619354> | Você adicionou ${targetMember} ao plano Premium com sucesso!`)

        
}