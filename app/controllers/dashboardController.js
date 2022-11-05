import * as authDiscord from '../models/user/discord.js'

async function index(req, res) {
    const isUserInOUSSDiscord = await authDiscord.checkUserInDiscordServer(req.session.discord_access_token)

    if (isUserInOUSSDiscord) {
        let discordUserInfo = await authDiscord.getUserInfo(req.session.discord_access_token)
        let formattedDiscordUserInfo = await discordUserInfo.json();

        let available_roles = [
            {name: 'student',id: '894200821875609660'},
            {name: 'full time student',id: '885099979734147092'},
            {name: 'part time student',id: '885100205538680832'},
            {name: 'age 30 plus',id: '889454663517233174'},
            {name: 'age 24-30',id: '889454555715223614'},
            {name: 'age 18-24',id: '889454503437434890'},
            {name: 'course computing and IT',id: '885099611012870146'},
            {name: 'course cyber security',id: '885099298528833586'},
            {name: 'course data science',id: '885248577037803540'},
            {name: 'course primary education studies',id: '895065922270793819'},
            {name: 'course environmental science',id: '895066971572412416'},
            {name: 'course psychology and counselling',id: '895068221223350334'},
            {name: 'course criminology',id: '1015584627378892801'},
            {name: 'module tm111',id: '886620239914237993'},
            {name: 'module tm112',id: '889454887363043338'},
            {name: 'module mu123',id: '886620441077227530'},
            {name: 'module e103',id: '895066550992789505'},
            {name: 'module sxf206',id: '895067097309282346'},
            {name: 'module a111',id: '895067602911649802'},
            {name: 'module a112',id: '895067647333507072'},
            {name: 'module a113',id: '895067959721087027'},
            {name: 'module sdk100',id: '895068354694512680'},
            {name: 'module dd103',id: '895068609192280146'},
            {name: 'module b100',id: '1026154702662025237'},
            {name: 'catchment west midlands',id: '889455113016573962'},
        ]
    
        res.render('dashboard', { 
            root: '.',
            discord_user_id: req.session.discord_access_token,
            user_info: formattedDiscordUserInfo,
            roles: available_roles,
        })
    } else {
        res.render('pages/error/400', {
            root: '.',
            message: `You are not a member of the OUSS Discord server! Join here: ${process.env.APP_HOSTNAME}/discord`
        })
    }
};

export { index }