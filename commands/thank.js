module.exports = {
    name: 'thank',
    description: 'haubot thanks you',
    execute(message, args) {
        if (message.author.tag === 'Hauba#8403')
            return message.reply('pa neću sebe hvalit');
        message.react('❤️');
        message.reply(
            `sve za brata rođenog ${message.author.tag.split('#')[0]}!`
        );
    },
};
