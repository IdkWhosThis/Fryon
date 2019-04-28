module.exports.run = async (bot, message, args) => {
const Discord = require("discord.js");
const fs = require('fs');
const moment = require('moment');
const { version } = require("discord.js");
const os = require('os');
let cpuStat = require("cpu-stat")
const m = require("moment-duration-format");

const PREFIX = "f!";

var args = message.content.substring(PREFIX.length).split(" ");
let uicon = message.author.avatarURL;
let user1 = message.mentions.users.first() || message.author;


const duration = moment.duration(bot.uptime).format(" D [d], H [h], m [m], s [s]");

var uptime2 = new Discord.RichEmbed()
    .setTitle("• Uptime")
    .setDescription(`Aktuálně jsem vzhůru již ${duration}.`)
    .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")
    .setColor(0x2196f3)
    .setTimestamp()
message.channel.send(uptime2);
console.log("Fryon | "+ message.author.username + " provedl příkaz f!uptime na serveru: " + message.guild.name)

}
module.exports.config = {
  command: "uptime",
};
