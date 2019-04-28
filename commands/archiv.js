module.exports.run = async (bot, message, args) => {
const Discord = require("discord.js");
var bot = new Discord.Client();
const fs = require('fs');
const moment = require('moment');

const PREFIX = "fc!";

var args = message.content.substring(PREFIX.length).split(" ");

//if(message.guild.id !== "287633218230943744") {message.channel.send("**Pozor!** Tento příkaz je k dispozici pouze na serveru Friggo&Yomo!"); return;}

if(message.guild.id !== "287633218230943744") {
//PUBLIC ARCHIV
  var archiv = new Discord.RichEmbed()
      .setTitle(":name_badge: | Chyba při zadávání příkazu!")
      .setDescription("Nebyl nalezen žádný obrázek!")
      .setColor(0xf04747)
      .setThumbnail("https://media.tenor.com/images/71656fc182ad63d50fbcd7c5496aa09d/tenor.gif")
      .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140716281692160/Fryon2.png")
    message.channel.send(archiv);
    console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + " na serveru: " + message.guild.name)
return;

//F&Y Archiv
} else {
  if(!args[1]) {
    var archivimgs = [
      "https://cdn.discordapp.com/attachments/362880786027905025/473553998578712617/unknown.png", //1
      //"https://cdn.discordapp.com/attachments/423507064057495552/473200180909441035/unknown.png",
      "https://cdn.discordapp.com/attachments/362880786027905025/473767166047420416/unknown.png", //2
      "https://cdn.discordapp.com/attachments/362880786027905025/473776315082735626/unknown.png", //3
      "https://cdn.discordapp.com/attachments/362880786027905025/473776342899359754/unknown.png", //4
      "https://cdn.discordapp.com/attachments/362880786027905025/473776383336775681/unknown.png", //5
      "https://cdn.discordapp.com/attachments/362880786027905025/475589600283328512/unknown.png", //6
      "https://cdn.discordapp.com/attachments/362880786027905025/475597287893237760/unknown.png", //7
      "https://cdn.discordapp.com/attachments/362880786027905025/475597317114691605/unknown.png", //8
      "https://cdn.discordapp.com/attachments/362880786027905025/491632917647196160/unknown.png", //9//new
      "https://cdn.discordapp.com/attachments/362880786027905025/497083603898073109/unknown.png", //10//new
    ];

  var archiv = new Discord.RichEmbed()
      .setTitle("Něco z našeho archivu")
      .setImage(archivimgs[Math.floor(Math.random() * archivimgs.length)])
      .setColor(0x23D160)
      .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")
    message.channel.send(archiv);
    console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + " na serveru: " + message.guild.name)
    return;
  }

  if(args[1] === "1") {
  var embed = new Discord.RichEmbed()
    .setTitle("Něco z našeho archivu")
    .setImage("https://cdn.discordapp.com/attachments/362880786027905025/473553998578712617/unknown.png")
    .setColor(0x23D160)
    .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")
  message.channel.send(embed);
  console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + " na serveru: " + message.guild.name)
  return;
  }

  if(args[1] === "2") {
  var embed = new Discord.RichEmbed()
    .setTitle("Něco z našeho archivu")
    .setImage("https://cdn.discordapp.com/attachments/362880786027905025/473767166047420416/unknown.png")
    .setColor(0x23D160)
    .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")
  message.channel.send(embed);
  console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + " na serveru: " + message.guild.name)
  return;
  }

  if(args[1] === "3") {
  var embed = new Discord.RichEmbed()
    .setTitle("Něco z našeho archivu")
    .setImage("https://cdn.discordapp.com/attachments/362880786027905025/473776315082735626/unknown.png")
    .setColor(0x23D160)
    .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")
  message.channel.send(embed);
  console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + "3 na serveru: " + message.guild.name)
  return;
  }

  if(args[1] === "4") {
  var embed = new Discord.RichEmbed()
    .setTitle("Něco z našeho archivu")
    .setImage("https://cdn.discordapp.com/attachments/362880786027905025/473776342899359754/unknown.png")
    .setColor(0x23D160)
    .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")
  message.channel.send(embed);
  console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + " na serveru: " + message.guild.name)
  return;
  }

  if(args[1] === "5") {
  var embed = new Discord.RichEmbed()
    .setTitle("Něco z našeho archivu")
    .setImage("https://cdn.discordapp.com/attachments/362880786027905025/473776383336775681/unknown.png")
    .setColor(0x23D160)
    .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")
  message.channel.send(embed);
  console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + " na serveru: " + message.guild.name)
  return;
  }

  if(args[1] === "6") {
  var embed = new Discord.RichEmbed()
    .setTitle("Něco z našeho archivu")
    .setImage("https://cdn.discordapp.com/attachments/362880786027905025/475589600283328512/unknown.png")
    .setColor(0x23D160)
    .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")
  message.channel.send(embed);
  console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + " na serveru: " + message.guild.name)
  return;
  }

  if(args[1] === "7") {
  var embed = new Discord.RichEmbed()
    .setTitle("Něco z našeho archivu")
    .setImage("https://cdn.discordapp.com/attachments/362880786027905025/475597287893237760/unknown.png")
    .setColor(0x23D160)
    .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")
  message.channel.send(embed);
  console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + " na serveru: " + message.guild.name)
  return;
  }

  if(args[1] === "8") {
  var embed = new Discord.RichEmbed()
    .setTitle("Něco z našeho archivu")
    .setImage("https://cdn.discordapp.com/attachments/362880786027905025/475597317114691605/unknown.png")
    .setColor(0x23D160)
    .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")
  message.channel.send(embed);
  console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + " na serveru: " + message.guild.name)
  return;
  }
}

}
module.exports.config = {
  command: "archiv",
  aliases: []
};
