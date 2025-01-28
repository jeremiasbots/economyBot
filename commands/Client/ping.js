const { translate } = require("../../utils/translator");

module.exports = {
	name: "ping",
	description: translate("es", "descriptions.ping"),
	/**
	 * @param {import('discord.js').Message} message
	 */
	execute(message) {
		return message.reply("**PONG!**");
	},
};
