//mensaje
if (!isPremium) return await kill.reply(from, 'Y se utilizo 1 limit', id)

//quita limits
if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await kill.reply(from, ind.limit(), id)
limit.addLimit(sender.id, _limit, isPremium, isOwner)