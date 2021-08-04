const Discord = require('discord.js')
const client = new Discord.Client()
const login = require('./login.js')

var prefix = 'h'
let exp = new RegExp("(?<=^" + prefix + "(?:(?!!)|!)).+", "gi")

client.on('ready', () => { // Mensaje para la consola avisando que ya se puede usar el bot.
    console.log(`Bot is ready to use!`)
})

client.on('message', message => {
    if (!message.author.bot) { // Comprueba que el mensaje escrito no sea de un bot
        // console.log(`Se recibió mensaje de: ${message.author.id}`)
        console.log(`Se recibió mensaje de: ${message}`)

        let res = message.content.match(exp)
        console.log(res)
        if (res != null) {
            let action = res[0].replace(/^!/, '')
            switch (true) {
                case /^help$/gi.test(action):
                    const helpMsg = require('./help.js')
                    message.author.send(helpMsg(new Discord.MessageEmbed()))
                    message.react('📫').then(console.log).catch(console.log)
                    break
                case /^newgame$/gi.test(action):
                    HungerGames(message)
                    break
                case /^join/gi.test(action):
                    let arr_nom = action.trim().match(/<@!\d+>|\w+/gi)
                    //console.log(arr_nom)
                    break
            }
        }

        // if (message.content === "%Hey") {
        //     //message.channel.send(`Hola **${message.member.user.username}**`)
        //     message.channel.send(`Hola **${message.member.displayName}**`)
        // }
    }
})

function HungerGames(message) {
    const NG = new Discord.MessageEmbed()
    .setTitle(':crossed_swords: Hunger Games :crossed_swords:')
    .setColor(0x00bd00)
    .setDescription('Stalls have been opened for the hunger games!\nEnter the match with the command `join`.')
    
    message.channel.send(NG).then(message => {
        let seconds = 10;
        console.log(message)
    }).catch(console.log)
}

client.login(login)
