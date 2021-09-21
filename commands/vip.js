const db = require("quick.db");


exports.run = async (client, message, args, tools) => {

  if(message.author.id !== "717147676260433941") return message.channel.send("<a:denybox:875763818955956226> |  Apenas meu dev pode usar esse comando!")

  if(!message.mentions.members.first()) return message.reply("por favor, mencione algum usuário.");

  let argumentos = args.slice(1).join(' ')
  let targetMember = message.mentions.members.first()

   //Premium
  let Premium = await db.fetch(`userPremium_${targetMember.id}`)

    if(Premium === null) Premium = 0;

    db.set(`userPremium_${targetMember.id}`, 1)
    
   //SALDO R$
   db.set(`userBalance_${targetMember.id}`, 50000)

   //SALDO BTC
   db.set(`userSaldoBTC_${targetMember.id}`, 15)

   //SALDO ETH
   db.set(`userSaldoETH_${targetMember.id}`, 17)

   //SALDO DOGE
   db.set(`userSaldoDOGE_${targetMember.id}`, 20)

   //BACKGROUND
   db.set(`userBackground_${targetMember.id}`, 1000)

   //SOBRE MIM
   db.set(`userSobre_${targetMember.id}`, "Made In Mato")



    message.channel.send(`<a:approvedbox:875763818452619354> | Você adicionou ${targetMember} ao plano VIP com sucesso!`)

        
}