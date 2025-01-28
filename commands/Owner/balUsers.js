const { createOrSearchUser } = require("../../utils/economyUtils");
const { translate } = require("../../utils/translator");

module.exports = {
	name: "bal-user",
	description: translate("es", "descriptions.bal_users"),
	category: "Owner",
	async execute(message) {
		if (!message.member.permissions.has("ADMINISTRATOR")) {
			return message.reply(
				translate(message.author.id, "errors.no_permissions"),
			);
		}

		const userMention = message.mentions.users.first();
		if (!userMention) {
			return message.reply(translate(message.author.id, "bal_users.mention"));
		}
		const user = await createOrSearchUser(userMention);

		await user.save();

		message.reply(
			translate(message.author.id, "bal_users.balance", {
				user: userMention.username,
				money: user.dinero,
				bank: user.banco,
			}),
		);
	},
};
