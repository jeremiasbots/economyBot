const { translate } = require("../../utils/translator");
/*const { getUserLanguage } = require("../../utils/langs");
const languages = require("../../models/languages");
const { translate } = require("../../utils/translator");

module.exports = {
  name: "set-lang",
  description: "Seleccionar el idioma del bot",
  async execute(message, args) {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      return message.reply(
        translate(message.author.id, "errors.no_permissions"),
      );
    }

    const userLang = await getUserLanguage(message.author.id);

    const newLang = args[0] ? args[0].toLowerCase() : null;
    if (!newLang || !["es", "en"].includes(newLang))
      return message.reply(translate(userLang, "set_lang.use"));

    try {
      const result = await languages.findOneAndUpdate(
        { userId: message.author.id },
        { $set: { language: newLang } },
        { upsert: true, new: true },
      );
      console.log("IDIOMA ACTUALIZADO: ", result);
      return message.reply(translate(userLang, "set_lang.succes", { lang: newLang }));
    } catch (error) {
      console.error("Error al actualizar el idioma: ", error);
      return message.reply("An error occurred while updating your languages");
    }
  },
};*/

module.exports = {
	name: "set-lang",
	description: "Seleccionar el idioma del bot",
	/**
	 * @param {import('discord.js').Message} message
	 */
	async execute(message) {
		if (!message.member.permissions.has("ADMINISTRATOR")) {
			return message.reply(
				translate(message.author.id, "errors.no_permissions"),
			);
		}
		return message.reply("XD");
	},
};
