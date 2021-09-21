const Discord = require("discord.js");
const db = require("quick.db")
const config = require("../config.json")

exports.run = async (client, message, args, tools) => {
  let user = message.mentions.users.first() || message.author;

// Definições dos itens
  let Notebook = await db.fetch(`userItemNote_${user.id}`);
 // let Comida = await db.fetch(`userItemFood_${user.id}`);
  let Arma = await db.fetch(`userItemGun_${user.id}`);
  let Experiencia = await db.fetch(`userItemEXP_${user.id}`);

  if(Notebook === null) Notebook = 0;
  //if(Comida === null) Comida = 0;
  if(Arma === null) Arma = 0;
  if(Experiencia === null) Experiencia = 0;

  const embed = new Discord.MessageEmbed()
  .setTitle(`${config.botname} - Inventario`)
  .addField("<:macbook:884586775920652339> Notebooks", `${Notebook}`)
  //.addField("Comidas", `${Comida}`)
  .addField("<:pepegun:875761753735188570> Armas", `${Arma}`)
  .addField("⭐ Experiencia", `${Experiencia}`)
  .addField("Gostaria de comprar alguns desses itens acima?", `use ${config.prefix}shop list`)
  .setColor("RED")
 // .setThumbnail("https://th.bing.com/th/id/OIP.UG1mehbZvgY1L1GJs9LdyAHaGs?pid=ImgDet&rs=1")
  .setTimestamp()
  .setFooter(config.botname)

  //message.channel.send(`${user} - Reais: $${Balance}`)
  message.channel.send(embed)
}