const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
   let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   if (!dUser) return message.channel.send("Can't find user!")
   if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't use that command!")
   let dMessage = args.join(" ").slice(22);
   if(dMessage.length < 1) return message.reply('You must supply a message!')

     dUser.send(`<@!528992402132959244> sent you: ${dMessage}, (***___Please note i can not see what you sent back if you want to talk to me you can talk to me in one of the server i protect___***)`)

     message.author.send(`${message.author} You have sent your message to ${dUser}`)

  }
  
  module.exports.help = {
  name:"dm"
}
