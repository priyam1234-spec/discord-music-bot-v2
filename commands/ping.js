const {
  MessageEmbed
} = require("discord.js");

exports.run = async (client, message) => {
try {
      const {
        member,
        guildId,
        guild
      } = message;
      const {
        channel
      } = member.voice;
      await message.reply({
          content: `${client.allEmojis.loading} Pinging...`,
          ephemeral: true
        })
        .then(newMsg => newMsg.edit({
          content: `⏳Bot Latency: \`[ ${Math.floor((Date.now() - message.createdTimestamp) - 2 * Math.floor(client.ws.ping))}ms ]\`\n💓Api Latency: \`[ ${Math.floor(client.ws.ping)}ms ]\``,
          ephemeral: true
        }).catch(e => {
          return console.log(e)
        }))
        .catch(e => {
          console.log(e)
        })

    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
}
