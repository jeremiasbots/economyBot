const { Client, GatewayIntentBits, Collection } = require("discord.js");
const loadCommands = require("./handlers/commandHandler.js");
const loadEvents = require("./handlers/eventHandler.js");

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});
client.commands = new Collection();

loadCommands(client);
loadEvents(client);

process.on("uncaughtException", console.error);
process.on("unhandledRejection ", console.error);

const token = process.env.TOKEN;
client.login(token);
