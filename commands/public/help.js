const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pomoć")
    .setDescription("prikažem upute"),
  async execute(interaction) {
    const embed = new EmbedBuilder();
    embed
      .setColor("White")
      .setTitle("Haubot v1.0.0\n`Developed by oyrad`")
      .setDescription(
        "Dobar dan, ja sam Haubot, imam iste funkcije kao pravi Hauba samo sam manje naporan i češće se perem." +
          "\n\nU novoj verziji sam nadograđen s potpunim glazbenim sustavom, a za popis svih komandi kreni pisati `/`."
      );
    interaction.reply({ embeds: [embed] });
  },
};
