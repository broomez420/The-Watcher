const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const Welcome = require("discord-welcome");
bot.commands = new Discord.Collection();
//let xp = require("./xp.json");
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
      
      let textList = ['How to Manage','lurking','Learning','Protecting 7 servers','discord.gg/mNNsfsg','Reporting UIDs','Scanning Servers...','keeping 8000 users safe','reaching 1.6 mil users','updating database...','scanning database...']
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



//------ start first part of invite module ------------ //

// Initialize the invite cache
const invites = {};

// A pretty useful method to create a delay without blocking the whole script.
const wait = require('util').promisify(setTimeout);

bot.on('ready', () => {
  // "ready" isn't really ready. We need to wait a spell.
  wait(1000);

  // Load all invites for all guilds and save them to the cache.
  bot.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
//------ end first part of invite module ------------ //





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



// invite module
bot.on('guildMemberAdd', member => {
  // To compare, we need to load the current invite list.
  member.guild.fetchInvites().then(guildInvites => {
    // This is the *existing* invites for the guild.
    const ei = invites[member.guild.id];
    // Update the cached invites for the guild.
    invites[member.guild.id] = guildInvites;
    // Look through the invites, find the one for which the uses went up.
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    // This is just to simplify the message being sent below (inviter doesn't have a tag property)
    const inviter = client.users.get(invite.inviter.id);
    // Get the log channel (change to your liking)
    const inviteChannel = member.guild.channels.find(channel => channel.name === "invites");
    // A real basic message with the information we need. 
    inviteChannel.send(`${member.user.tag} joined using invite code ${invite.code} from ${inviter.tag}. Invite was used ${invite.uses} times since its creation.`);
  });
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
      .addField('Has Left the Server', ';(')
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
  //let xpAdd = Math.floor(Math.random() * 7) + 8;
  //console.log(xpAdd);

  //if(!xp[message.author.id]){
    //xp[message.author.id] = {
      //xp: 0,
      //level: 1
    //};
  //}

  //let curxp = xp[message.author.id].xp;
  //let curlvl = xp[message.author.id].level;
  //let nxtLvl = xp[message.author.id].level * 300;
  //xp[message.author.id].xp =  curxp + xpAdd;
  //if(nxtLvl <= xp[message.author.id].xp){
  //  xp[message.author.id].level = curlvl + 1;
  //  let lvlup = new Discord.RichEmbed()
  //  .setTitle("Level Up!")
  //  .setColor(purple)
  //  .addField("New Level", curlvl + 1);

   // message.channel.send(lvlup).then(msg => {msg.delete(5000)});
 // }
 // fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
 //   if(err) console.log(err)
 // });


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
