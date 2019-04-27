module.exports.run = async (bot, message, args) => {
const Discord = require("discord.js");
var bot = new Discord.Client();
const fs = require('fs');

const PREFIX = "f!";

var args = message.content.substring(PREFIX.length).split(" ");
let uicon = message.author.avatarURL;
let user1 = message.mentions.users.first() || message.author;

//EMBEDS
var help = new Discord.RichEmbed()
  .setAuthor("Fryon - Nápověda", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")
  .setDescription("Můj prefix je: `f!`\nDodatečné informace o příkazu `f!help <příkaz>`\n\n**:clipboard: | Hlavní - 7**\nPříkazy které mohou použít všichni.\n\n\`f!userinfo` -  Zobrazí o tobě informace.\n\`f!avatar` -  Ziskání profilového obrázku uživatele.\n\`f!info\` - Představení Fryona a informace o něm\n\`f!stats` -  Globální statistiky Bota a jeho verze.\n\`f!report @hráč | důvod | odkaz na obrázek` -  Nahlásíš uživatele, který porušili pravidlo/a.\n\`f!ping` - Zjištění rychlosti odezvy.\n\`f!archiv` -  Pošle nějaký obrázek z archivu.\n\`f!serverinfo` - Zjištění základních informacích o serveru.\n\`f!uptime` - Zjištění času, jak dlouho je bot online.\n\`f!role <název role>` - Zjištění informací o roli. - **Příkaz deaktivován**\n\n**:video_game: | Zábava - 2**\nZábavné příkazy které mohou použít všichni.\n\n\`f!8ball` -  Zeptej se zda to je pravda nebo ne!\n\`f!fact` - Fakty na každý den.\n\n**:gear: | Administrace - 2**\nPříkazy které může použít pouze moderátoři.\n\n\`f!say` -  Tímto příkazem lze psát jako bot.\n\`f!clear` - Smaže požadovaný počet zpráv.\n\`f!setstatus` - Nastavení statusu bota.\n\`f!restart` - Restartování bota.\n\`f!ban` - Banování uživatelů na serveru. - **Příkaz deaktivován**\n\`f!end` - Vypnutí bota. - **Příkaz deaktivován**")//smoke,sclear,embed
  .setThumbnail('https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png')
  .setColor(0x2196f3)
  .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")

  var hhelp = new Discord.RichEmbed()
    .setTitle("Nápověda k příkazu - help :question:")
    .setDescription("Základní nápověda pro Fryona.\n\n**Použití:**\nf!help - Odešle seznam příkazů\nf!help [příkaz] - Zobrazí informace o příkazu a jeho použití.")
    .setColor(0x23D160)
    .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140719880667148/Fryon3.png")

  var huserinfo = new Discord.RichEmbed()
    .setTitle("Nápověda k příkazu - userinfo :question:")
    .setDescription("Zobrazí o tobě informace, jako je jméno,id a datum vytvoření tvého účtu.\n\n**Použití:**\nf!userinfo - Zobrazí o tobě informace.")
    .setColor(0x23D160)
    .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140719880667148/Fryon3.png")

  var hinfo = new Discord.RichEmbed()
    .setTitle("Nápověda k příkazu - info :question:")
    .setDescription("Představení Fryona a informace o něm\n\n**Použití:**\nf!info - Zobrazí základní informace.")
    .setColor(0x23D160)
    .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140719880667148/Fryon3.png")

  var havatar = new Discord.RichEmbed()
    .setTitle("Nápověda k příkazu - avatar :question:")
    .setDescription("Ziskání profilového obrázku uživatele.\n\n**Použití:**\nf!avatar - Vygeneruje tvého avatara\nf!avatar @nick - Vygeneruje avatara požadovaného uživatele.")
    .setColor(0x23D160)
    .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140719880667148/Fryon3.png")

  var hstats = new Discord.RichEmbed()
    .setTitle("Nápověda k příkazu - stats :question:")
    .setDescription("Globální statistiky Bota a jeho verze.\n\n**Použití:**\nf!stats - Zobrazení všech statistik o Fryonovi.")
    .setColor(0x23D160)
    .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140719880667148/Fryon3.png")

  var hreport = new Discord.RichEmbed()
    .setTitle("Nápověda k příkazu - report :question:")
    .setDescription("Nahlásíš uživatele, který porušili pravidlo/a.\n\n**Použití:**\nf!report @hráč | důvod | odkaz na obrázek")
    .setColor(0x23D160)
    .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140719880667148/Fryon3.png")

  //========= PŘÍKAZ HELP =========
    if(!args[1]) {
      message.channel.send(help);
      console.log("Fryon | "+ message.author.username + " provedl příkaz f!help na serveru: " + message.guild.name)
    return;
    }

  //========= PŘÍKAZ HELP HELP =========

    if(args[1] === "help") {
      message.channel.send(hhelp);
      console.log("Fryon | "+ message.author.username + " provedl příkaz f!help help na serveru: " + message.guild.name)
      return;
    }

  //========= PŘÍKAZ HELP PROFIL =========

    if(args[1] === "userinfo") {
      message.channel.send(huserinfo);
      console.log("Fryon | "+ message.author.username + " provedl příkaz f!help userinfo na serveru: " + message.guild.name)
      return;
    }

  //========= PŘÍKAZ HELP INFO =========

    if(args[1] === "info") {
      message.channel.send(hinfo);
      console.log("Fryon | "+ message.author.username + " provedl příkaz f!help info na serveru: " + message.guild.name)
      return;
    }

  //========= PŘÍKAZ HELP AVATAR =========

    if(args[1] === "avatar") {
      message.channel.send(havatar);
      console.log("Fryon | "+ message.author.username + " provedl příkaz f!help avatar na serveru: " + message.guild.name)
      return;
    }

  //========= PŘÍKAZ HELP STATS =========

    if(args[1] === "stats") {
      message.channel.send(hstats);
      console.log("Fryon | "+ message.author.username + " provedl příkaz f!help stats na serveru: " + message.guild.name)
      return;
    }

  //========= PŘÍKAZ HELP REPORT =========

    if(args[1] === "report") {
      message.channel.send(hreport);
      console.log("Fryon | "+ message.author.username + " provedl příkaz f!help report na serveru: " + message.guild.name)
      return;
    }

}
module.exports.config = {
  command: "help",
};
