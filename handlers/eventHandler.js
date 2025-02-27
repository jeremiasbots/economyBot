const fs = require("node:fs");
const path = require("node:path");

/**
 * @param {import('discord.js').Client} client
 */
module.exports = (client) => {
	const eventsPath = path.join(__dirname, "../events");

	const eventFiles = fs
		.readdirSync(eventsPath)
		.filter((file) => file.endsWith(".js"));

	for (const file of eventFiles) {
		const event = require(`${eventsPath}/${file}`);

		if (event.name) {
			if (event.once) {
				client.once(event.name, (...args) => event.execute(...args, client));
			} else {
				client.on(event.name, (...args) => event.execute(...args, client));
			}

			console.log(`Evento "${event.name}" cargado`);
		} else {
			console.error(`No se pudo cargar el evento: ${file}`);
		}
	}
};
