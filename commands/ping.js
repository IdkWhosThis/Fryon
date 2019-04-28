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

let msgping1 = new Date();
let botping = new Date() - message.createdAt;
let msgping2 = new Date() - msgping1;

var pingembed = new Discord.RichEmbed()
  .setColor(0x2196f3)
  .addField('•  API Ping : ', Math.floor(bot.ping) + 'ms')
  .addField('•  Bot Ping : ', Math.floor(botping) + 'ms')
  .addField('•  Message Ping : ', '~' + Math.round(msgping2) + 'ms')
  .setTimestamp(new Date())
  .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")

message.channel.send(pingembed);

console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + " na serveru: " + message.guild.name)

}
module.exports.config = {
  command: "ping",
};
