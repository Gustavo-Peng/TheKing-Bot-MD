let handler = async (m, { conn, command, usedPrefix, text }) => {
if (!text) throw `[βππππβ] πππ°π *${usedPrefix}listmsg* *πΏπ°ππ° ππ΄π π»π° π»πΈπππ°*`
let msgs = global.db.data.msgs
if (!text in msgs) throw `*[βππππβ] '${text}' π½πΎ ππ΄πΆπΈππππ°π³πΎ π΄π½ π»π° π»πΈπππ° π³π΄ πΌπ΄π½ππ°πΉπ΄π*`
let _m = await conn.serializeM(msgs[text])
await _m.copyNForward(m.chat, true)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'get' + v + ' <text>')
handler.tags = ['database']
handler.command = /^(ver|get(vn|msg|video|audio|img|sticker))$/i
handler.rowner = false
export default handler
