const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pozdrav")
    .setDescription("prigodno pozdravim"),
  async execute(interaction) {
    const { member } = interaction;
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) interaction.reply(`Dobro jutro, ${member}!`);
    else if (hour >= 12 && hour < 18)
      interaction.reply(`Dobar dan, ${member}!`);
    else if (hour >= 18 && hour < 23)
      interaction.reply(`Dobra večer, ${member}!`);
    else interaction.reply(`Laku noć, ${member}!`);
  },
};
