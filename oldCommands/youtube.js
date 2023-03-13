module.exports = {
    name: 'youtube',
    description: 'sends youtube link',
    execute(message, args) {
        if (args.length === 0) return message.reply('što da pošaljem?');

        const search = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.YOUTUBE_KEY}&type=video&q=${args}&maxResults=1`;

        fetch(search)
            .then(res => res.json())
            .then(data => {
                if (data.pageInfo.totalResults === 0)
                    return message.reply('nisam ništa pronašao');

                const url = `https://www.youtube.com/watch?v=${data.items[0].id.videoId}`;
                message.channel.send(url);
            });
    },
};
