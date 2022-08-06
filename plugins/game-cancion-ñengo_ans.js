import similarity from'similarity'
const threshold = 0.72
let handler = {
    async before(m) {
        let id = m.chat
        if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/ADIVINA LA CANCION DE ÑENGO/i.test(m.quoted.text)) return !0
        this.tebaklagu2 = this.tebaklagu2 ? this.tebaklagu2 : {}
        if (!(id in this.tebaklagu2)) return m.reply('El juego ha terminado')
        if (m.quoted.id == this.tebaklagu2[id][0].id) {
            let json = JSON.parse(JSON.stringify(this.tebaklagu2[id][1]))
            // m.reply(JSON.stringify(json, null, '\t'))
            if (m.text.toLowerCase() == json.judul.toLowerCase().trim()) {
                global.db.data.users[m.sender].exp += this.tebaklagu2[id][2]
                m.reply(`*✅Correcto!*\n+${this.tebaklagu2[id][2]} XP`)
                clearTimeout(this.tebaklagu[id][3])
                delete this.tebaklagu[id]
            } else if (similarity(m.text.toLowerCase(), json.judul.toLowerCase().trim()) >= threshold) m.reply(`*Casii!*`)
            else m.reply(`*❌Incorrecto!*`)
        }
        return !0
    },
    exp: 0
}

export default handler