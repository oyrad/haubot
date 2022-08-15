const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
    name: 'stop',
    description: 'stops playing',
    execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.reply('kompa nisi u kanalu');
        const connection = getVoiceConnection(voiceChannel.guild.id);
        message.channel.send('budi pozdravljen, nemoj šta zamjerit');
        connection.disconnect();
    },
};
