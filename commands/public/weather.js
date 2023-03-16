const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("prognoza")
    .setDescription("prognoza za danas")
    .addStringOption((optn) =>
      optn
        .setName("mjesto")
        .setDescription("unesi željeno mjesto")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options } = interaction;
    const place = options.getString("mjesto");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${process.env.OWM_KEY}&lang=hr`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          interaction.reply(`aj ne seri, \`${place}\` ne postoji`);
          return;
        }
        interaction.reply(
          `**${data.name}** \nTemperatura je *ugodnih* ${Math.round(
            data.main.temp - 273.15
          )}° C, a vani ${data.weather[0].description}.`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
