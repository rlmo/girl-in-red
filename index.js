const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
const prefix = "gir ";

client.on("message", function(message){
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) {
        message.reply(`Say "gir <command>" and i'll hear ya :)`);
        return;
    }

    const fullCommand = message.content.slice(prefix.length);
    const args = fullCommand.toLowerCase().split(' ');

    //console.debug(args);
    if(message.author.id == 435216589030424598){
        message.reply(`Message from Rodrigo`)
    }
});

client.login(config.BOT_TOKEN);