module.exports.run = async (bot, message, args) => {
const Discord = require("discord.js");
var bot = new Discord.Client();
const fs = require('fs');
const moment = require('moment');

const PREFIX = "fc!";

var args = message.content.substring(PREFIX.length).split(" ");
let uicon = message.author.avatarURL;
let user1 = message.mentions.users.first() || message.author;
let member = message.mentions.users.first() || bot.users.get(args[0]);

if(!member) member = message.author;

var avatar = new Discord.RichEmbed()
   .setDescription(`**${user1.username}#${user1.discriminator}**\n[**Odkaz na avatar**](${user1.avatarURL})`)
   .setImage(user1.displayAvatarURL)
   .setColor(0x2196f3)
   .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")
    message.channel.send(avatar);
    console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + " na serveru: " + message.guild.name)

}
module.exports.config = {
  command: "avatar",
  aliases: []
};
