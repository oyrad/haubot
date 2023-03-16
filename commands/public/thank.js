const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hvali")
    .setDescription("pohvalim prijatelje"),
  async execute(interaction) {
    if (interaction.member.user.discriminator === "8403") {
      interaction.reply("pa neću sebe hvalit");
    } else {
      interaction.reply(`sve za brata rođenog ${interaction.member}! ❤️`);
    }
  },
};
