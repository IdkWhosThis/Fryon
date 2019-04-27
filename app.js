const Discord = require("discord.js");
const moment = require('moment');
const fs = require("fs");
const ms = require("ms");
const send = require("quick.hook");
const snekfetch = require("snekfetch");
const ffmpeg = require('ffmpeg');
const chalk = require('chalk');
const bot = new Discord.Client();

const PREFIX = "f!";

bot.on('ready', () => {
    bot.user.setStatus("away");
    require('console-stamp')(console, 'HH:MM:ss');
    console.log(chalk.red('Fryon | Bot byl úspěšně probuzen!'));
    console.log(chalk.red(`Fryon | Přihlašuji za ${bot.user.tag}!`));
    console.log(chalk.red(`Fryon | Bot je na ${bot.guilds.size} serverech, pro ${bot.users.size} uživatelů.`));
    bot.user.setActivity("f!help | friggoayomo.cf")
      var playing = ["https://www.friggoayomo.cf", `Developed by: Friggo`, "f!help | friggoayomo.cf","Verze: 0.2.0",]
      var interval = setInterval(function() {
          var game = Math.floor((Math.random() * playing.length) + 0);
          bot.user.setActivity(playing[game])
      }, 30 * 700);
})

//============== JS FILES ==============
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if(err) console.error(err);

  var jsfiles = files.filter(f => f.split('.').pop() === 'js');
  if (jsfiles.lenght <= 0) {
    return require('console-stamp')(console, 'HH:MM:ss'); console.log('Fryon | Nebyl nalezen žádný příkaz');
  } else {
    require('console-stamp')(console, 'HH:MM:ss'); console.log(chalk.cyan('Fryon | Načítám příkazy'))
  }

  jsfiles.forEach((f, i) => {
      var cmds = require(`./commands/${f}`);

      require('console-stamp')(console, 'HH:MM:ss');
      console.log(chalk.cyan(`Fryon | Příkaz ${f} byl úspěšně načten!`));

      bot.commands.set(cmds.config.command, cmds);
      cmds.config.aliases.forEach(alias => {
        bot.aliases.set(alias, cmds.config.name)
      });
    });
});


bot.on("message", async message => {
  if (message.author.equals(bot.user)) return;
  var cont = message.content.substring(PREFIX.length).split(" ");
  let sender = message.author;
  let msg = message.content.toUpperCase();
  var args = cont.slice(1)


  if (!message.content.startsWith(PREFIX)) return;

  var cmd = bot.commands.get(cont[0])
  if (cmd) cmd.run(bot, message, args);


  if (bot.user.id === message.author.id) { return }
});


bot.on("messageDelete", async msg => {
  let logs = await msg.guild.fetchAuditLogs({type: 72});
  let entry = logs.entries.first();

  let embed = new Discord.RichEmbed()
    .setTitle("Zpráva smazána")
    .setColor("#fc3c3c")
    .setDescription(`**Uživatel:** ${msg.author} '[${msg.author.tag}]'\n**Kanál:** ${msg.channel || "Chyba! Kanál neexistuje"}\n${msg.content}`)
    .setTimestamp()
    .setFooter(`Autor: ${msg.author.id} | ID zprávy: ${msg.id}`);

  let channel = msg.guild.channels.find(x => x.name === 'fryon-console');
  channel.send({embed});
});

//============== UPTIME ==============

let totalSeconds = (bot.uptime / 1000);
      let uphours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      let upminutes = Math.floor(totalSeconds / 60);
      let upseconds = totalSeconds % 60;

//============== LOGIN ==============
// Přihlašovací údaj!
bot.login('Nene...')
