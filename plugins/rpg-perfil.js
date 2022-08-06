import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, text }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let { name, limit, exp, lastclaim, registered, regTime, age, level, role } = global.db.data.users[who]
    let bio = await conn.fetchStatus(who)
    let { min, xp, max } = xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
    let prem = global.prems.includes(who.split`@`[0])
    let str = `
┏━━°❀❬ *PERFIL* ❭❀°━━┓
┃
┣ 🔥Nombre🔥 : ${username} 
┣ 🔰Etiqueta🔰 : @${who.replace(/@.+/, '')}
┣ 🦙Descripcion🦙 : ${bio.status}
┣ ✨Numero✨ : 
┣ ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
┣ 💢Link💢 : wa.me/${who.split`@`[0]}${registered ? 
'\n┣ 🔞Edad🔞: ' + age : ''} 
┣ 💲TOTAL💲 ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `listo para subir de nivel *${usedPrefix}levelup*` : `${math} XP Mas para subir de nivel`}]
┣ 〽️Nivel〽️: ${level}
┣ ⚔️Rango⚔️: *${role}*
┣ Limite: ${limit}
┣ 📜Registrado📜: ${registered ? 'Si (' + new Date(regTime) + ')': 'No'}
┣ 💎Premium💎: ${prem ? '✅Sí' : '❌No'}${lastclaim > 0 ? '\nLast Claim: ' + new Date(lastclaim) : ''}
┗━━━━━━━━━━━━━━
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile|perfil$/i
export default handler 

