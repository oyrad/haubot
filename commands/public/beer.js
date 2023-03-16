const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("pivo").setDescription("nazdravimo"),
  async execute(interaction) {
    interaction.reply("🍻");
  },
};
