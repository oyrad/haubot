module.exports = {
    name: 'flag',
    description: 'returns the requested flag',
    execute(message, args) {
        if (!args) return message.reply('koju zastavu hoćeš?');

        let country = args.join(' ');
        let url = `https://restcountries.com/v3.1/name/${country}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.message) return message.reply(`${country} ne postoji`);

                message.channel.send(data[0].flags.png);
            })
            .catch(err => {
                message.react('😔');
                message.reply('nisam uspio');
            });
    },
};
