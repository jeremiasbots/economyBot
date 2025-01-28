const fs = require("node:fs");
const path = require("node:path");

/**
 * @param {import('discord.js').Client} client
 */
module.exports = (client) => {
	/**
	 * @param {string} dir
	 */
	const loadCommands = (dir) => {
		const files = fs.readdirSync(dir);

		for (const file of files) {
			const filePath = path.join(dir, file);

			if (fs.statSync(filePath).isDirectory()) {
				loadCommands(filePath);
			} else if (file.endsWith(".js")) {
				const command = require(filePath);

				if (command.name) {
					client.commands.set(command.name.toLowerCase(), command);
					console.log(`Comando "${command.name}" cargado`);
				} else {
					console.error(
						`El archivo ${file} no tiene un nombre de comando válido.`,
					);
				}
				if (!command.description) {
					console.error(
						`El archivo ${file} no tiene una descripcion de comando válido.`,
					);
				}
			}
		}
	};

	const commandsPath = path.join(__dirname, "../commands");
	loadCommands(commandsPath);
};
