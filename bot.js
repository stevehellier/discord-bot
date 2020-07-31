const Discord = require('discord.js');

const commandHandler = require('./commands');

const client = new Discord.Client();

require('dotenv').config();

/* eslint no-console: 0 */
client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', commandHandler);

client.login(process.env.DISCORD_TOKEN);
