//if (mentionedJidList.length == 0) return kill.reply(from, 'Escribiste el comando muy mal, arréglalo y envíalo bien.', id)
//await kill.sendTextWithMentions(from, `Expulsando participante ${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')} del grupo...`)
//for (let i = 0; i < mentionedJidList.length; i++) {
    if (ownerNumber.includes(mentionedJidList[i])) return kill.reply(from, 'Desafortunadamente es un miembro VIP, no puedo expulsarlo.', id)
    if (groupAdmins.includes(mentionedJidList[i])) return kill.reply(from, mess.error.Ki, id)
    await kill.removeParticipant(groupId, mentionedJidList[i])