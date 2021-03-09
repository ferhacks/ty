case 'play':
    if (!isRegistered) return await kill.reply(from, ind.notRegistered(), id)
    if (mute || pvmte) return console.log('Comando ignorado.')
    if (args.length == 0) return kill.reply(from, 'Lo usaste incorrectamente.', id)
    axios.get(`https://docs-jojo.herokuapp.com/api/yt-search?q=${body.slice(6)}`)
    .then(async (res) => {
        const pyre = res.data.result.result[0].publishedTime
        if (pyre == '' || pyre == 'null' || pyre == null || pyre == undefined || pyre == 'undefined') {
            var playre = 'Indefinido'
        } else if (pyre.endsWith('years ago')) {
            var playre = pyre.replace('years ago', 'Anos atrás')
        } else if (pyre.endsWith('hours ago')) {
            var playre = pyre.replace('hours ago', 'Horas atrás')
        } else if (pyre.endsWith('minutes ago')) {
            var playre = pyre.replace('minutes ago', 'Minutos atrás')
        } else if (pyre.endsWith('day ago')) {
            var playre = pyre.replace('day ago', 'Dia atrás')
        } else if (pyre.endsWith('months ago')) {
            var playre = pyre.replace('months ago', 'Meses atrás')
        } else if (pyre.endsWith('seconds ago')) {
            var playre = pyre.replace('seconds ago', 'Segundos atrás')
        }
        const asize = await axios.get(`http://st4rz.herokuapp.com/api/yta?url=http://youtu.be/${res.data.result.result[0].id}`)
        const afsize = asize.data.filesize.replace(' MB', '')
        console.log(afsize)
        if (afsize >= 16.0 || asize.data.filesize.endsWith('GB')) {
            kill.reply(from, `Lo sentimos, para evitar prohibiciones de WhatsApp, el límite de envío de audio es de 16 MB, y esto tiene ${asize.data.filesize}.`, id)
        } else {
            await kill.sendFileFromUrl(from, `${res.data.result.result[0].thumbnails[0].url}`, ``, `⚠Titulo: ${res.data.result.result[0].title}\n\n📁Link: https://youtu.be/${res.data.result.result[0].id}\n\n🕐Duracion: ${res.data.result.result[0].duration} minutos\n\n🔥Hace: ${playre}\n\n✨Visualizaciones: ${res.data.result.result[0].viewCount.text}\n\nEspero haberlo hecho bien y ... ahora solo espera, no lo vuelvas a usar hasta que termine esto!`, id)
            axios.get(`http://st4rz.herokuapp.com/api/yta2?url=http://youtu.be/${res.data.result.result[0].id}`)
            .then(async(rest) => {
                var m3pa = rest.data.result
                var m3ti = rest.data.title
                await kill.sendFileFromUrl(from, m3pa, '', '', id)
            })
        }
    })
    break
    
    
case 'video':
    if (!isRegistered) return await kill.reply(from, ind.notRegistered(), id)
    if (mute || pvmte) return console.log('Comando ignorado.')
    if (args.length == 0) return kill.reply(from, 'Lo usaste incorrectamente.', id)
    axios.get(`https://docs-jojo.herokuapp.com/api/yt-search?q=${body.slice(6)}`)
    .then(async (res) => {
        const vyre = res.data.result.result[0].publishedTime
        if (vyre == '' || vyre == 'null' || vyre == null || vyre == undefined || vyre == 'undefined') {
            var videore = 'Indefinido'
        } else if (vyre.endsWith('years ago')) {
            var videore = vyre.replace('years ago', 'Anos atrás')
        } else if (vyre.endsWith('hours ago')) {
            var videore = vyre.replace('hours ago', 'Horas atrás')
        } else if (vyre.endsWith('minutes ago')) {
            var videore = vyre.replace('minutes ago', 'Minutos atrás')
        } else if (vyre.endsWith('day ago')) {
            var videore = vyre.replace('day ago', 'Dia atrás')
        } else if (vyre.endsWith('months ago')) {
            var videore = vyre.replace('months ago', 'Meses atrás')
        } else if (vyre.endsWith('seconds ago')) {
            var videore = vyre.replace('seconds ago', 'Segundos atrás')
        }
        const size = await axios.get(`http://st4rz.herokuapp.com/api/ytv?url=http://youtu.be/${res.data.result.result[0].id}}`)
        const fsize = size.data.filesize.replace(' MB', '').replace('Download  ', 'Impossivel calcular')
        console.log(fsize)
        const impo = size.data.filesize.replace('Download  ', 'un peso mucho mayor que no puedo calcular')
        if (fsize >= 16.0 || size.data.filesize.endsWith('Download  ') || size.data.filesize.endsWith('GB')) {
            kill.reply(from, `Lo sentimos, para evitar prohibiciones de WhatsApp, el límite de envío de audio es de 16 MB, y esto tiene ${impo.replace('    ', ' ')}.`, id)
        } else {
            await kill.sendFileFromUrl(from, `${res.data.result.result[0].thumbnails[0].url}`, ``, `⚠Titulo: ${res.data.result.result[0].title}\n\n📁Link: https://youtu.be/${res.data.result.result[0].id}\n\n🕐Duracion: ${res.data.result.result[0].duration} minutos\n\n🔥Hace: ${videore}\n\n☢Visualizaciones: ${res.data.result.result[0].viewCount.text}\n\nEspero haberlo hecho bien y ... ahora solo espera, no lo vuelvas a usar hasta que termine esto`, id)
            axios.get(`http://st4rz.herokuapp.com/api/ytv2?url=https://youtu.be/${res.data.result.result[0].id}`)
            .then(async(rest) => {
                await kill.sendFileFromUrl(from, `${rest.data.result}`, ``, ``, id)
            })
        }
    })
    break