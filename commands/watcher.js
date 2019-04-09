const Discord = require('discord.js');


exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "TheWatcherInfo",
    url: "https://discord.gg/mNNsfsg",
    description: "The Watcher info & links.",
    fields: [      
      {
        name: "Twitter",
        value: "[Twitter](https://twitter.com/TheWatcher247)"
      },
      
      {
        name: "Reddit",
        value: "[Reddit](https://www.reddit.com/user/TheWatcher247)"
      },
      
      {
        name: "Facebook",
        value: "[Facebook](https://www.facebook.com/TheWatcherBot)"
      },
      
      {
        name: "Website",
        value: "[Website](https://thewatcherbot.com)"
      },
      
      {
        name: "Bitcoin Talk Thread",
        value: "[Bitcoin Talk Thread](https://bitcointalk.org/index.php?topic=5126420.new#new)"
      },
      
      {
        name: "The Watcher Bot Server",
        value: "[The Watcher Bot Server](https://discord.gg/mNNsfsg)"
      },
            
      {
        name: "TrustPilot Reviews",
        value: "[TrustPilot Reviews](https://thewatcherbot.com/reviews.html)"
      },
      
      {
        name: "Become a Patreon",
        value: "[Become a Patreon](https://www.patreon.com/TheWatcher247)"
      },
      
      {
        name: "CoinGecko",
        value: "[CoinGecko](https://www.coingecko.com/en/coins/thewatcherbottoken)"
      },
      
      {
        name: "CoinPaprika",
        value: "[CoinPaprika](https://coinpaprika.com/coin/twbt-thewatcherbottoken/)"
      },
            
      {
        name: "Exchanges",
        value: "[Altmarkets](https://altmarkets.io/trading/twbtbtc)"
      },
          
      {
        name: "Some Discord Servers I Am In",
        value: "[OPC&OPCX](https://discord.gg/26XeDPX), [InfoCoin](https://discord.gg/wBhVsyu), [SpectreSecurity](https://discord.gg/xHhGkhx), [BitcoinCryptoWorld](https://discord.gg/ApBg4Uu), [CryptoMasters](https://discord.gg/Gr7A5ME), [CryptoWorld](https://discord.gg/accGvhh)"
      },

    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© TheWatcher247 2018-2019"
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
  name: 'watcher',
  description: 'shows my social info.',
  usage: 'watcher'
};
