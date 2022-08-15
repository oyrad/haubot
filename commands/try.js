module.exports = {
    name: 'try',
    decrption: 'haubot tries sex',
    execute(message, args) {
        const randomNum = Math.floor(Math.random() * 101);
        if (randomNum === 69) message.channel.send('SEX!!!');
        else message.channel.send('nisam uspio ... opet');
    },
};
