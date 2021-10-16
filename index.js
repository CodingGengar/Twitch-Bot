require('dotenv').config();
const tmi = require('tmi.js');

const client = new tmi.Client({
    options: { debug: true, messagesLogLevel: "info" },
    connection: {
        cluster: 'aws',
        reconnect: true,
        secure: true
    },
    identity: {
        username: 'plzhelpme_bot',
        password: process.env.BOT_PASSWORD,
    },
    channels: [ 'RealSkybreon' ]
});
client.connect().catch(console.error);

client.on('connected', (address, port) => {
    client.action('RealSkybreon', 'Hi Chat');
});

//bot-commands

client.on('chat', function(channel, user, message, self) {
    
    
    switch(message) {
        case '!twitter':
            client.action('RealSkybreon', 'Twitter - https://twitter.com/RealSkybreon');
            break;
        case '!github':
            client.action('RealSkybreon', 'https://github.com/CodingGengar');
            break;
        case '!discord':
            client.action('RealSkybreon', 'https://discord.gg/QMskspqTBZ');
            break;
        case '!rules':
            client.action('RealSkybreon', 'Dont be a jerk!  No racism homophobia transphobia or hatespeech of any kind!  Treat the streamer and your fellow chatters with respect and kindness.  No backseating unless asked by the streamer.   No self-promotion.');
            break;
        case '!coms':
            client.action('RealSkybreon', 'These are the commands "!twitter" "!rules" "!uptime" "!discord" ');
            break;
        case '!uptime':
            client.action('RealSkybreon', 'Work In Progress');
            break;
        case '!pronouns':
            client.action('RealSkybreon', 'Skybreon pronouns are She/Her');
            break;
    }

    //Timers

    // function StreamTimer(){
    //     client.action('RealSkybreon','Enjoying the stream? Then go subscribe to my Youtube! https://www.youtube.com/channel/UCNnoKs2bWZg8FSlKQ3z0cOw');
    // }
    // setInterval(StreamTimer, 900000);


    // function FollowerOnly(){
    //     client.action('RealSkybreon','Followers-Only mod is on to avoid bots in chat');
    // }
    // setInterval(FollowerOnly, 600000);


    // //Pronouns function

    // function PronounTimer(){
    //     client.action('RealSkybreon','Skybreon pronouns are She/Her');
    // }
    // setInterval(PronounTimer, 300000);


    //OBS stuff



    //Spotify API


    

});