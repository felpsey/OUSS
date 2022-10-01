import auth from './auth.js'
import auth_discord from './auth/discord.js'
import dashboard from './dashboard.js'
import discord from './discord.js'
import discord_bot from './discord/bot.js'

export default (app, bot) => {
    app.use('/auth', auth)
    app.use('/auth/discord', auth_discord)
    app.use('/dashboard', dashboard)
    app.use('/discord', discord)

    discord_bot(app, bot)


    app.get('/', (req, res) => {
        res.render('index', { root: '.' })
    })
}