import * as authDiscord from '../models/user/discord.js'

async function index(req, res) {
    const isUserInOUSSDiscord = await authDiscord.checkUserInDiscordServer(req.session.discord_access_token)

    if (isUserInOUSSDiscord) {
        let discordUserInfo = await authDiscord.getUserInfo(req.session.discord_access_token)
        let formattedDiscordUserInfo = await discordUserInfo.json();
    
        res.render('dashboard', { 
            root: '.',
            discord_user_id: req.session.discord_access_token,
            user_info: formattedDiscordUserInfo
        })
    } else {
        res.render('pages/error/400', {
            root: '.',
            message: `You are not a member of the OUSS Discord server! Join here: ${process.env.APP_HOSTNAME}/discord`
        })
    }
};

export { index }