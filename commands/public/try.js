const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sex")
    .setDescription("pokušam sex, ne ide mi često"),
  async execute(interaction) {
    const randomNum = Math.floor(Math.random() * 101);
    if (randomNum === 69) {
      interaction.reply("SEX!!!");
    } else {
      interaction.reply("nisam uspio ... opet");
    }
  },
};
