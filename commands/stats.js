module.exports.run = async (bot, message, args) => {
const Discord = require("discord.js");
const config = require('../config.json');
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
//let member = message.mentions.users.first() || bot.users.get(args[0]);
let member = message.author;

//const game = bot.user.presence.game || {};

let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
          return console.log(err);
      }
      const duration = moment.duration(bot.uptime).format(" D [d], H [h], m [m], s [s]");

      const embedStats = new Discord.RichEmbed()
          .setTitle("Statistiky bota")
          .setColor(0x2196f3)
          .setThumbnail('https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png')
          .addField("• Uptime ", `${duration}`, true)
          .addField("• Uživatelů", `${bot.users.size.toLocaleString()}`, true)
          .addField("• Kanálů ", `${bot.channels.size.toLocaleString()}`, true)
          .addField("• Serverů", `${bot.guilds.size.toLocaleString()}`, true)
          .addField("• Discord.js", `v${version}`, true)
          .addField("• Node.js", `${process.version}`, true)
          .addField("• Verze bota", `${config.botversion}`, true)
          .addField("• Platforma", `\`\`${os.platform()}\`\``, true)
          .addField("• CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
          .addField("• Využití CPU", `\`${percent.toFixed(2)}%\``, true)
          //.addField("• Arch", `\`${os.arch()}\``, true)
          .addField("• Ping", `${Math.round(bot.ping)}ms`, true)
          .addField("• Využití paměti", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
      message.channel.send(embedStats)
      console.log("Fryon | "+ message.author.username + " provedl příkaz f!stats na serveru: " + message.guild.name)
});

}
module.exports.config = {
  command: "stats",
};
