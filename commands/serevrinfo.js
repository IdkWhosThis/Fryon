module.exports.run = async (bot, message, args) => {
const Discord = require("discord.js");
var bot = new Discord.Client();
const fs = require('fs');
const moment = require('moment');

const PREFIX = "f!";

var args = message.content.substring(PREFIX.length).split(" ");
let uicon = message.author.avatarURL;
let user1 = message.mentions.users.first() || message.author;
let member = message.mentions.users.first() || bot.users.get(args[0]);

if(!member) member = message.author;

let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
let day = message.guild.createdAt.getDate()
let month = 1 + message.guild.createdAt.getMonth()
let year = message.guild.createdAt.getFullYear()
 let sicon = message.guild.iconURL;

 let textChannels = message.guild.channels.filter(c => c.type === 'text').size;
 let voiceChannels = message.guild.channels.filter(c => c.type === 'voice').size

const serverembed = new Discord.RichEmbed()
 .setAuthor(message.guild.name, sicon)
 .setFooter(`Server Vytvořen • ${day}.${month}.${year}`)
 .setColor(0x2196f3)
 .setThumbnail(sicon)
 .addField("• ID", message.guild.id, true)
 .addField("• Název", message.guild.name, true)
 .addField("• Majitel", message.guild.owner.user.tag, true)
 .addField("• Region", message.guild.region, true)
 .addField("• Počet kanálů", message.guild.channels.size, true)
 .addField('• Textové kanály', textChannels, true)
 .addField('• Hlasové kanály', voiceChannels, true)
 .addField("• Uživatelé", message.guild.memberCount, true)
 .addField("• Lidé", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
 .addField("• Boti", message.guild.members.filter(m => m.user.bot).size, true)
 .addField("• Online", online.size, true)
 .addField("• Role", message.guild.roles.size, true)
 .addField('• Úroveň ověření', veriToText(message.guild.verificationLevel), true)
 message.channel.send(serverembed);

function veriToText(lvl) {
 switch (lvl) {
     case 0:
         return "Žádná";
     case 1:
         return "Ověřený email";
     case 2:
         return "Ověřený email & Registrován na Discordu 5 minut nebo více";
     case 3:
         return "Ověřený email & Registrován na Discordu 10 minut nebo více";
     case 4:
         return "Ověřený telefon";
     default:
         return "Ultra???"
 }
}

console.log("Fryon | "+ message.author.username + " provedl příkaz f!serverinfo na serveru: " + message.guild.name)

}
module.exports.config = {
  command: "serverinfo",
};
