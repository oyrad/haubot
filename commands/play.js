const {
    AudioPlayerStatus,
    joinVoiceChannel,
    createAudioPlayer,
    createAudioResource,
} = require('@discordjs/voice');
const ytdl = require('ytdl-core');

module.exports = {
    name: 'play',
    description: 'play selected song',
    execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.reply('kompa nisi u kanalu');

        if (args.length === 0) return message.reply('a gdje je pjesma?');

        const search = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.YOUTUBE_KEY}&type=video&q=${args}&maxResults=1`;

        fetch(search)
            .then(res => res.json())
            .then(data => {
                if (data.pageInfo.totalResults === 0)
                    return message.reply('nisam ništa pronašao');

                const url = `https://www.youtube.com/watch?v=${data.items[0].id.videoId}`;
                const connection = joinVoiceChannel({
                    channelId: voiceChannel.id,
                    guildId: message.guild.id,
                    adapterCreator: message.guild.voiceAdapterCreator,
                });
                const stream = ytdl(url, { filter: 'audioonly' });

                const player = createAudioPlayer();
                const resource = createAudioResource(stream);

                player.play(resource);
                connection.subscribe(player);

                player.on(AudioPlayerStatus.Idle, () => connection.destroy());

                message.channel.send('**Sviram**');
                message.channel.send(url);
            })
            .catch(err => console.log(err));
    },
};
