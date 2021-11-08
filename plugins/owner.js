function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '6283144570377', 'RakuChan', m)
stc = conn.sendContact(m.chat, '6288245009287', 'ARIE TUBE✓', m)
  conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Developer A R I E T U B E *', 'status@broadcast')
}
handler.command = ['owner']

module.exports = handler