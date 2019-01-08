const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR")) {
    if (message.content.startsWith('-announce')) {
        let rest_of_the_string = message.content.slice('-announce'.length); //removes the first part
        let array_of_arguments = rest_of_the_string.split(','); //[title, description, link, image]
        const embed = new Discord.RichEmbed()
            .setTitle(array_of_arguments[0])
            .setDescription(array_of_arguments[1])
            .setImage(array_of_arguments[3])
            .setURL(array_of_arguments[2])
            .addField("Text", true)
            .setThumbnail("https://i.imgur.com/Rmiwd1j.png")
            .setColor(0x00AE86)
            .setFooter("Footer", array_of_arguments[3])
            .setTimestamp();
           message.channel.send("@everyone");
           message.channel.send({embed});
	
        }
    };
}
module.exports.help = {
        name: "announce" 
}