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
    description: "OMEN Coin info & links.",
    fields: [
      {
        name: "**__Specifications__**",
        value: "type `-omen-specs` to get a list of our coin specs"
      },
      {
        name: "**__Exchanges__**",
        value: "type `-omen-exchanges` to get a list of our exchanges"
      },
      
      {
        name: "BitcoinTalkThread",
        value: "[BitcoinTalkThread](https://bitcointalk.org/index.php?topic=5061983)"
      },
      
      {
        name: "Block Explorer",
        value: "[Block Explorer](http://omen-explorer.xyz)"
      },
      
      {
        name: "GitHub",
        value: "[GitHub Repo](https://github.com/broomez420/omencoin)"
      },
          
      {
        name: "Discord",
        value: "[Discord](https://discord.gg/gajgDNV)"
      },
      
      {
        name: "Price Trackers",
        value: "You can check out our Price Trackers [HERE](https://www.coingecko.com/en/coins/omencoin)"
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
  name: 'omeninfo',
  description: 'shows OMENs info.',
  usage: 'omeninfo'
};
