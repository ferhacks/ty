const warnss = require(./fuction)

const _warn = JSON.parse(fs.readFileSync('./database/warn.json'))
const warnCount = 1

case 'warn' :
    if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner) {
        if (!isBotGroupAdmins) return kill.reply(from, mess.error.Ba, id)
        if (quotedMsg) {
            const war = quotedMsgObj.sender.id
            const warss = warnss.getwarns(war, _warn, warnCount)
            if (Number(warss) >= 5) {
                kill.sendTextWithMentions(from, `@${war} ha alcanzado los limites, La sancion es: Expulsar`) 
                await kill.removeParticipant(groupId, war)
                warnss.resetwarn(war, _warn)
            } else {
            warnss.addwarn(war, _warn)
            kill.sendTextWithMentions(from, `@${war} Ha sido advertido \n\n${warss}/5\n\n Si tus advertencias llegan a 5 Seras sancionado`)
            }
            
        }}

    break