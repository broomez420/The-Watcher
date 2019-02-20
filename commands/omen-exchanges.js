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
    description: "OMEN Exchanges.",
    fields: [
      {
        name: "Graviex",
        value: "You can check it 👉 [HERE](https://graviex.net/markets/omenbtc) 👈"
      },
      {
        name: "STEX",
        value: "You can check it 👉 [HERE](https://app.stex.com/en/basic-trade/pair/BTC/OMEN/1D) 👈"
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
  name: 'omen-exchanges',
  description: 'shows OMENs exchanges.',
  usage: 'omen-exchanges'
};
