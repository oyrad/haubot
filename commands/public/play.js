const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const client = require("../../bot");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sviraj")
    .setDescription("odsviram")
    .addStringOption((optn) =>
      optn
        .setName("što")
        .setDescription("daj mi što da sviram")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options, member, guild, channel } = interaction;

    const query = options.getString("što");
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
      client.distube.play(voiceChannel, query, {
        textChannel: channel,
        member: member,
      });
    } catch (err) {
      console.log(err);
      embed.setColor("Red").setDescription("nisam uspio");
      return interaction.reply({ embeds: [embed] });
    }
  },
};
