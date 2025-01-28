const { translate } = require("../../utils/translator");

module.exports = {
	name: "help",
	description: translate("es", "descriptions.help"),
	category: "Help",
	async execute(message, args) {
		const { client } = message;

		if (args.length === 1) {
			const commandName = args[0];
			const command = client.commands.get(commandName);

			if (command) {
				let commandInfo = translate(message.author.id, "help.command-info", {
					command_name: command.name,
				});
				commandInfo += translate(
					message.author.id,
					"help.command-description",
					{ command_description: command.description },
				);

				if (command.usage) {
					commandInfo += translate(message.author.id, "help.command-usage", {
						command_usage: command.usage,
					});
				}

				return message.reply(commandInfo);
			}
			return message.reply(
				translate(message.author.id, "help.no_command", {
					command_name: commandName,
				}),
			);
		}

		let helpMessage = translate(message.author.id, "help.helpMessage");

		const categories = new Map();

		for (const command of Array.from(client.commands)) {
			const category =
				command.category || translate(message.author.id, "help.other");

			if (!categories.has(category)) {
				categories.set(category, []);
			}
			categories.get(category).push(command);
		}

		categories.forEach((commands, category) => {
			helpMessage += translate(message.author.id, "help.category", {
				category,
			});
			for (const command of commands) {
				helpMessage += `> **${command.name}** => ${command.description}\n`;
			}
		});

		return message.reply(helpMessage);
	},
};
