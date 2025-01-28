const { createOrSearchUser } = require("../../utils/economyUtils");
const { translate } = require("../../utils/translator");

module.exports = {
	name: "remove-money",
	description: translate("es", "descriptions.remove_money"),
	category: "Owner",
	async execute(message, args) {
		if (!message.member.permissions.has("ADMINISTRATOR")) {
			return message.reply(
				translate(message.author.id, "errors.no_permissions"),
			);
		}

		const userMention = message.mentions.users.first();

		const quantity = Number.parseInt(args[1]);

		if (!userMention || Number.isNaN(quantity)) {
			return message.reply(
				translate(message.author.id, "remove_money.mention"),
			);
		}

		const receptor = await createOrSearchUser(userMention.id);
		receptor.dinero = Math.max(0, receptor.dinero - quantity);
		await receptor.save();

		message.reply(
			translate(message.author.id, "remove_money.succes", {
				quantity,
				user: userMention.username,
			}),
		);
	},
};
