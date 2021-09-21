const Discord = require('discord.js');
const db = require('quick.db');
const config = require("../config.json")

exports.run = async (bot, message, args, tools) => {

    const leaderboard = db.all()
    .filter(data => data.ID.startsWith('userBalance'))
    .sort((a, b) => b.data - a.data)
    .slice(0, 10);
let lb = '';
for (let i = 0; i < leaderboard.length; i++) {
    const user = bot.users.cache.get(leaderboard[i].ID.split('_')[1]) ? bot.users.cache.get(leaderboard[i].ID.split('_')[1]).tag : 'Unknown User';
    lb += `**${i + 1})** ${user} **-** R$${leaderboard[i].data.toLocaleString()}\n`;
}
const embed = new Discord.MessageEmbed()
    .setColor('BLURPLE')
    .setAuthor(`Os mais ricos da ${config.botname}`)
    .setDescription(`${lb}`)
    .setTimestamp();
return message.channel.send(embed);
}