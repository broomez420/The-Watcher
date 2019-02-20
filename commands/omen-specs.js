const Discord = require('discord.js');


exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "OMEN",
    url: "https://cryptofightclubco.in",
    description: "OMEN Specs.",
    fields: [
      {
        name: "**__Ticker__**",
        value: "OMEN"
      },
      {
        name: "Algo",
        value: "SCRYPT"
      },
      {
        name: "Type",
        value: "Pos"
      },
      {
        name: "Max Supply",
        value: "18 billion"
      },
      {
        name: "PoS Rewards",
        value: "10% per annum"
      },
      {
        name: "PoS Maturity Time",
        value: "8 Hours"
      },
      {
        name: "Confirmations",
        value: "10"
      },

      {
        name: "Block Time",
        value: "2 minutes"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© OmenCoin 2018-2019"
    }
  }
});
        };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'omen-specs',
  description: 'shows OMENs specs.',
  usage: 'omen-specs'
};
