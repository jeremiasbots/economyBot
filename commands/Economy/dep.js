const { createOrSearchUser } = require("../../utils/economyUtils");
const { translate } = require("../../utils/translator");

module.exports = {
	name: "dep",
	description: translate("es", "descriptions.dep"),
	category: "Economy",
	/**
	 * @param {import('discord.js').Message} message
	 * @param {string[]} args
	 */
	async execute(message, args) {
		const economySchema = await createOrSearchUser(message.author.id);
		if (args[0] !== "all" && Number.isNaN(Number.parseInt(args[0]))) {
			return message.reply(translate(message.author.id, "dep.no_quantity"));
		}
		const depAmount =
			args[0] === "all" ? economySchema.dinero : Number.parseInt(args[0]);

		if (Number.isNaN(depAmount) || depAmount < 0) {
			return message.reply(translate(message.author.id, "dep.no_quantity"));
		}

		if (economySchema.banco < depAmount) {
			return message.reply(translate(message.author.id, "dep.no_money"));
		}

		economySchema.dinero = economySchema.dinero - depAmount;
		economySchema.banco = economySchema.banco + depAmount;
		await economySchema.save();

		return message.reply(
			translate(message.author.id, "dep.success", { amount: depAmount }),
		);
	},
};
