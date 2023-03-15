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

/* module.exports = {
  name: "help",
  description: "shows help",
  execute(message, args) {
    message.channel.send(
      "**Haubot v0.5**" +
        "\n*Developed by oyrad*" +
        "\n```Dobar dan, ja sam Haubot, imam iste funkcije kao pravi Hauba samo sam manje naporan.```" +
        "\n**Generalne komande**" +
        "```\n!hvala => nema na čemu kompa```" +
        "```\n!pozdrav => prigodno pozdravim```" +
        "```\n!vrijeme => pokažem trenutno vrijeme```" +
        "\n**Interaktivne komande**" +
        "```\n!flag {drzava} => pošaljem zastavu države```" +
        "```\n!prognoza {grad} => trenutno stanje u gradu```" +
        "```\n!trazi {pojam} => nalazim odabrani pojam```" +
        "```\n!yt {pojam} => vraćam youtube link```" +
        "\n**Player komande**" +
        "```\n!sviraj {pjesma} => odsviram ti pjesmu```" +
        "```\n!stani => mičem se s kanala```"
    );
  },
};
 */
