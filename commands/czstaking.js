const Discord = require('discord.js');


exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "CoinZone",
    url: "https://discord.gg/mVArCEt",
    description: "CoinZone Staking pool info",
    fields: [
      {
        name: "**__Staking Pools__**",
        value: "Here is the updated Staking pool information."
      },
     
      {
        name: "**__EZY POS__**",
        value: "[Link](https://db.tt/Zt1ItpJdGa)"
      },
      
      {
        name: "**__CRYPTONODES POS__**",
        value: "[Link](https://db.tt/lf99E0K5ta)"
      },
      
      {
        name: "**__CRYPTO FIGHT CLUB POS__**",
        value: "[Link](https://db.tt/HWS0XTJImx)"
      },
      
      {
        name: "**__GOCASH POS__**",
        value: "[Link](https://db.tt/1zrhhvNknQ)"
      },
      
      {
        name: "**__ZOOMBA POS__**",
        value: "[Link](https://db.tt/lXrgNhpG1f)"
      },
      
      {
        name: "**__x42 POS__**",
        value: "[Link](https://db.tt/V16seiR5eF)"
      },
      
      {
        name: "**__OMEN POS__**",
        value: "[Link](https://db.tt/A8RASLvWDP)"
      },
      
      {
        name: "**__THROAT PUNCH COIN POS__**",
        value: "[Link](https://db.tt/7HfG2QSTTF)"
      },
      
            {
        name: "**__PENGUIN POS__**",
        value: "[Link](https://db.tt/XkCAMVAUJX)"
      },
      
      {
        name: "**__RATCOIN POS__**",
        value: "[Link](https://db.tt/jnqU2l7Jyq)"
      },
      
      {
        name: "**__E-SPORT BETTING COIN POS__**",
        value: "[Link](https://db.tt/GZJWk88ReP)"
      },
      
      {
        name: "**__SHUTTLECOIN POS__**",
        value: "[Link](https://db.tt/mhfXJTAJLU)"
      },
      
      {
        name: "**__ROCKETCOIN POS__**",
        value: "[Link](https://db.tt/UGmh8BaM1K)"
      },
      
      {
        name: "**__ELECTRA COIN__**",
        value: "[Link](https://db.tt/hOoB2C0SvC)"
      },
      
      {
        name: "**__VIP-CORE POS__**",
        value: "[Link](https://db.tt/rK8gTPaJwN)"
      },
      
      {
        name: "**__ALLSAFE POS__**",
        value: "[Link](https://db.tt/WGV1hrYTkI)"
      },
      
      {
        name: "**__XIND POS__**",
        value: "[Link](https://db.tt/e3XimUDvTA)"
      },
            
      {
        name: "**__MCPC POS__**",
        value: "[Link](https://db.tt/PC3Q1GPlan)"
      },
      
      {
        name: "**__VIBOOK POS__**",
        value: "[Link](https://db.tt/81B6tywdpV)"
      },
            
      {
        name: "**__VENOX POS__**",
        value: "[Link](https://db.tt/9Wal8gldN9)"
      },

    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© CoinZone 2018-2019"
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
  name: 'czstaking',
  description: 'shows CoinZone Staking info.',
  usage: 'czstaking'
};
