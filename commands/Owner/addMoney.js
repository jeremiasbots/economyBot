const { createOrSearchUser } = require("../../utils/economyUtils");
const { translate } = require( "../../utils/translator");

module.exports = {
  name: "add-money",
  description: translate("es", "descriptions.add_money"),
  category: "Owner",
  async execute(message, args) {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      return message.reply(translate(message.author.id, "errors.no_permissions"));
    }

    const userMention = message.mentions.users.first();
    /*if(userMention = userMention.bot){
      return message.reply(translate(message.author.id, "add_money.bot_money"));
    }*/
    const quantity = parseInt(args[1]);

    if (!userMention || isNaN(quantity)){
      return message.reply(translate(message.author.id, "add_money.mention"))
    }
    
    const receptor = await createOrSearchUser(userMention.id);
    receptor.dinero += quantity;
    await receptor.save();

    message.reply(translate(message.author.id, "add_money.succes", { quantity, user: userMention.username }));
  },
};