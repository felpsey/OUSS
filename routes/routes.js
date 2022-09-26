import auth from './auth.js'
import auth_discord from './auth/discord.js'
import dashboard from './dashboard.js'
import dsicord from './discord.js'

export default (app) => {
    app.use('/auth', auth)
    app.use('/auth/discord', auth_discord)
    app.use('/dashboard', dashboard)
    app.use('/discord', dsicord)

    app.get('/', (req, res) => {
        res.render('index', { root: '.' })
    })
}
