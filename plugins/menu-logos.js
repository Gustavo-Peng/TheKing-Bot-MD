const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*ใ๐ ๐๐ข๐๐ _${username}_ ๐ๅฝก*
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐๐ข๐๐ข๐ฆ

โโโโโโโโโโโโโโโ
โ *<๐๐ข๐๐ข๐ฆ/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ ๐๏ธ _${usedPrefix}logos *<efecto> <texto>*_
โฃ ๐๏ธ _${usedPrefix}simpcard *<@tag>*_
โฃ ๐๏ธ _${usedPrefix}hornycard *<@tag>*_
โฃ ๐๏ธ _${usedPrefix}lolice *<@tag>*_
โฃ ๐๏ธ _${usedPrefix}ytcomment *<texto>*_
โฃ ๐๏ธ _${usedPrefix}itssostupid_
โฃ ๐๏ธ _${usedPrefix}pixelar_
โฃ ๐๏ธ _${usedPrefix}blur_
โโโโโโโโโโโโโโโ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['๐๏ธ๐ ๐๐ก๐จ ๐๐๐ฆ๐ง๐๐๏ธ', '.menu'],
['๐ฅต๐๐ฅ๐๐๐๐ข๐ฅ๐ฅต', '.owner'],
['๐ฎ๐๐ข๐ก๐๐ฅ๐ฎ', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menulogo|menulogos|memulogos|memulogo)$/i
handler.fail = null
handler.register = true
export default  handler
