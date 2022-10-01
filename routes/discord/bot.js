import * as discordAuthController from '../../app/controllers/auth/discordAuthController.js'
import * as discordUserRolesController from '../../app/controllers/discord/userRolesController.js'

export default (app, bot) => {
    app.get('/discord/bot', async (req, res) => {
        await discordAuthController.index(req, res)
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    })

    app.get('/discord/bot/role/:discord_role_id', async (req, res) => {
        discordUserRolesController.update(req, res, bot)
    })
}