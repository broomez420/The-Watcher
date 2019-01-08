const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const Welcome = require("discord-welcome");
bot.commands = new Discord.Collection();
let xp = require("./xp.json");
let purple = botconfig.purple;
let cooldown = new Set();
let cdseconds = 5;

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

// lists commands the bot has in CMD
  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

//start of console messages
bot.on('ready', () => {
  setInterval(async ()=>{
      
      let textList = ['How to Manage CFCC','lurking','Learning']
      var text = textList[Math.floor(Math.random() * textList.length)];
      bot.user.setActivity(text , { type: 'WATCHING' })
  },60000) // milliseconds
});
  
bot.on('ready', () => {
// List servers the bot is connected to
  console.log("Servers:")
    bot.guilds.forEach((guild) => {
    console.log(" - " + guild.name)
  })

})  
//end of console messages

// welcome member message module
bot.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name', 'welcome');
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField(':bust_in_silhouette: | name : ', `${member}`)
      .addField(':microphone2: | Welcome!', `Welcome to the server, ${member}`)
      .addField(':id: | User :', "**[" + `${member.id}` + "]**")
      .addField(':family_mwgb: | Your are the newest member', `${member.guild.memberCount}`)
      .addField("Name", `<@` + `${member.id}` + `>`, true)
      .addField('Server', `${member.guild.name}`, true )
      .setFooter(`**${member.guild.name}**`)
      .setTimestamp()

      channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

  console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

// leave member message module
bot.on('guildMemberRemove', member => {
  let channel = member.guild.channels.find('name', 'leave');
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField('Name:', `${member}`)
      .addField('Has Let the Server', ';(')
      .addField('Bye Bye :(', 'We will all miss you!')
      .addField('The server now has', `${member.guild.memberCount}` + " members")
      .setFooter(`**${member.guild.name}`)
      .setTimestamp()

      channel.sendEmbed(embed);
});

// leave member DM message module
bot.on('guildMemberRemove', member => {
  console.log(`${member}` + "has left " + `${member.guild.name}` + " Sending leave message now")
  console.log("Leave Message Sent")
});
  

bot.on("message", async message => {
// bot dm module
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
//custom prefix module
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
//xp - levels module
  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor(purple)
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });


  let prefix = prefixes[message.guild.id].prefixes;
  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("You have to wait 5 seconds between commands.")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)

  //channel create / delete channel module
  bot.on('channelCreate', async channel => {

    console.log(`${channel.name} has been created.`);
  
  if (channel.type != 'text') return;
    let sChannel = channel.guild.channels.find('name', 'message_log');
    sChannel.send(`The channel ${channel} has been created`);
  
  });

  bot.on('channelDelete', async channel => {

    console.log(`${channel.name} has been Deleted.`);
  
  if (channel.type != 'text') return;
    let sChannel = channel.guild.channels.find('name', 'message_log');
    sChannel.send(`The channel ${channel} has been Deleted`);
  
  });
  



});

bot.login(process.env.BOT_TOKEN);
