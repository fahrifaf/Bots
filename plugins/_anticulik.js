let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Gopay:* 6288245009287
• *Telkomsel:* 6288245009287
• *Indosat:* 6288245009287

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *follow ig* https://instagram.com/caliph91_

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6288245009287', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler