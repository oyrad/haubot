module.exports = {
  name: "help",
  description: "shows help",
  execute(message, args) {
    message.channel.send(
      "**Haubot v0.5**" +
        "\n*Developed by oyrad*" +
        "\n```Dobar dan, ja sam Haubot, imam iste funkcije kao pravi Hauba samo sam manje naporan.```" +
        "\n**Generalne komande**" +
        "```\n!hvala => nema na čemu kompa```" +
        "```\n!pozdrav => prigodno pozdravim```" +
        "```\n!vrijeme => pokažem trenutno vrijeme```" +
        "\n**Interaktivne komande**" +
        "```\n!flag {drzava} => pošaljem zastavu države```" +
        "```\n!prognoza {grad} => trenutno stanje u gradu```" +
        "```\n!trazi {pojam} => nalazim odabrani pojam```" +
        "```\n!yt {pojam} => vraćam youtube link```" +
        "\n**Player komande**" +
        "```\n!sviraj {pjesma} => odsviram ti pjesmu```" +
        "```\n!stani => mičem se s kanala```"
    );
  },
};
