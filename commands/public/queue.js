const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const client = require("../../bot");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("queue")
    .setDescription("prikažem queue"),
  async execute(interaction) {
    const { member, guild } = interaction;

    const voiceChannel = member.voice.channel;
    const embed = new EmbedBuilder();

    if (!voiceChannel) {
      embed.setColor("Red").setDescription("kompa nisi u kanalu");
      return interaction.reply({ embeds: [embed] });
    }

    if (!(member.voice.channelId === guild.members.me.voice.channelId)) {
      embed
        .setColor("Red")
        .setDescription(`već aktivan u <#${guild.members.me.voice.channelId}>`);
      return interaction.reply({ embeds: [embed] });
    }

    try {
      const queue = await client.distube.getQueue(voiceChannel);

      if (!queue) {
        embed.setColor("Red").setDescription("nemam ništa u queue");
        return;
      }

      embed
        .setColor("Purple")
        .setDescription(
          `${queue.songs.map(
            (song, index) =>
              `\n**${index + 1}.** \`${song.name}\` - \`${
                song.formattedDuration
              }\``
          )}`
        );
      return interaction.reply({ embeds: [embed] });
    } catch (err) {
      console.log(err);
      embed.setColor("Red").setDescription("nisam uspio");
      return interaction.reply({ embeds: [embed] });
    }
  },
};
