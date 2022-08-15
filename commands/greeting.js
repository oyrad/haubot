module.exports = {
    name: 'greeting',
    description: 'a simple greet based on the time of day',
    execute(message, args) {
        const hour = new Date().getHours();

        if (hour > 6 && hour < 12) message.reply('Dobro jutro!');
        else if (hour > 12 && hour < 18) message.reply('Dobar dan!');
        else if (hour > 18 && hour < 23) message.reply('Dobra večer!');
        else message.reply('Laku noć!');
    },
};
