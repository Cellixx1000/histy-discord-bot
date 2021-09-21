const Discord = require("discord.js");

var ship = 
["0% :neutral_face: Eu queria muito falar que é possível, mas... :cry:",
"5% :neutral_face: Eu queria muito falar que é possível, mas... :cry:",
"10% :neutral_face: Eu queria muito falar que é possível, mas... :cry:",
"19% :blush: Vocês devem ter uma boa amizade :blush:",
"20% :blush: Vocês devem ter uma boa amizade :blush:",
"25% :blush: Que amizade linda a de vocês :blush:",
"28% :blush: Que amizade linda a de vocês :blush:",
"30% :neutral_face: Se não tivesse deixado na friendzone... :neutral_face:",
"34% :neutral_face: Se não tivesse deixado na friendzone... :neutral_face:",
"37% :neutral_face: Se não tivesse deixado na friendzone... :neutral_face:",
"39% :smiling_face_with_3_hearts: Vocês precisam se conhecerem melhor :relaxed:",
"40% :smiling_face_with_3_hearts: Vocês precisam se conhecerem melhor :relaxed:",
"46% :smiling_face_with_3_hearts: Vocês precisam se conhecerem melhor :relaxed:",
"50% :blush: Talvez... Só precisam querer! :no_mouth:",
"52% :blush: Talvez... Só precisam querer! :no_mouth:",
"55% :blush: Talvez... Só precisam querer! :no_mouth:",
"59% :blush: Talvez... Só precisam querer! :no_mouth:",
"60% :blush: Talvez... Só precisam querer! :no_mouth:",
"63% :blush: Talvez... Só precisam querer! :no_mouth:",
"68% :blush: Talvez... Só precisam querer! :no_mouth:",
"70% :blush: Claro que os dois são um lindo casal! :blush:",
"73% :blush: Claro que os dois são um lindo casal! :blush:",
"75% :blush: Claro que os dois são um lindo casal! :blush:",
"79% :blush: Claro que os dois são um lindo casal! :blush:",
"80% :blush: Claro que os dois são um lindo casal! :blush:",
"84% :blush: Claro que os dois são um lindo casal! :blush:",
"87% :blush: Claro que os dois são um lindo casal! :blush:",
"90% :smiling_face_with_3_hearts: Que fofos:blush:",
"94% :smiling_face_with_3_hearts: Que fofos :blush:",
"98% :smiling_face_with_3_hearts: Que fofos :blush:",
"99% :smiling_face_with_3_hearts: Que fofos :blush:",
"100% :revolving_hearts: Nasceram para ficarem juntos :blush:",
"91% :smiling_face_with_3_hearts: Que fofos :blush:",
"100% :heart_eyes: Perfeitos :revolving_hearts: ",
"81% :blush: Claro que os dois são um lindo casal! :blush:"]
exports.run = (client,message,args)=>{
    const a = message.mentions.users.first()
    const b = args[1].replace(message.mentions.users.first())
    message.delete(30000)
    if(!a) return message.reply(":x: | Você não mencionou o primeiro membro")
    if(!b) return message.reply(":x: | Você não mencionou o segundo membro")
    var embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setTimestamp()
    .setTitle(`:sparkling_heart: Ship`)
    .addField("**:sparkling_heart: Hmmm, será que nós temos um novo casal aqui? :sparkling_heart:**", `${a} e ${b}`)
    .addField(ship[Math.round(Math.random()*ship.length-1)],"Sera que da rolo??")
    
    message.channel.send({embed: embed});
}