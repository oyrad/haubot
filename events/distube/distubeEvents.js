const client = require("../../bot");
const { EmbedBuilder } = require("discord.js");

client.distube
  .on("playSong", (queue, song) => {
    queue.textChannel.send({
      embeds: [
        new EmbedBuilder()
          .setColor("Green")
          .setDescription(
            `Trenutno svira **[${song.name}](${song.url})** - \`${song.formattedDuration}\``
          )
          .setThumbnail(song.thumbnail),
      ],
    });
  })
  .on("addSong", (queue, song) =>
    queue.textChannel.send({
      embeds: [
        new EmbedBuilder()
          .setColor("DarkGreen")
          .setDescription(
            `${song.user} dodao ${song.name} - \`${song.formattedDuration}\` u queue`
          )
          .setThumbnail(song.thumbnail),
      ],
    })
  )
  .on("addList", (queue, playlist) =>
    queue.textChannel.send({
      embeds: [
        new EmbedBuilder()
          .setColor("Green")
          .setDescription(
            `Added \`${playlist.name}\` playlist (${
              playlist.songs.length
            } songs) to queue\n${status(queue)}`
          ),
      ],
    })
  )
  .on("error", (channel, e) => {
    if (channel)
      channel.send(`⛔ | An error encountered: ${e.toString().slice(0, 1974)}`);
    else console.error(e);
  })
  .on("empty", (channel) =>
    channel.send({
      embeds: [
        new EmbedBuilder()
          .setColor("Red")
          .setDescription("nema nikog u kanalu, odlazim pozdravljen"),
      ],
    })
  )
  .on("searchNoResult", (message, query) =>
    message.channel.send({
      embeds: [
        new EmbedBuilder()
          .setColor("Red")
          .setDescription(`nisam ništa našao s nazivom \`${query}\`!`),
      ],
    })
  )
  .on("finish", (queue) =>
    queue.textChannel.send({
      embeds: [
        new EmbedBuilder()
          .setColor("White")
          .setDescription("gotov sam, budite pozdravljeni"),
      ],
    })
  );
