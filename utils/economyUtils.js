const economy = require("../models/economy");

async function createOrSearchUser(userId) {
  let user = await economy.findOne({ userId: userId });
  if (!user) {
    user = await economy.create({ userId: userId });
  }
  await user.save();
  return user;
}

module.exports = { createOrSearchUser };
