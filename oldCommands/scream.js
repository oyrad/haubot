module.exports = {
  name: "scream",
  description: "screams",
  execute(message, args) {
    if (message.author.tag === "oyrad#5753") {
      const sentence = args.join(" ").toUpperCase();
      for (let i = 0; i < 5; i++) message.channel.send(sentence);
    } else return message.reply("to je samo za mog tvorca, legendu oyrada");
  },
};
