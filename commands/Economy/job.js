const { createOrSearchUser } = require("../../utils/economyUtils");
const { translate } = require("../../utils/translator");

module.exports = {
	name: "job",
	description: translate("es", "descriptions.job"),
	category: "Economy",
	async execute(message) {
		const userId = message.author.id;
		const user = await createOrSearchUser(userId);

		const ganancy = Math.floor(Math.random() * 20) + 4;
		user.dinero += ganancy;

		await user.save();
		const money = user.dinero;

		message.reply(
			translate(message.author.id, "job.claim", { ganancy, money }),
		);
	},
};
