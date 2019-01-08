const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;
const errors = require("../utils/errors.js");
const Report = require("../models/report.js")
const mongoose = require("mongoose");


module.exports.run = async (bot, message, args) => {
    await message.delete();
    if(args[0] == "help"){
      message.reply("Usage: -report <user> <reason>");
      return;
    }
    mongoose.connect(`mongodb+srv://broomez420:CryptoFightClub2019@cluster0-oswma.mongodb.net/Reports`);
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return errors.cantfindUser(message.channel);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);

    // let reportEmbed = new Discord.RichEmbed()
    // .setDescription("Reports")
    // .setColor(orange)
    // .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    // .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    // .addField("Channel", message.channel)
    // .addField("Time", message.createdAt)
    // .addField("Reason", rreason);

    // let reportschannel = message.guild.channels.find(`name`, "reports");
    // if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
    // reportschannel.send(reportEmbed);

    const report = new Report({
      _id: mongoose.Types.ObjectId(),
      username: rUser.user.username,
      userID: rUser.id,
      reason: rreason,
      rUsername: message.author.username,
      rID: message.author.id,
      time: message.crreatedAt
    });

    report.save()
    .then(result => console.log(result))
    .catch(err => console.log(err));

    message.reply("That report has been saved to the database!")






}

module.exports.help = {
  name: "testreport"
}