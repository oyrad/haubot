const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const client = require("../../bot");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pauziraj")
    .setDescription("pauziram"),
  async execute(interaction) {
    const { member, guild } = interaction;

    const voiceChannel = member.voice.channel;
    const embed = new EmbedBuilder();

    if (!voiceChannel) {
      return interaction.reply("kompa pa nisi u kanalu");
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

      await queue.pause(voiceChannel);
      embed.setColor("Yellow").setDescription("pauziran sam");
      return interaction.reply({ embeds: [embed] });
    } catch (err) {
      console.log(err);
      return interaction.reply("nisam uspio");
    }
  },
};
