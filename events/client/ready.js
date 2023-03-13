const { Client } = require("discord.js");
const colors = require("colors");

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(colors.cyan.underline(`${client.user.username} is online!`));
  },
};
