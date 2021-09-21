    const Discord = require('discord.js')
    const db = require("quick.db");
    const config = require("../config.json")

    exports.run = async (client, message, args, tools) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("você não tem permissão para executar este comando.") 

    // -------------------------------------------------------------------------------------------

        if (message.content.startsWith(config.prefix + "canal lock")) {
    
            var lock = message.guild.roles.find("name","@everyone")
            message.channel.overwritePermissions(lock, {
            SEND_MESSAGES: false
            });
            
            message.channel.send(`<a:btCheckBlack:875761753886191619> O canal ${message.channel} foi bloqueado com sucesso.`);
            
        }

    // -------------------------------------------------------------------------------------------

        if (message.content.startsWith(config.prefix + "canal unlock")) {
    
            var unlock = message.guild.roles.find("name","@everyone")
            message.channel.overwritePermissions(unlock, {
            SEND_MESSAGES: true
            });
            message.channel.send(`<a:btCheckBlack:875761753886191619> O canal ${message.channel} foi desbloqueado com sucesso.`)
            
            }

    // -------------------------------------------------------------------------------------------

    }