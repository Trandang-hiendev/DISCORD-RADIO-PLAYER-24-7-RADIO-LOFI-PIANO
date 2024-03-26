require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || '', // your discord bot token
  prefix: process.env.PREFIX || '.', // bot prefix
  ownerID: process.env.OWNERID || ['1114889680484315206'], //your discord id
 nonPrefixedUsers: [""], // Non prefixed users id.
    
  SpotifyID: process.env.SPOTIFYID || 'd4ba8f36fe9c433a8d4daa9468479828', // spotify client id
  SpotifySecret: process.env.SPOTIFYSECRET || '1b587c9a2ee24e6f91663a4215f2180e', // spotify client secret
  mongourl:
    process.env.MONGO_URI || 'mongodb+srv://pee33:wnn99e@cluster0.fgivnid.mongodb.net/?retryWrites=true&w=majority', // MongoDb URL
  embedColor: process.env.COlOR || 'GREY', // embed colour
  logs: process.env.LOGS || '1221700889115623464', // Discord channel id 
  links: {
    support: 'https://discord.gg/',
    invite: 'https://discord.com/oauth2/authorize?client_id=1221699838186360884&permissions=8&scope=bot',
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
