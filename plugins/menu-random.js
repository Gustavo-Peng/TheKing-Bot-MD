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
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐ฅ๐๐ก๐๐ข๐ 

โโโโโโโโโโโโโโโ
โ *<RANDOM/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ ๐พ _${usedPrefix}cristianoronaldo_
โฃ ๐พ _${usedPrefix}messi_
โฃ ๐พ _${usedPrefix}meme_
โฃ ๐พ _${usedPrefix}itzy_
โฃ ๐พ _${usedPrefix}blackpink_
โฃ ๐พ _${usedPrefix}kpop *<blackpink / exo / bts>*_
โฃ ๐พ _${usedPrefix}lolivid_
โฃ ๐พ _${usedPrefix}loli_
โฃ ๐พ _${usedPrefix}navidad_
โฃ ๐พ _${usedPrefix}ppcouple_
โฃ ๐พ _${usedPrefix}neko_
โฃ ๐พ _${usedPrefix}waifu_
โฃ ๐พ _${usedPrefix}akira_
โฃ ๐พ _${usedPrefix}akiyama_
โฃ ๐พ _${usedPrefix}anna_
โฃ ๐พ _${usedPrefix}asuna_
โฃ ๐พ _${usedPrefix}ayuzawa_
โฃ ๐พ _${usedPrefix}boruto_
โฃ ๐พ _${usedPrefix}chiho_
โฃ ๐พ _${usedPrefix}chitoge_
โฃ ๐พ _${usedPrefix}deidara_
โฃ ๐พ _${usedPrefix}erza_
โฃ ๐พ _${usedPrefix}elaina_
โฃ ๐พ _${usedPrefix}eba_
โฃ ๐พ _${usedPrefix}emilia_
โฃ ๐พ _${usedPrefix}hestia_
โฃ ๐พ _${usedPrefix}hinata_
โฃ ๐พ _${usedPrefix}inori_
โฃ ๐พ _${usedPrefix}isuzu_
โฃ ๐พ _${usedPrefix}itachi_
โฃ ๐พ _${usedPrefix}itori_
โฃ ๐พ _${usedPrefix}kaga_
โฃ ๐พ _${usedPrefix}kagura_
โฃ ๐พ _${usedPrefix}kaori_
โฃ ๐พ _${usedPrefix}keneki_
โฃ ๐พ _${usedPrefix}kotori_
โฃ ๐พ _${usedPrefix}kurumi_
โฃ ๐พ _${usedPrefix}madara_
โฃ ๐พ _${usedPrefix}mikasa_
โฃ ๐พ _${usedPrefix}miku_
โฃ ๐พ _${usedPrefix}minato_
โฃ ๐พ _${usedPrefix}naruto_
โฃ ๐พ _${usedPrefix}nezuko_
โฃ ๐พ _${usedPrefix}sagiri_
โฃ ๐พ _${usedPrefix}sasuke_
โฃ ๐พ _${usedPrefix}sakura_
โฃ ๐พ _${usedPrefix}cosplay_
โโโโโโโโโโโโโโโ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['๐๏ธ๐ ๐๐ก๐จ ๐๐๐ฆ๐ง๐๐๏ธ', '.menu'],
['๐ฅต๐๐ฅ๐๐๐๐ข๐ฅ๐ฅต', '.menu'],
['๐ฎ๐๐ข๐ก๐๐ฅ๐ฎ', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menurandom|menurndm|memurandom)$/i
handler.fail = null
handler.register = true
export default  handler
