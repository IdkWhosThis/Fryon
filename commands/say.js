module.exports.run = async (bot, message, args) => {
const Discord = require("discord.js");
var bot = new Discord.Client();

const PREFIX = "f!";

var args = message.content.substring(PREFIX.length).split(" ");
let uicon = message.author.avatarURL;
let text = args.slice(1).join(" ");
let staffrole = message.guild.roles.find("name", "► Staff | 🗲")

let member = message.author;

var say = new Discord.RichEmbed()
.setTitle("**Oznámení**")
.setDescription(`${text}`)
.setColor(0x23d160)
.setTimestamp()
.setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")

var roleerror = new Discord.RichEmbed()
  .setTitle(":name_badge: I Chyba při zadávání příkazu!")
  //.setDescription("Nemáš roli `► Staff | 🗲` nebo nejsi developer ")
  //.setDescription("Nemáš oprávnění používat příkaz say nebo nejsi developer!")
  .setDescription("Tento příkaz je pouze pro developery!")
  .setColor(0xf04747)
  .setThumbnail("https://media.tenor.com/images/71656fc182ad63d50fbcd7c5496aa09d/tenor.gif")
  .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140716281692160/Fryon2.png")


if(member.id  == "220972092135309312" || member.id  == "297395255467048960") {
    message.delete();
    message.channel.send(say);
    console.log("Fryon | " + message.author.username + " provedl příkaz f!say na serveru " + message.guild.name)
  } else {
  message.channel.send(roleerror);
  console.log("Fryon | "+ message.author.username + " provedl příkaz f!say, ale nemá na to oprávnění! Server: " + message.guild.name)
}

//s

}
module.exports.config = {
  command: "say",
  aliases: []
};
