import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, q, isPrems, isOwner }) => {

await conn.sendMessage(m.chat, { react: { text: '⏱️', key: m.key } })

if (!args || !args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 / 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴*'
try {
let { thumbnail, video, title } = await youtubedl(args[0])
.catch(async () => await youtubedlv2(args[0]))
let link = await video['360p'].download()
const isY = /y(es)/gi.test(args[1])
const limitedSize = (isPrems || isOwner ? 350 : 200) * 3074
let isLimit = limitedSize < video['360p'].fileSize
await conn.sendFile(m.chat, link, title + '.mp3', `
*🔥 𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
*📁 𝙿𝙴𝚂𝙾 𝙳𝙴𝙻 𝚅𝙸𝙳𝙴𝙾:* ${video['360p'].fileSizeH}
`.trim(), m, null, {
asDocument: 0
})
conn.sendMessage(m.chat, { audio: { url: link }, mimetype: "audio/mp4", fileName: title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply:{
title: "VER VIDEO EN YT",
body: author,
showAdAttribution: false,
mediaType: 2, 
thumbnail: thumbnail,
mediaUrl: args[0], 
sourceUrl: 'https://www.pornhub.com'}}}, { quoted: m })

}catch(e){
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙴𝙽𝚅𝙸𝙰𝚁 𝙴𝙻 𝙰𝚁𝙲𝙷𝙸𝚅𝙾.. 𝙴𝚂𝚃𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴 𝙳𝙴𝙱𝙴𝚁 𝙰 𝚀𝚄𝙴 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾 𝙴𝚂 𝙳𝙴 𝚄𝙽 𝙿𝙴𝚂𝙾 / 𝚃𝙰𝙼𝙰𝙽̃𝙾 𝙶𝚁𝙰𝙽𝙳𝙴*')
console.log(e)
}}
handler.help = ['mp4', 'v'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.exp = 0

export default handler
