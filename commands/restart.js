module.exports.run = async (bot, message, args) => {
const Discord = require("discord.js");
const fs = require('fs');
const moment = require('moment');

const PREFIX = "f!";

var args = message.content.substring(PREFIX.length).split(" ");
let uicon = message.author.avatarURL;

const TOKEN = "Nene..."

var error = new Discord.RichEmbed()
  .setTitle(":name_badge: | Chyba při zadávání příkazu!")
  .setDescription("Na provedení této akce nemáš dostatečná oprávnění")
  .setColor(0xF04747)
  .setFooter("Fryon | Developed by Friggo ", "https://www.friggoayomo.cf/assets/images/Fryon1.png")

var restart = new Discord.RichEmbed()
  .setTitle("Restartuji se.")
  .setDescription("Tato akce potrvá pár sekund!")
  .setColor(0x23d160)
  .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140719880667148/Fryon3.png")

//============== FUNCTION RESET ==============
function resetBot(channel) {
    console.log("Fryon | "+ message.author.username + " restartuje bota. Server: " + message.guild.name)
    channel.send(restart)
    .then(console.log("Fryon | Bot se restartuje!"))
    bot.user.setStatus("invisible")
    .then(msg => bot.destroy())
    .then(console.log("Fryon | Bot byl vypnut!"))
    .then(console.log("Fryon | Bot se zapíná!"))
    .then(() => bot.login(TOKEN));
}

if(message.author.id !=='220972092135309312')

return message.channel.send(error);

resetBot(message.channel);

}
module.exports.config = {
  command: "restart",
  aliases: []
};
