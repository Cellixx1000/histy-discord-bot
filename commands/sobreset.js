const db = require("quick.db");


exports.run = async (client, message, args, tools) => {


  let argumentos = args.slice(0).join(' ')

  if(!argumentos) return message.reply("por favor, defina o seu novo sobre mim!")


    let  selfBalance = await db.fetch(`userSobre_${message.author.id}`);


    if(selfBalance === null) selfBalance = "Use h.sobreset";



    db.set(`userSobre_${message.author.id}`, argumentos)

    message.channel.send(`<a:approvedbox:875763818452619354> | Você definiu com sucesso o seu novo sobre mim! Seu novo sobre mim é: ${argumentos}`)

        
}