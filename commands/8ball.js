module.exports.run = async (bot, message, args) => {
const Discord = require("discord.js");
var bot = new Discord.Client();

const PREFIX = "f!";

var args = message.content.substring(PREFIX.length).split(" ");
let uicon = message.author.avatarURL;
let text = args.slice(1).join(" ");

var odpoved = [
    "Ano",
    "Proč se na to ptáš? ne!",
    "Pravděpodobně ne",
    "Ne",
    "Určitě ne",
    "Je to jisté",
    "Je to rozhodně tak",
    "Bezpochyby",
    "Můžeš se na to spolehnout",
    "Ano, určitě",
    "Jak to vidím, ano",
    "Pravděpodobně",
    "Značky ukazují na ano!",
    "Zeptej se později",
    "Lepší to bude když ti to neřeknu",
    "Nyní nelze předpovědět",
    "Soustřeď se a zeptejte se znovu",
    "Moje odpověď je ne",
    "Moje zdroje říkají ne",
    "Moje zdroje říkají ano",
];

  let otazka = args.slice(1).join(" ");
  if (args[1]) {
  var ball = new Discord.RichEmbed()
      .setTitle(":8ball: 8ball")
      .addField("Ty se ptáš:", `${otazka}`)
      .addField("Já odpovídám:", odpoved[Math.floor(Math.random() * odpoved.length)])
      .setColor(0x2196f3)
      .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")
  message.channel.send(ball);
  console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + " na serveru: " + message.guild.name)
  return;
}

  if (args[0]) {
  var bezotazky = new Discord.RichEmbed()
      .setTitle(":name_badge: | Chyba při zadávání příkazu!")
      .setDescription("Zapoměl jsi napsat otázku!")
      .setColor(0xf04747)
      .setThumbnail("https://media.tenor.com/images/71656fc182ad63d50fbcd7c5496aa09d/tenor.gif")
      .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140716281692160/Fryon2.png")
  message.channel.send(bezotazky);
  console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + ", ale zapoměl na otázku! Server: " + message.guild.name)
}

}
module.exports.config = {
  command: "8ball",
};
