const {
  SlashCommandBuilder,
  CommandInteraction,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("pong"),
  execute(interaction) {
    interaction.reply({ content: "pong" });
  },
};
