import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    let img = await q.download?.()
    let url = await uploadImage(img)
    
    let js = await fetch(`https://api.lolhuman.xyz/api/agedetect?apikey=9b817532fadff8fc7cb86862&img=${encodeURIComponent(url)}`)
    let has = await js.json()
    await m.reply('El resultado de la detección de edad de la imagen es ' + has.result + ' años')
    
}
//lo mau apa??
handler.help = ['agedetect (caption|reply media)']
handler.tags = ['maker']
handler.command = /^(agedetect|años)$/i

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}