const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
    ],
});

client.commands = new Collection();

const commandFiles = fs
    .readdirSync('./commands/')
    .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const PREFIX = '!';

client.on('ready', () => {
    console.log('Haubot is online!');
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
    const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);

    //HELP
    if (CMD_NAME === 'pomoc')
        client.commands.get('help').execute(message, args);
    //GENERAL
    else if (CMD_NAME === 'hvala')
        client.commands.get('thank').execute(message, args);
    else if (CMD_NAME === 'pozdrav')
        client.commands.get('greeting').execute(message, args);
    else if (CMD_NAME === 'vrijeme')
        client.commands.get('time').execute(message, args);
    //MEME
    else if (CMD_NAME === 'prdac')
        client.commands.get('fart').execute(message, args);
    else if (CMD_NAME === 'sex')
        client.commands.get('try').execute(message, args);
    else if (CMD_NAME === 'tomo')
        message.channel.send({ files: ['./images/tomo.jpeg'] });
    //INTERACTIVE
    else if (CMD_NAME === 'flag')
        client.commands.get('flag').execute(message, args);
    else if (CMD_NAME === 'trazi')
        client.commands.get('search').execute(message, args);
    else if (CMD_NAME === 'prognoza')
        client.commands.get('weather').execute(message, args);
    else if (CMD_NAME === 'yt')
        client.commands.get('youtube').execute(message, args);
    else if (CMD_NAME === 'goog')
        client.commands.get('image').execute(message, args);
    //PLAYER
    else if (CMD_NAME === 'sviraj')
        client.commands.get('play').execute(message, args);
    else if (CMD_NAME === 'stani')
        client.commands.get('stop').execute(message, args);
    //ADMIN
    else if (CMD_NAME === 'scream')
        client.commands.get('scream').execute(message, args);
    else message.reply(`komanda ${CMD_NAME} ne postoji, probaj ${PREFIX}pomoc`);
});

client.login(process.env.BOT_TOKEN);
