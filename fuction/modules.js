const fs = require('fs-extra')
const config = require('../lib/config/config.json')
const prefix = config.prefix

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
    return `*「 REGISTRACION 」*\n\nTe acabas de registrar correctamente:\n\n➸ *Nombre*: ${name}\n➸ *Edad*: ${age}\n➸ *ID*: ${userId}\n➸ *En el*: ${time}\n➸ *Serial*: ${serial}\n\nYa puedes usarme~`
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
exports.menu = (jumlahUser, processTime, t, moment, usuario, limit, _limit,  limitCount, timed, timedae, rank, xp, role, fort, up, pushname, requiredXp, premium, regis) => {
    return `
╭═┅〘 ❬SIMP BOT❭ 〙═╮
║┊: Hola, @${usuario}
║┊: ⃟ ⃟  ━ೋ๑————๑ೋ━* ⃟ ⃟ *      
║┊:◄✜┢┅ீ͜ৡৢ͜͡✦━━◇━━ீ͜ৡৢ͜͡✦┅┧✜►
║┊: ✨ ${xp} / ${requiredXp} XP
║┊: ⚠𝗟𝗶𝗺𝗶𝘁𝗲𝘀 *${limit.getLimit(usuario, _limit, limitCount)}*
║┊:
║┊: Estado de registro: ${regis} 
║┊:
║┊: *Tiempo de respuesta*
║┊:
║┊: *${processTime(t, moment())}* segundos
║┊:
║┊: 📆𝗙𝗲𝗰𝗵𝗮: *${timed}*
║┊: ⌚𝗛𝗼𝗿𝗮: *${timedae}*
║┊:
║┊: 🕐𝘁𝗶𝗲𝗺𝗽𝗼 𝗱𝗲 𝗮𝗰𝘁𝗶𝘃𝗶𝗱𝗮𝗱:
║┊:   *${fort(up)}*
║┊: 
║┊: 📁𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲: *${jumlahUser}* numeros
║┊: 🪀Grupo de Whatsapp:
║┊: chat.whatsapp.com/I3LZkubco693HRBciBztOC
║┊:
║┊: 𝑇ℎ𝑎𝑛𝑘𝑠 𝑡𝑜 
║┊: @Samu330 Por el diseño del menu
╰═┅ৡৢ͜͡✦═══╡AIDEN╞═══┅ৡৢ͜͡✦═╯

╭═┅〘 ❬Estadisticas❭ 〙═╮
║┊:➸ *Nombre*: ${pushname}
║┊:➸ *Nivel*: ${rank}
║┊:➸ *XP*: ${xp} / ${requiredXp}
║┊:➸ *Patente*: ${role}
║┊:➸ *Premium*: ${premium}
║┊:➸ *Limites*: ${limit.getLimit(usuario, _limit, limitCount)}
║┊:➸ *Registrado?*: ${regis}
╰═┅ৡৢ͜͡✦═══╡AIDEN╞═══┅ৡৢ͜͡✦═╯

   *⎛ Mis comandos ⎠*

_ℹ️ - 🛑Si algún comando no funciona significa que el servidor se ha bloqueado y es necesario esperar a que vuelva._


👑Para empezar, usa el comando */aiden*

🏆GRACIAS POR USAR MI BOT🏆

Referencias y iconos
El icono '⌛' Significa que solo puedes usar el comando una vez por dia.
El icono '☣' Significa que el comando usa limites, Para ver tus limites mira arriba o usa /limit


_____________________________________________


_Si notas algun error, usa el comando:_ */help*
_Para que aiden pueda arreglar ese error:D_
*GRACIAS:)*
 

✅ _PORFAVOR, USA BIEN LOS COMANDOS PARA QUE FUNCIONEN SIN ERRORES_

 _${prefix}level_
*VEA SU RANKING Y NIVEL*

_${prefix}players_ ⌛
*LISTO DE LOS 10 JUGADORES CON MAS xp*

*1 - ${prefix}iris (msg)*
_Quiere chatear un rato?_

*2 - ${prefix}sticker* ☣
_Haz que tus imágenes se conviertan en stikers rápidamente!_

*3 - ${prefix}gif* ☣
_Con eso también puedes hacer stikers con gifs!_

*4 - ${prefix}donate*
_Ayudame con tu suscripcion pls:)_

*5 - ${prefix}speak <msg>*
_Vamos a conversar por voz?_

*6 - ${prefix}creador*
_Conoce al chico genial que me construyó.._

*7 - ${prefix}dog*
_¿Amas a los cachorros? Porque yo no!_

*8 - ${prefix}ping*
_Bueno, esto es para medir lo rápido que soy._

*9 - ${prefix}tts (sigla de idioma) [frase]*
_¡También puedo imitar! Por voz!_

*10 - ${prefix}Idiomas*
_para usar con el comando superior._

*11 - ${prefix}groupinfo*
_Ver alguna información de este grupo._

*12 - ${prefix}anime [nombre]*
_Con eso buscas un anime._

*13 - ${prefix}loli*
_Lolis son para dar amor y cariño..._

*14 - ${prefix}waifu*
_Con eso mando foto de hermosa waifus._

*15 - ${prefix}neko*
_Bueno ... a veces un neko va bien_

*16 - ${prefix}Frase*
_En este comando te mando anime o frases inspiradoras._

*17 - ${prefix}randomAnime*
_Envía esto y te enviaré fotos de anime al azar._

*18 - ${prefix}getmeme*
_¿Por qué no disfrutar de algunos memes?_

*19 - ${prefix}Husb*
_Esto es lo mismo que waifu, pero en una versión masculina._

*20 - ${prefix}Light <Frase>*
_Uma logo de neon em luz._

*21 - ${prefix}Wallpaper (Nombre)*
_¿Quieres conseguir algunos fondos de pantalla? Quedate conmigo!_

*22 - ${prefix}quote*
_¿Qué tal si creas tu propia frase inspiradora?_

*23 - ${prefix}search (envie una foto)*
_Con eso puedes buscar fotos para encontrar el nombre del anime._

*24 - ${prefix}randomwall*
_Más fondos de pantalla de anime, pero esta vez son personajes._

*25 - ${prefix}botstat*
_Pongo aquí mucha de mi información sobre mensajes._

*26 - ${prefix}add (numero)*
_Con esto puedes agregar a tus amigos sin preguntarle al administrador._

*27 - ${prefix}SNoBG*
_Esto es para hacer stiker sin fondo._

*28 - ${prefix}ownerGroup*
_¿Quieres conocer al dueño del grupo pero te da pereza anotar los números? Utilizar esto!_

*29 - ${prefix}link*
_Si desea obtener el enlace del grupo, simplemente use este comando._

*30 - ${prefix}adms*
_Con eso llamo y les muestro quienes son los ADMS del grupo._

*31 - ${prefix}pokemon*
_¿Quieres ver fotos de pokemons?_

*32 - ${prefix}Flip*
_El viejo juego de aguila y sol..._

*33 - ${prefix}Roll*
_Este es el famoso juego de pareja o impar, es decir, dados._

*34 - ${prefix}poll*
_Consultar encuestas activas._

*35 - ${prefix}vote (número)*
_Vota en una encuesta si tienes una encuesta..._

*36 - ${prefix}newpoll (nombre)*
_Crea una encuesta para que otros voten._

*37 - ${prefix}ins (nombre)*
_Agregar opciones de votación en la encuesta._

*38 - ${prefix}dva*
_Para obtener fotos del DVA de OverWatchh._

*39 - ${prefix}hug*
_Aquí es donde pongo lindas imágenes que tienen un abrazo entre personajes de anime._

*40 - ${prefix}Baguette*
_¿Es hora de mi rollo?!_

*41 - ${prefix}Yuri*
_En caso de que te guste algo más lésbico en el anime, aquí tienes._

*42 - ${prefix}kiss @etiqueta a alguien*
_Haré que tu y tu amado se besen!_

*43 - ${prefix}girl*
_En caso de que seas feo, puedes conseguir fotos de chicas guapas aquí:(_

*94 - ${prefix}Math <expresion>*
_Realiza calculos matematicos._

*45 - ${prefix}screenshot*
_¿Tiene miedo de acceder a sitios web? Usa esto y te mostraré lo que hay dentro!_

*46 - ${prefix}Life*
_¿Qué tal si acechamos a alguien al azar en el mundo hoy??_

*47 - ${prefix}Fox*
_Lindos pequeños zorros, y no, no estoy hablando de Kurama, sino de los reales.!_

*48 - ${prefix}ID*
_Adquirir una identificación para chatear._

*49 - ${prefix}Random <assunto>*
_Si uso esto, elegiré a alguien al azar del grupo.._

*50 - ${prefix}image <nombre>*
_¿No hay Internet fuera de WhatsApp? Puedo ayudar enviando fotos desde pinterest._

*51 - ${prefix}gato*
_Lo mas hermoso que puede existir._

*52 - ${prefix}msg <frase>*
_Vamos a brincar de mimica por texto?_

*53 - ${prefix}make <frase>*
_Si quieres escribir en mi diario ~Death Note~ usa esto._

*54 - ${prefix}slogan <Nombre>*
_Puedo hacer lindos lemas para ti._

*55 - ${prefix}img <marque un sticker>*
_Si quieres obtener una foto de un stiker, puedo convertirla por ti._

*56 - ${prefix}Giphy <Link de giphy>*
_Haz stikers por enlace usando el sitio web giphy, es muy bueno._

*57 - ${prefix}send <link de imagen>* 
_Si quieres, puedo enviar las fotos desde un enlace.._

*58 - ${prefix}slap @marque_alguén*
_Golpea al que te cae mal>:v._

*59 - ${prefix}sip <Digite un IP>*
_Puedo obtener información de una IP._

*60 - ${prefix}scep <Digite un CEP>*
_Si quieres puedes pedirme que busque un código postal._

*61 - ${prefix}ship <@persona @persona>*
_¿Quieres saber cuánto coinciden tus amigos?_

*62 - ${prefix}Mac <número do MAC>*
_Con eso buscaré donde está el MAC._

*63 - ${prefix}Macaco*
_Obtén algunas fotos de monos aquí.._

*64 - ${prefix}Gender <nombre>*
_Si quieres saber sobre el nombre de alguien, usa este._

*65 - ${prefix}Death <nombre>*
_Calcularé la edad a la que morirás en función de las últimas muertes registradas._

*66 - ${prefix}simg <Usa una imagen>*
_Puedo buscar imágenes en Internet usando este comandoo._

*67 - ${prefix}upimg <Use una imagen>*
_Si usa este comando, subiré sus imágenes que duran 1 día._

*68 - ${prefix}store <nombre>*
_¿Obtener información de las aplicaciones de PlayStore? Con eso puedo ayudarte._

*69 - ${prefix}contar <mensage>*
_Quieres contar las letras que tienes en un texto?_

*70 - ${prefix}inverter <frase>*
_Si quieres invertir las palabras tenemos esto._

*71 - ${prefix}Google <xxx>*
_Busca cosas en Google._

*72 - ${prefix}baka*
_"Bakaaa!"_

*73 - ${prefix}ball*
_8 Ball de frases aleatorias._

*74 - ${prefix}cocegas*
_Hmmm, cosquillas en el anime, creo..._

*75 - ${prefix}Lizard*
_Fotinhas de lagarto nerr._

*76 - ${prefix}feed*
_Eventos relacionados con la comida en el anime._

*77 - ${prefix}quack*
_Ui ui, ve algunos patos ~gansos~ o lo que sea...?_

*78 - ${prefix}poke*
_Toma unos petelecos!_

*79 - ${prefix}cafune*
_Todos amamos a cafune..._

*80 - ${prefix}Kisu*
_Imagenes de besos..._

*81 - ${prefix}Tapa*
_Fotos de Pats!_

*82 - ${prefix}Truth*
_Algunas verdades sobre el universo del anime._

*83 - ${prefix}Icon*
_Iconos para por tu perfil._

*84 - ${prefix}Resposta <frase>*
_Agregue respuestas sobre Iris._

*85 - ${prefix}Face*
_Icono de cara de chicas animee._

*86 - ${prefix}Yaoi*
_Yaoi sin hentai._

*87 - ${prefix}Look*
_Ojos en la pantalla eheheh_

*88 - ${prefix}Holo*
_Imágenes de personajes holo._

*89 - ${prefix}pornhub <texto 1 | texto 2>*
_Crea tu propio logo de PornHub._

*90 - ${prefix}3D <texto>*
_Crear texto 3D._

*91 - ${prefix}Logo <nombre>*
_Crea logotipos negros y rosas._

*92 - ${prefix}gaming <nombre>*
_Crea logotipos de jugadores._

*93 - ${prefix}brainly <pergunta>*
_Busca mentalmente_

*94 - ${prefix}ttp <frase>*
_Convierte frases en stickers._

*95 - ${prefix}Neon <Frase1|Frase2|Frase3>*
_Un logotipo de neón estilo hackerman.._

*96 - ${prefix}Fogareu <Nick>*
_Crea logotipos de PUBG._

*96 - ${prefix}Thunder <frase>*
_Un logotipo de cielo con truenos.._

*97 - ${prefix}Wolf <Frase1|Frase2>*
_Logo de Lobos._

*98 - ${prefix}Light <Frase>*
_Un logo de neón en la luz.._

*99 - ${prefix}modd <nombre>*
_Aplicaciones mod._

*100 - ${prefix}happymod <nombree>*
_Busque apps en happymod._

*101 - ${prefix}stalkig <username>*
_Stalkeie instagram._

*102 - ${prefix}stalktw <username>*
_stalkeie twitter._

*103 - ${prefix}maps <local>*
_Muestra el mapa de una ubicación._

*104 - ${prefix}clima <ciudad>*
_Infórmate del clima actual de tu ciudad._

*105 - ${prefix}nasa -data <año/mes/dia>*
_Obtenha informações da nasa._

*106 - ${prefix}ptt <etiqueta un audio>*
_Haz que el bot grabe los audios del grupo/personas como si fuera suyo._

*107 - ${prefix}get <marque un archivo>*
_Pídale al bot que vuelva a enviar un archivo._

*108 - ${prefix}conv -h*
_Convertir temperatura o distancia._

*109 - ${prefix}fatos*
_Cuenta hechos de animales_

*110 - ${prefix}gado <@persona>*
_Mira lo fría que es._

*111 - ${prefix}aki*
_Jugar akinator._

*112 - ${prefix}curiosidade*
_Obtener curiosidades._

*113 - ${prefix}valor <cantidad/Tipo de Moneda>*
_Convertir monedas de otros países._

*114 - ${prefix}oculto*
_???_

*115 - ${prefix}detector*
_Detecta chicas calientes en el grupo._

*116 - ${prefix}gamemode <tipo>*
_Zonas solo comando de minecraft._

*117 - ${prefix}rolette*
_Jugar a la ruleta rusa._

*118 - ${prefix}Chance <De que>*
_Calcule los chances._

*119 - ${prefix}data*
_Data del sistema._

*120 - ${prefix}trecho*
_Frases de personas._

*121 - ${prefix}placa <aaa1111>*
_Extraer información del vehículo._

*122 - ${prefix}scnpj <27865757000102>*
_Extraer datos de un CNPJ._

*123 - ${prefix}coins*
_Vea la lista de monedas para usar en el comando 113, es una lista gigante._

*124 - ${prefix}wasted <foto>*
_Crea una imagem de wasted igual ao GTA V._

*Si un día mi creador llega a dejar todo, se colocarán tutoriales en /Readme.*`
}
exports.limit = () => {
    return `
*── 「 LIMITES 」 ──*
Tus limites han acabado, Compra mas (/limit) o vuelve mañana :D
❏ *_Normalmente se reestablece a las 00:00 WIB_*
    `
}
exports.daily = (time) => {
    return `Este comando esta limitado a una vez por dia.\nEspere *${time.hours}* Horas *${time.minutes}* minutos y *${time.seconds}* segundos para usarlo⌛.`
}
exports.unmenu = (usuario, regist) => {
    return`Hola usuário "@${usuario}"!

➸ *Registrado?*: ${regist} (Veo que no estas registrado, 
A continuacion aparece un menu para no registrados)

➸ /register nombre | edad

Para ver mas comandos Registrate :D
`
}
exports.antiflood = () => {
    return`
*── 「 ANTIFLOOD 」 ──*
❏uh... Estamos limitados a hacer comandos cada 15 segundos
Por favor espera para volver a intentarlo
`
}
exports.doneOwner = () => {
    return `Esta terminado, Señor aiden~`
}
exports.errors = (pushname, geterr) => {
    return`*── 「 ⚠️ERROR⚠️ 」 ──*
╭═┅〘 ❬${pushname}❭ 〙═╮
║┊: ❏Mi sistema ha detectado un fallo con tu comando,
║┊: Por favor no intentes usar ese comando de nuevo
║┊:
║┊: Y si es posible reporta este error con /help el comando ${geterr} No funciona
║┊:
║┊: El log error ha sido enviado a mi grupo de soporte
║┊:
║┊: Si quiere reportar este error envie el comando qaue el bot le mostrara a continuacion
╰═┅ৡৢ͜͡✦═══╡ERROR╞═══┅ৡৢ͜͡✦═╯
`
}
exports.logerror = (err) => {
    return`*── 「 ⚠️ERROR⚠️ 」 ──*
${err}
`
}
exports.profileLOL = (err) => {
    return`*── 「 Datos del perfil..✨ 」 ──*

🔖 ¿Cuál es tu etiqueta de usuario? getetiqs
   
👑 Administrador? admsg
   
💌 Estado?
scstado

*── 「 Informacion..✨ 」 ──*
One day command,
Cuanto tiempo falta?: oneday.gettime
Limites: limtsf
Nivel: rank.getlevel
XP: rank.getxp
Premium: premium.getprem
Advertencias bodvertencias/3
`
}