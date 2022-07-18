const Discord = require("discord.js")

const TOKEN = "OTk4NDA4NjIyNTY2NTM5MzQ0.G9IRdA.CYCZNSlVRjiAywyVBn4tpTqeEs07eSG2BiXvbg"

const client = new Discord.Client({
    intents: [
        "Guilds",
        "GuildMessages"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content === "Welcome") {
        message.reply("Hello World!")
}





})

client.login(TOKEN)