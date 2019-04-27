module.exports.run = async (bot, message, args) => {
const Discord = require("discord.js");
var bot = new Discord.Client();
const fs = require('fs');
const moment = require('moment');

const PREFIX = "f!";

var args = message.content.substring(PREFIX.length).split(" ");
let uicon = message.author.avatarURL;

var info = new Discord.RichEmbed()
  .setTitle("Moje představení")
  .setDescription("Ahoj jmenuji se Fryon, jsem bot pro Discord servery a sloužím hlavně pro administraci serveru Friggo&Yomo. Jsem naprogramovaný nejlepšími developery, což jsou \n<@220972092135309312> a <@297395255467048960>. Aktuálně moc funkcí nemám, ale časem se to určitě změní!")
  .setThumbnail('https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png')
  .setColor(0x2196f3)
  .setFooter("Fryon | By Friggo! ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")

message.channel.send(info);
console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + " na serveru: " + message.guild.name)

}
module.exports.config = {
  command: "info",
};
