module.exports = {
    name: "interactionCreate",
    async execute(interaction) {
      if (!interaction.isChatInputCommand()) return;
  
      if (interaction.commandName === "ping") {
        await interaction.reply("PONG!");
      }
    },
  };