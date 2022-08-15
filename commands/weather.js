module.exports = {
    name: 'weather',
    description: 'gives weather',
    execute(message, args) {
        if (!args) return message.reply('daj mi grad');

        let location = args.join(' ');
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OWM_KEY}&lang=hr`
        )
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    message.reply(`aj ne seri, grad ne postoji`);
                    return;
                }
                message.channel.send(
                    `**${data.name}** \nTemperatura je *ugodnih* ${Math.round(
                        data.main.temp - 273.15
                    )}° C, a vani ${data.weather[0].description}.`
                );
            })
            .catch(err => {
                console.log(err);
            });
    },
};
