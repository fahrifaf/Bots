let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *INFO* ❭❀°━━┓
┃
┃> Bot Recoded By :
┃• ARIE TUBE
┃
┃> Bot Dibuat Dengan :
┃• JavaScript via NodeJS
┃• FFmpeg
┃
┃> Thanks To :
┃• Nurutomo
┃• Wa Gamer
┃• RC047/Kuhong
┃
┣━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *pulsa:* [088245009287]
┣➥ *Dana:* [088245009287]
┣➥ *Gopay:* [088245009287]
┣➥ *Ovo:* [088245009287]
┃ 「 *Chat OWNER* 」
┃ > *INGIN DOANSI ? https://wa.me/6288245009287*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*ARIE TUBE TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
