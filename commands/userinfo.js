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

  var profil = new Discord.RichEmbed()
      .setAuthor(`${member.username}#${member.discriminator}`, member.displayAvatarURL)
      .setDescription("Informace o developerovi")
      .setColor(0xf04747)
      .addField("• ID", member.id, false)
      .addField("• Zaregistrován", `${moment.utc(member.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, false)
      .addField("• Připojen na server", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
      .addField("• Bot", `${member.bot ? member.member : 'Developer přece není bot, nebo snad jo?!'}`, false)
      .addField("• Status", `${member.presence.status}`, false)
      .addField("• Hra", `${member.presence.game ? member.presence.game.name : 'Developer nic nehraje, ale může programovat!'}`, true)
      //.addField("Role", member.roles.map(roles => `${roles.name}`).join(', '), true)
      .setThumbnail(member.displayAvatarURL)
      .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")


if(message.mentions.users.first  == "220972092135309312" || member.id  == "297395255467048960" || member.id  == "297395255467048960") {
  var devprofil = new Discord.RichEmbed()
      .setAuthor(`${member.username}#${member.discriminator}`, member.displayAvatarURL)
      .setDescription("Informace o developerovi")
      .setColor(0xf04747)
      .addField("• ID", member.id, false)
      .addField("• Zaregistrován", `${moment.utc(member.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, false)
      .addField("• Připojen na server", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
      .addField("• Bot", `${member.bot ? member.member : 'Developer přece není bot, nebo snad jo?!'}`, false)
      .addField("• Status", `${member.presence.status}`, false)
      .addField("• Hra", `${member.presence.game ? member.presence.game.name : 'Developer nic nehraje, ale může programovat!'}`, true)
      //.addField("Role", member.roles.map(roles => `${roles.name}`).join(', '), true)
      .setThumbnail(member.displayAvatarURL)
      .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")
    message.channel.send(devprofil);
    console.log("Fryon | "+ message.author.username + " provedl příkaz f!userinfo na serveru: " + message.guild.name)
} else {
  message.channel.send(profil);
  console.log("Fryon | "+ message.author.username + " provedl příkaz f!userinfo na serveru: " + message.guild.name)
};

}
module.exports.config = {
  command: "userinfo",

};
