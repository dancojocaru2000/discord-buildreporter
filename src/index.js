const Discord = require('discord.js')
const client = new Discord.Client()

const goodIds = ['846424493606174740']
const args = process.argv.slice(2)
const type = args[2]
const title = args[3]
const message = args[4]
function getEmbed() {
	const embed = new Discord.MessageEmbed()
		.setTitle(title)
		.setColor(0x0000ff)
		.setDescription(message)
	
	if (type == 'error') {
		embed.setColor(0xff0000)
	}
	
	return embed
}

client.login(process.env.DISCORD_TOKEN).then(function (result) {
	const channels = client.channels.cache.array()
	for (const channel of channels) {
		if (goodIds.includes(channel.id)) {
			channel.send(getEmbed())
		}
	}
	process.exit(0)
})