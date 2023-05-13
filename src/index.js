const { Client, IntentsBitField } = require('discord.js')
require('dotenv').config()

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
})

client.on('ready', (c) => {
  console.log(`${c.user.tag} Is online. :D`)
})

client.on('messageCreate', (msg) => {
  console.log(
    'Username: ' + msg.author.username + '#' + msg.author.discriminator
  )
  console.log('Message Content: ' + msg.content)
  console.log('Time of Creation: ' + msg.createdAt)
})

client.on('messageCreate', (msg) => {
  if (msg.author.bot) {
    return
  }

  if (msg.content === 'I love Brook so much!') {
    msg.reply("She's the Bestest and Coolest Girlfriend Ever!!!")
  }
})

client.login(process.env.DISCORD_TOKEN)
