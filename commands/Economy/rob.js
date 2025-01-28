const { createOrSearchUser } = require("../../utils/economyUtils");
const { translate } = require("../../utils/translator");

module.exports = {
  name: "rob",
  description: translate("es", "descriptions.rob"),
  category: "Economy",
  async execute(message, args) {
    const userMention = message.mentions.users.first();

    if (!userMention) {
      return message.reply(translate(message.author.id, "rob.no_mention"));
    } else if (userMention.id === message.author.id) {
      return message.reply(translate(message.author.id, "rob.auto_mention"));
    }

    const quantity = parseInt(args[1]);
    if (quantity) {
      return message.reply(translate(message.author.id, "rob.no_quantity"));
    }

    const receptor = await createOrSearchUser(userMention.id);
    const stolen = userMention.username;
    if(receptor.dinero < 10){
      return message.reply(translate(message.author.id, "rob.no_money", { stolen }))
    }
    
    const moneyRobbed = Math.floor(Math.random() * 20) + 2;
    const actualMoney = Math.min(moneyRobbed, receptor.dinero)
    receptor.dinero -= actualMoney;
    await receptor.save();

    message.reply(translate(message.author.id, "rob.succes", { actualMoney, stolen }));
  },
};
