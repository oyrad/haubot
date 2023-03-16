const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("viči")
    .setDescription("vičem na prijatelje")
    .addStringOption((optn) =>
      optn.setName("što").setDescription("što da vičem").setRequired(true)
    ),
  async execute(interaction) {
    if (interaction.member.user.discriminator !== "5753") {
      interaction.reply("to je samo za mog tvorca, legendu oyrada");
    } else {
      const term = interaction.options.getString("što").toUpperCase();
      interaction.reply(
        term + "\n" + term + "\n" + term + "\n" + term + "\n" + term
      );
    }
  },
};
