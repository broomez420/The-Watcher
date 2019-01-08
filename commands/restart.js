const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.author.id === "392082408050130945") return message.channel.send(":x: Only usable by Announcer Developers.");
    message.channel.send(':wave: Restarting. Bye will be right back!').then(() => {
    process.exit(134);
   });
};
    
module.exports.help = {
        name: 'restart',
        usage: 'restart',
        description: 'Restarts the bot'
};