const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("zastava")
    .setDescription("objavim zastavu")
    .addStringOption((optn) =>
      optn
        .setName("država")
        .setDescription("unesi državu ili teritorij")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options } = interaction;
    const country = options.getString("država");

    const url = `https://restcountries.com/v3.1/name/${country}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          interaction.reply(`${country} ne postoji`);
        }
        interaction.reply(data[0].flags.png);
      })
      .catch((err) => {
        console.log(err);
        interaction.reply("nisam uspio");
      });
  },
};
