import TicTacToe from '../lib/tictactoe.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    conn.game = conn.game ? conn.game : {}
    if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Todavía estás en el juego'
    if (!text) throw `Ponga un nombre a la sala`
    let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    // m.reply('[WIP Feature]')
    if (room) {
        await m.reply('*🕹️ Jugador encontrado!*')
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'PLAYING'
        let arr = room.game.render().map(v => {
            return {
                X: '❎',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            }[v]
        })
        let str = `
*🎮 Juego Tres En Raya 🎮*

❎ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}

      ${arr.slice(0, 3).join('')}
      ${arr.slice(3, 6).join('')}
      ${arr.slice(6).join('')}

Tu turno *@${room.game.currentTurn.split('@')[0]}*

Escriba *rendirse* para dejar de jugar
`.trim()
        if (room.x !== room.o) await conn.sendMessage(room.x, { text: str,
                mentions: this.parseMention(str)
            }, { quoted: m })
        await conn.sendMessage(room.o, { text: str,
                mentions: conn.parseMention(str)
            }, { quoted: m })
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        }
        if (text) room.name = text
        
        conn.sendButton(m.chat, `*Esperando segundo jugador*

*• Recompensa:* +4999 Exp`, 'Click para unirte a la partida', ['🎮 Unirse', `${usedPrefix + command} ${text}`], m, { mentions: conn.parseMention(text) })

   conn.game[room.id] = room
    }
    
}

handler.help = ['xo']
handler.tags = ['game']
handler.command = /^(tictactoe|ttc|ttt|xo)$/i

export default handler
