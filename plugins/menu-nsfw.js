const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[βππππβ] π»πΎπ π²πΎπΌπ°π½π³πΎπ +π·πΎ π΄πππ°π½ π³π΄ππ°π²ππΈππ°π³πΎπ π΄π½ π΄πππ΄ πΆπππΏπΎ, ππΈ π΄π π°π³πΌπΈπ½ π π³π΄ππ΄π° π°π²ππΈππ°ππ»πΎπ πππ΄ π΄π» π²πΎπΌπ°π½π³πΎ #enable modohorny*'   
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*γπ ππ’ππ _${username}_ πε½‘*
ππππ‘π©ππ‘πππ’ ππ π ππ‘π¨ π‘π¦ππͺ

βββββββββββββββ
β *<πππ’π ππ‘ππ’π¦ +18π/>*
ββ‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘
β£ π _${usedPrefix}pack_
β£ π _${usedPrefix}pack2_
β£ π _${usedPrefix}pack3_
β£ π _${usedPrefix}videox_
β£ π _${usedPrefix}tetas_
β£ π _${usedPrefix}booty_
β£ π _${usedPrefix}ecchi_
β£ π _${usedPrefix}furro_
β£ π _${usedPrefix}imagenlesbians_
β£ π _${usedPrefix}panties_
β£ π _${usedPrefix}pene_
β£ π _${usedPrefix}porno_
β£ π _${usedPrefix}porno2_
β£ π _${usedPrefix}randomxxx_
β£ π _${usedPrefix}pechos_
β£ π _${usedPrefix}yaoi_
β£ π _${usedPrefix}yaoi2_
β£ π _${usedPrefix}yuri_
β£ π _${usedPrefix}yuri2_
β£ π _${usedPrefix}trapito_
β£ π _${usedPrefix}hentai_
β£ π _${usedPrefix}pies_
β£ π _${usedPrefix}nsfwloli_
β£ π _${usedPrefix}nsfworgy_
β£ π _${usedPrefix}nsfwfoot_
β£ π _${usedPrefix}nsfwass_
β£ π _${usedPrefix}nsfwbdsm_
β£ π _${usedPrefix}nsfwcum_
β£ π _${usedPrefix}nsfwero_
β£ π _${usedPrefix}nsfwfemdom_
β£ π _${usedPrefix}nsfwglass_
β£ π _${usedPrefix}xnxxsearch_
βββββββββββββββ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['ποΈπ ππ‘π¨ πππ¦π§πποΈ', '.menu'],
['π₯΅ππ₯ππππ’π₯π₯΅', '.menu'],
['π?ππ’π‘ππ₯π?', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menunsfw|memunsfw|nsfw|menuhorny)$/i
handler.fail = null
handler.nsfw = true
handler.register = true
export default  handler
