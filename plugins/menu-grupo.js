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
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐๐ฅ๐จ๐ฃ๐ข๐ฆ

โโโโโโโโโโโโโโโ
โ *<๐ ๐๐ก๐จ ๐๐ฅ๐จ๐ฃ๐ข>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ ๐ _${usedPrefix}admins_
โฃ ๐ _${usedPrefix}add *<numero>*_
โฃ ๐ _${usedPrefix}kick *<@tag>*_
โฃ ๐ _${usedPrefix}grupo *<abrir / cerrar>*_
โฃ ๐ _${usedPrefix}promote *<@tag>*_
โฃ ๐ _${usedPrefix}demote *<@tag>*_
โฃ ๐ _${usedPrefix}grupo abrir/cerrar_
โฃ ๐ _${usedPrefix}banchat/unbanchat_
โฃ ๐ _${usedPrefix}demote *<@tag>*_
โฃ ๐ _${usedPrefix}infogroup_
โฃ ๐ _${usedPrefix}link_
โฃ ๐ _${usedPrefix}setname *<texto>*_
โฃ ๐ _${usedPrefix}setdesc *<texto>*_
โฃ ๐ _${usedPrefix}hidetag *<texto>*_
โฃ ๐ _${usedPrefix}del *responder al mensaje del bot para borrarlo*_
โฃ ๐ _${usedPrefix}setpp *establecer foto como perfil del grupo*_
โฃ ๐ _${usedPrefix}simular *<welcome / bye / promote / demote>*_
โฃ ๐ _${usedPrefix}fantasmas_
โโโโโโโโโโโโโโโ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['๐๏ธ๐ ๐๐ก๐จ ๐๐๐ฆ๐ง๐๐๏ธ', '.menu'],
['๐ฅต๐๐ฅ๐๐๐๐ข๐ฅ๐ฅต', '.menu'],
['๐ฎ๐๐ข๐ก๐๐ฅ๐ฎ', '.donar']
], m)
}}
handler.help = ['menugp']
handler.tags = ['main']
handler.command = /^(menugrupos|menugrupo|memugrupos|menugrupos|menugp|memugp|comandosgrupo)$/i
handler.fail = null
handler.register = true
export default  handler
