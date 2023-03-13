const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const client = require("../../bot");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("play song")
    .addStringOption((optn) =>
      optn.setName("query").setDescription("provide name")
    ),
  async execute(interaction) {
    const { options, member, guild, channel } = interaction;

    const query = options.getString("query");
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
      return interaction.reply({ content: "Request recieved" });
    } catch (err) {
      console.log(err);
      embed.setColor("Red").setDescription("nisam uspio");
      return interaction.reply({ embeds: [embed] });
    }
  },
};
