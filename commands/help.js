module.exports = {
    name: 'help',
    description: 'shows help',
    execute(message, args) {
        message.channel.send(
            '**Haubot v0.5**' +
                '\n*Developed by oyrad*' +
                '\n```Dobar dan, ja sam Haubot, imam iste funkcije kao pravi Hauba samo sam manje naporan.```' +
                '\n**Komande**' +
                '```\n!flag {drzava} => zastava drzave```' +
                '```\n!hvala => nema na cemu```' +
                '```\n!pomoc => ova pomoć```' +
                '```\n!pozdrav => prigodno pozdravim```' +
                '```\n!prognoza {grad} => trenutno stanje u gradu```' +
                '```\n!trazi {pojam} => nalazim odabrani pojam```' +
                '```\n!vrijeme => pokažem trenutno vrijeme```'
        );
    },
};
