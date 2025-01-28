const config = require("../config.json");
const { translate } = require("../utils/translator");

module.exports = {
	name: "messageCreate",
	execute(message, client) {
		const userLang = "es";

		const prefix = config.prefix;
		if (!message.content.startsWith(prefix) || message.author.bot) return;

		const args = message.content.slice(1).trim().split(/ +/g);

		const commandName = args.shift().toLowerCase();
		const command = client.commands.get(commandName);

		if (!command)
			return message.reply(translate(userLang, "errors.no_command"));
		try {
			command.execute(message, args, client);
		} catch (error) {
			console.error(`Error en el comando ${commandName}:`, error);
			return message.reply(translate(userLang, "errors.commandError"));
		}
	},
};
