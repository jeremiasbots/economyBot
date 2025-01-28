const { translate } = require("../../utils/translator");

module.exports = {
	name: "ping",
	description: translate("es", "descriptions.ping"),
	execute(message) {
		return message.reply("**PONG!**");
	},
};
