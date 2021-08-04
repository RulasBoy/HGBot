module.exports = (embed) => {
    embed.setTitle('Hunger Bot Commands')
    .setColor(0x00c3ff)
    .setDescription('Type `hghelp command` for more information about a particular command.')
    .addField(':gear: Setup', '`channel`, `nextmode`, `nexttimer`, `max`, `language`', true)
    .addField(':crossed_swords: Hunger Games', '`newgame`, `start`, `pause`, `resume`, `terminate`, `join`, `status`, `leave`', true)
    .addField(':information_source: Information', '`introduction`, `infoserver`, `infouser`, `help`', true)
    return embed
}