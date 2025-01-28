const mongoose = require("mongoose");
const mongoUser = process.env["MONGO"];
const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  execute(client) {
    mongoose
      .connect(mongoUser)
      .then(() => console.log("Conectado a MongoDB"))
      .catch((err) => console.error("Error al conectar a MongoDB:", err));

    console.log(`\n${client.user.tag} estoy listo!`);

    client.user.setPresence({
      status: "online",
      activities: [
        {
          name: "soñar",
          type: ActivityType.Playing,
        },
      ],
    });
  },
};
