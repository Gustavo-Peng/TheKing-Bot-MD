let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
 
const sections = [
{
title: `πππ¨π¦π§ππ¦ πππ ππ₯π¨π£π’`,
rows: [
      {title: "π« πππ₯π₯ππ₯ ππ₯π¨π£π’ π«", description: 'π£π¨ππ¦π ππ€π¨π π£ππ₯π πππ₯ππ₯ ππ ππ₯π¨π£π’', rowId: `.grupo cerrar`},
      {title: "β πππ₯ππ₯ ππ₯π¨π£π’ β", description: 'π£π¨ππ¦π ππ€π¨π π£ππ₯π πππ₯π₯ππ₯ ππ ππ₯π¨π£π’', rowId: `.grupo abrir`},
]}, ]
 
let name = await conn.getName(m.sender)
const listMessage = {
text: `ππ¦π§π ππ¦ ππ π ππ‘π¨ π£ππ₯π πππ₯ππ₯/πππ₯π₯ππ₯ ππ ππ₯π¨π£π’

π§ππ ππππ‘ π£π¨ππππ¦ π£π’π‘ππ₯:
.grupo abrir
.grupo cerrar
`, footer: wm,
title: 'Menu para cerrar/abrir el grupoo',
buttonText: "πππ¨π¦π§ππ¦ πππ ππ₯π¨π£π’", 
sections }



let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
return conn.sendMessage(m.chat, listMessage)

await conn.groupSettingUpdate(m.chat, isClose)
m.reply('*[ β ] πΆπππΏπΎ π²πΎπ½π΅πΈπΆπππ°π³πΎ π²πΎπππ΄π²ππ°πΌπ΄π½ππ΄*')
}
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true
export default handler

