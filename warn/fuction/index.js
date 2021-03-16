case 'limit':
    const equs = '300'
    if (ar[0] === 'shop') {
        if (isPremium || isOwner) return await kill.reply(from, '⤞ No se pudo completar la transaccion, Eres premium', id)
        const checkk = rank.getXp(sender.id, nivel)
        if (Number(checkk) <= 300 ) return await kill.reply(from, 'Nesecitas ~500~ 300 XP', id)
        limit.shopLimit(sender.id, _limit)
        rank.delXp(sender.id, Number(equs), nivel)
        await kill.reply(from, '1 Limite comprado, -300 XP', id)
    } else {
    if (isPremium || isOwner) return await kill.reply(from, '⤞ Limites Restantes: ∞ (Infinito)', id)
    await kill.reply(from, `⤞ Limites Restantes: ${limit.getLimit(sender.id, _limit, limitCount)} / 25\n\n*_Los limites se reestablecen cada 00:00 WIB_*\n\n_*Para comprar limites usa /limit shop, Pero ojo, un limite cuesta 500 xp*`, id)
    }
break