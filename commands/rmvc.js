const db = require('quick.db');
const config = require("../config.json")


exports.run = async (client, message, args, tools) => {

  if(message.author.id !== config.owner) return message.channel.send("<a:denybox:875763818955956226> |  Apenas meu dev pode usar esse comando!")

  if(!message.mentions.members.first()) return message.reply("por favor, mencione algum usuário.");

  let argumentos = args.slice(1).join(' ')
  let targetMember = message.mentions.members.first(),
      amount = parseInt(argumentos.replace(targetMember, ''));

  if(isNaN(amount)) return message.reply("por favor, defina o quanto quer retirar.")

  let targetBalance = await db.fetch(`userBalance_${targetMember.id}`),
      selfBalance = await db.fetch(`userBalance_${message.author.id}`);


    if(targetBalance === null) targetBalance = 0;
    if(selfBalance === null) selfBalance = 0;

    if(amount > targetBalance) return message.reply("o usuario não tem toda essa quantia para ser retirada.")

    db.subtract(`userBalance_${targetMember.id}`, amount)

    message.channel.send(`<a:approvedbox:875763818452619354> | Você retirou com sucesso ${amount} reais para ${targetMember}!`)

}