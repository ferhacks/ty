const fs = require('fs-extra')

exports.afkOn = (pushname, reason) => {
    return `AFk esta activado!!!\n\n➸ *Usuario*: ${pushname}\n➸ *Razon*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Afk ya esta activado.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Este men esta afk!\n➸ *Razon*: ${getReason}\n➸ *hace*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* Ya no esta Afk`
}
exports.notRegistered = () => {
    return `Uh.. Parece que no estas registrado, Usa \n*/register* mombre | edad!!`
}

exports.registered = (name, age, userId, time, serial) => {
    return `*「 REGISTRACION 」*\n\nTe acabas de registrar correctamente:\n\n➸ *Nombre*: ${name}\n➸ *Edad*: ${age}\n➸ *ID*: ${userId}\n➸ *En el*: ${time}\n➸ *Serial*: ${serial}\n\nUsa *${prefix}rules* terlebih dahulu ya~`
}

exports.registeredAlready = () => {
    return `Ya estas en mi sistema`
}
exports.notPremium = () => {
    return `No eres premium`
}
exports.pcOnly = () => {
    return `Es solo para mi privado.`
}
exports.wrongFormat = () => {
    return `Lo acabas de hacer mal, hazlo como aparece en /menu*.`
}
exports.ageOld = () => {
    return `Asegurate de poner tu edad real, si es la real, Haz exedido los limites`
}