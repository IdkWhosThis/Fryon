module.exports.run = async (bot, message, args) => {
const Discord = require("discord.js");
const fs = require('fs');

const PREFIX = "f!";

var args = message.content.substring(PREFIX.length).split(" ");
let uicon = message.author.avatarURL;

if (!message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) {
            console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + ", ale nemám práva na MENAGE_MESSAGES. Server: " + message.guild.name); 
            message.channel.send(':no_entry Potřebuji práva `MANAGE_MESSAGES`. :no_entry:').catch(console.error);
            return;
            }
            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + ", ale nemá práva na MANAGE_MESSAGES. Server: " + message.guild.name); 
            message.channel.send(":no_entry: Omlouvám se, nemáš práva `MANAGE_MESSAGES` pro tento příkaz :no_entry:");
            return;
            }
            if (isNaN(args[1])) {
            console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + ", ale neuvedl počet zpráv, co mám smazat. Server: " + message.guild.name); 
            message.channel.send(':warning: Musíš uvést počet zpráv, co mám smazat :warning:');
            return;
            }
            if (args[1] > 100) {
            console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + " na serveru: " + message.guild.name); 
            message.channel.send(':warning: Nelze smazat více jak 100 zpráv :warning:');
            return;
            }
            message.channel.bulkDelete(args[1]);
            var cleanEmbed = new Discord.RichEmbed()
            .setAuthor('Zprávy byly úspěšně smazány')
            .setDescription(`Smazáno **${args[1]}** zpráv!`)
            .setFooter('Smazáno uživatelem ' + message.author.tag, message.author.avatarURL)
            console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + " na serveru: " + message.guild.name)
            .setColor(0x23d160)
            message.channel.send(cleanEmbed);

}
module.exports.config = {
  command: "clear",
};
