module.exports = {
    name: 'search',
    description: 'searches wikipedia',
    execute(message, args) {
        if (!args) return message.reply('sto da tražim?');

        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=1&srsearch=${args}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const urlTitle = data.query.search[0].title.replace(/ /g, '_');
                message.channel.send(
                    `https://en.wikipedia.org/wiki/${urlTitle}`
                );
            })
            .catch(err => {
                message.react('😔');
                message.reply('nisam uspio');
            });
    },
};
