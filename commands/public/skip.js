const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const client = require("../../bot");

module.exports = {
  data: new SlashCommandBuilder().setName("skip").setDescription("skip song"),
  async execute(interaction) {
    const { member, guild, channel } = interaction;

    const voiceChannel = member.voice.channel;
    const embed = new EmbedBuilder();

    if (!voiceChannel) {
      embed.setColor("Red").setDescription("kompa nisi u kanalu");
      return interaction.reply({ embeds: [embed] });
    }

    if (!member.voice.channelId === guild.members.me.voice.channelId) {
      embed
        .setColor("Red")
        .setDescription(`vec aktivan u <#${guild.members.me.voice.channelId}>`);
      return interaction.reply({ embeds: [embed] });
    }

    try {
      const queue = await client.distube.getQueue(voiceChannel);

      if (!queue) {
        embed.setColor("Red").setDescription("no queue active");
        return;
      }

      await queue.skip(voiceChannel);
      embed.setColor("Blue").setDescription("skipped song");
      return interaction.reply({ embeds: [embed] });
    } catch (err) {
      console.log(err);
      embed.setColor("Red").setDescription("nisam uspio");
      return interaction.reply({ embeds: [embed] });
    }
  },
};
