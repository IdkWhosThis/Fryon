module.exports.run = async (bot, message, args) => {
const Discord = require("discord.js");

const PREFIX = "f!";

var args = message.content.substring(PREFIX.length).split(" ");
let uicon = message.author.avatarURL;
let text = args.slice(1).join(" ");
let staffrole = message.guild.roles.find("name", "► Staff | 🗲")

var error = new Discord.RichEmbed()
  .setTitle(":name_badge: | Chyba při zadávání příkazu!")
  .setDescription("Na provedení této akce nemáš dostatečná oprávnění")
  .setColor(0xF04747)
  .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")

var embed = new Discord.RichEmbed()
.setTitle("Nápověda k příkazu - setstatus :question:")
.setDescription("Nastaví status bota\n\n**Použití:**\nf!setstatus online - Nastaví status na online.\n\nf!setstatus dnd - Nastaví status na nerušit.\n\nf!setstatus idle - Nastaví status na nečinný.\n\nf!setstatus invisible - Nastaví status na neviditelný")
.setColor(0x23D160)
.setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140719880667148/Fryon3.png")

var nastaveno = new Discord.RichEmbed()
.setTitle("<:ano:511116724968488984> | Nastaveno!")
.setDescription("Status byl úspěšně nastaven!")
.setColor(0x23d160)
.setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140719880667148/Fryon3.png")

if(message.author.id !=='220972092135309312') return message.channel.send(error);

if(args[1] == "help") return message.channel.send(embed);

if(args[1] == "online") return bot.user.setStatus("online")
  return message.channel.send(nastaveno);

if(args[1] == "dnd") return bot.user.setStatus("dnd")
  return message.channel.send(nastaveno);

if(args[1] == "invisible") return bot.user.setStatus("invisible")
  return message.channel.send(nastaveno);

if(args[1] == "idle") return bot.user.setStatus("idle")
 return bot.user.setActivity("Nepoužívej mě, právě se vyvijím!");
 return message.channel.send(nastaveno);


}
module.exports.config = {
  command: "setstatus",
};
