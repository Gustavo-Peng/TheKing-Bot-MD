let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*—◉ 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 𝙾𝚆𝙽𝙴𝚁 𝙴𝚂 wa.me/573017901707*
`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/GustavoBots` },
'mimetype': `application/${document}`,
'fileName': `「 𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
'fileLength': 1,
'pageCount': 0,
'contextInfo': {
'forwardingScore': 0,
'isForwarded': false,
'externalAdReply': {
'mediaUrl': null,
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴛʜᴇᴋɪɴɢ ʙᴏᴛ ᴍᴅ ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ',
'body': wm,
'sourceUrl': 'https://youtu.be/lAx8cXQNMU0' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
