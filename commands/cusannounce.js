const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
     if (message.member.hasPermission("ADMINISTRATOR")) {
      let args = message.content.split(" ").slice(1).join(" ");
   let split = args.split("-");
   let url = args[2];
       message.channel.sendMessage("@everyone", {
         embed: {
           color: 0xFF0000,
           author: {
             name: message.author.username,
             icon_url: message.author.avatarURL
           },
           title: split[0],
           description: split[1],
           url: split[2],
           timestamp: new Date(),
           footer: {
             icon_url: message.author.avatarURL,
             text: message.author.username
           }
         }
     });
   }
 }
module.exports.help = {
        name: "cusannounce" 
}
