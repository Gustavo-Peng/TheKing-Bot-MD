let handler = async (m, { conn, text}) => {
    if (!text) throw '*_A QUIEN QUIERES BANEAR?_*'
    if (m.isGroup) who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    else who = m.chat
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `*_EL USUARIO FUE BANEADO CON EXITO_*\n\n*_EL USUARIO NO TENDRA PERMISO PARA USAR EL BOT_*`, m)
}
handler.help = ['banuser']
handler.tags = ['General']
handler.command = /^(ban)$/i
handler.owner = false
handler.mods = false
handler.premium = true

export default handler
