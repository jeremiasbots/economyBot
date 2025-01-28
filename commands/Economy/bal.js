const { createOrSearchUser } = require("../../utils/economyUtils");
const { translate } = require("../../utils/translator");

module.exports = {
	name: "bal",
	description: translate("es", "descriptions.bal"),
	category: "Economy",
	async execute(message) {
		const userId = message.author.id;
		const user = await createOrSearchUser(userId);

		await user.save();

		const userMention = message.mentions.users.first();
		if (userMention) {
			return message.reply(translate(message.author.id, "bal.mention"));
		}
		const money = user.dinero;
		const bank = user.banco;
		message.reply(translate(message.author.id, "bal.balance", { money, bank }));
	},
};
