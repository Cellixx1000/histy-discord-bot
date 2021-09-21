const discord = require('discord.js');

module.exports.run = async(client, message, args) => {
 
  
  let user;
if (message.mentions.users.first()) {
  user = message.mentions.users.first()|| client.users.cache.get(args[0]);
} else {
    user = message.author;
}
  
   let usuario = message.mentions.users.first() || message.author;
  let imagem = usuario.displayAvatarURL();
  
  let emavt = new discord.MessageEmbed() 
  .setTitle(`${usuario.username}#${usuario.discriminator}`)
  .setImage(imagem)
  .setColor("PURPLE") 
  

    message.reply(emavt)
}
module.exports.help = {
 name: "avatar"
}