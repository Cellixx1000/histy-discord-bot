const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const fs = require("fs");

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        const event = require(`./events/${f}`);
        let eventName = f.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.on("message", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
  
    let args = message.content.split(" ").slice(1);
    // The list of if/else is replaced with those simple 2 lines:
  
    try {
      let commandsFile = require(`./commands/${command}.js`);
      commandsFile.run(client, message, args);
  
    } catch (err) {
     if(err) console.log(err)
    }
});



client.on("guildCreate", guild => {
    const moment = require("moment");
    let canal = client.channels.cache.get("885348555710136401");
    let icon = guild.iconURL() || "https://loritta.website/assets/img/unknown.png";
    let embedentrada = new Discord.MessageEmbed()
      .setAuthor(`${client.user.username}`, client.user.avatarURL())
      .setThumbnail(icon)
      .setTitle(`**Entrei em um servidor novo** \`${guild.name}\``, true)
      .addField(`**Nome do servidor**`, `\`${guild.name}\``, true)
      .addField(`**Id do servidor**`, `\`${guild.id}\``, true)
      .addField("**Membros:**", `\`${guild.memberCount}\``, true)
      .addField("**Região do servidor:**", `\`${guild.region}\``, true)
      .addField("**Dono**", `${guild.owner}`, true)
      .addField("**Id do dono**", `\`${guild.ownerID}\``, true)
      .addField(
        "**Criado em**",
        `\`${moment.utc(guild.createdAt).format("lll")}\``,
        true
      )
      .setColor("RED");
  
    canal.send(embedentrada);
  });
  
  
  
  
  client.on("guildDelete", guild => {
    const moment = require("moment");
    let canal = client.channels.cache.get("885348577193386035");
    let icon = guild.iconURL() || "https://loritta.website/assets/img/unknown.png";
    let embedsaida = new Discord.MessageEmbed()
      .setAuthor(`${client.user.username}`, client.user.avatarURL())
      .setThumbnail(icon)
      .setTitle(`**Acabei de sair de um servidor:** \`${guild.name}\``, true)
      .addField(`**Nome do servidor**`, `\`${guild.name}\``, true)
      .addField(`**Id do servidor**`, `\`${guild.id}\``, true)
      .addField("**Membros:**", `\`${guild.memberCount}\``, true)
      .addField("**Região do servidor:**", `\`${guild.region}\``, true)
      .addField("**Dono**", `${guild.owner}`, true)
      .addField("**Id do dono**", `\`${guild.ownerID}\``, true)
      .setColor("PURPLE");
  
    canal.send(embedsaida);
  });

client.login(config.token);
