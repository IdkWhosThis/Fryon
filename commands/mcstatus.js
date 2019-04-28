module.exports.run = async (bot, message, args) => {
const Discord = require("discord.js");
const config = require('../config.json');
var bot = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const request = require('request');

const PREFIX = "f!";

var args = message.content.substring(PREFIX.length).split(" ");
let uicon = message.author.avatarURL;
let user1 = message.mentions.users.first() || message.author;

if (args == 'help') {
  let embed = new Discord.RichEmbed()
    .setTitle(`${module.exports.help.name} Command Information`)
    .setColor(config.green)
  message.channel.send(embed);
  return
};

const url = 'https://status.mojang.com/check';
const testOffline = '[{"minecraft.net":"red"},{"session.minecraft.net":"green"},{"account.mojang.com":"green"},{"authserver.mojang.com":"red"},{"sessionserver.mojang.com":"green"},{"api.mojang.com":"green"},{"textures.minecraft.net":"red"},{"mojang.com":"red"}]';
request(url, function (err, response, body) {
  if (err) {
    console.log(err);
    return message.reply('Sorry, cannot get Mojang status at this time.');
  };

  body = JSON.parse(body);
  //testOff = JSON.parse(testOffline);
  const embed = new Discord.RichEmbed().addField(`${Object.keys(body[0])[0]}`, `${body[0]['minecraft.net'] ==="green" ? ':white_check_mark: Online ' : '**Looks like the servers are having issues right now :x:**'}`) //Minecraft.net
    .addField(`${Object.keys(body[1])[0]}`, `${body[1]['session.minecraft.net'] === "green" ? ':white_check_mark: Online ' : '**Looks like the servers are having issues right now :x:**'}`) //session.minecraft.net
    .addField(`${Object.keys(body[2])[0]}`, `${body[2]['account.mojang.com'] ==="green"? ':white_check_mark: Online ' : '**Looks like the servers are having issues right now :x:**'}`) //account.mojang.com
    .addField(`${Object.keys(body[3])[0]}`, `${body[3]['authserver.mojang.com'] ==="green"? ':white_check_mark: Online ' : '**Looks like the servers are having issues right now :x:**'}`) //authserver.mojang.com
    .addField(`${Object.keys(body[4])[0]}`, `${body[4]['sessionserver.mojang.com'] ==="green"? ':white_check_mark: Online ' : '**Looks like the servers are having issues right now :x:**'}`) //sessionserver.mojang.com
    .addField(`${Object.keys(body[5])[0]}`, `${body[5]['api.mojang.com'] ==="green"? ':white_check_mark: Online ' : '**Looks like the servers are having issues right now :x:**'}`) //api.mojang.com
    .addField(`${Object.keys(body[6])[0]}`, `${body[6]['textures.minecraft.net'] ==="green"? ':white_check_mark: Online ' : '**Looks like the servers are having issues right now :x:**'}`) //textures.minecraft.net
    .addField(`${Object.keys(body[7])[0]}`, `${body[7]['mojang.com'] ==="green"? ':white_check_mark: Online ' : '**Looks like the servers are having issues right now :x:**'}`) //mojang.com
    .setThumbnail('https://vignette.wikia.nocookie.net/logopedia/images/d/d6/Mojang_ab_logo_vector.png/revision/latest?cb=20120306163913')
    .setColor(config.green)
  message.channel.send(embed);
});

}
module.exports.config = {
  command: "mcstatus",
};
