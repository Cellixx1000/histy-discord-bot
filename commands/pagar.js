const db = require("quick.db");


exports.run = async (client, message, args, tools) => {

 
  if(!message.mentions.members.first()) return message.reply("por favor, mencione algum usuário.");

  let argumentos = args.slice(1).join(' ')
  let targetMember = message.mentions.members.first(),
      amount = parseInt(argumentos.replace(targetMember, ''));

  if(isNaN(amount)) return message.reply("por favor, defina o quanto quer pagar.")

  let targetBalance = await db.fetch(`userBalance_${targetMember.id}`),
      selfBalance = await db.fetch(`userBalance_${message.author.id}`);


    if(targetBalance === null) targetBalance = 0;
    if(selfBalance === null) selfBalance = 0;


    if(amount > selfBalance) return message.reply("desculpe, mas você não tem dinheiro o suficiente para pagar a este usuário.")

    db.add(`userBalance_${targetMember.id}`, amount)
    db.subtract(`userBalance_${message.author.id}`, amount)

    message.channel.send(`<a:approvedbox:875763818452619354> | Você enviou com sucesso ${amount} reais para ${targetMember}!`)

        
}