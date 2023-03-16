const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("traži")
    .setDescription("pretražim wikipediju")
    .addStringOption((optn) =>
      optn.setName("pojam").setDescription("unesi pojam").setRequired(true)
    ),
  async execute(interaction) {
    const { options } = interaction;
    const term = options.getString("pojam");

    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=1&srsearch=${term}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const urlTitle = data.query.search[0].title.replace(/ /g, "_");
        interaction.reply(`https://en.wikipedia.org/wiki/${urlTitle}`);
      })
      .catch((err) => {
        console.log(err);
        interaction.reply(`nisam uspio pronaći \`${term}\``);
      });
  },
};
