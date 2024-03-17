
require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || 'MTIwMzY0NjYxOTUyMjgzNDQ1Mg.GKTYMi.2mVazR-IzOpW9dr9WrTh-BILK42vLcp7L_Mbkk', // your discord bot token
  prefix: process.env.PREFIX || '.', // bot prefix
  ownerID: process.env.OWNERID || ['1173547185758015498'], //your discord id
 nonPrefixedUsers: ["1173547185758015498"], // Non prefixed users id.
    
  SpotifyID: process.env.SPOTIFYID || 'e6f84fbec2b44a77bf35a20c5ffa54b8', // spotify client id
  SpotifySecret: process.env.SPOTIFYSECRET || '498f461b962443cfaf9539c610e2ea81', // spotify client secret
  mongourl:
    process.env.MONGO_URI || 'mongodb+srv://pee33:wnn99e@cluster0.fgivnid.mongodb.net/?retryWrites=true&w=majority', // MongoDb URL
  embedColor: process.env.COlOR || 'GREY', // embed colour
  logs: process.env.LOGS || '1198586029343518820', // Discord channel id 
  links: {
    support: 'https://discord.gg/aMC2e8zgQb',
    invite: 'https://discord.com/api/oauth2/authorize?client_id=1027828697828433980&permissions=279230934336&scope=bot',
    vote: 'https://top.gg/bot/794917868906086411/vote',
  },

  nodes: [
    {
      url: 'lava.link',
      name: 'Node 1',
      auth:  'kronix',
      secure:  parseBoolean('false'),
    },
  ],
};

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}