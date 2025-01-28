module.exports = {
	name: "interactionCreate",
	/**
	 * @param {import('discord.js').Interaction} interaction
	 */
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		if (interaction.commandName === "ping") {
			await interaction.reply("PONG!");
		}
	},
};
