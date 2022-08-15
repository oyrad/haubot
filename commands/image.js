const scraper = require('images-scraper');

const google = new scraper({
    pupeteer: {
        headless: true,
    },
});

module.exports = {
    name: 'image',
    description: 'sends image frm google',
    async execute(message, args) {
        if (!args) return message.reply('što da tražim?');
        const imageQuery = args.join(' ');

        const imageResults = await google.scrape(imageQuery);
        message.channel.send(imageResults[0].url);
    },
};
