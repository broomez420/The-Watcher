const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if(message.author.id != "392082408050130945") return;
    message.react(`🤔`);

}

module.exports.help = {
    name: "react"
}