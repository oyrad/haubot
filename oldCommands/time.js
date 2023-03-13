module.exports = {
    name: 'time',
    description: 'shows current time',
    execute(message, args) {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        message.channel.send(
            `Trenutno vrijeme je ${hours}h ${minutes}m ${seconds}s.`
        );
    },
};
