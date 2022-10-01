import * as authDiscord from '../../models/user/discord.js'

export async function update(req, res, bot) {
    let discord_user_id = req.session.discord_user_id
    let discord_role_id = req.query.discord_role_id
  
    let logged_in_discord_user_id = await authDiscord.getUserInfo(req.session.discord_access_token)
  
    let filtered_user_id = await logged_in_discord_user_id.json()
  
    const ouss_guild = await bot.guilds.fetch(process.env.DISCORD_GUILD_ID)
    .then(async (response) => {
      return response
    })
  
    const user_snowflake = await ouss_guild.members.fetch(filtered_user_id.id)
  
    user_snowflake.roles.add('895068609192280146')
  
    res.send('Done')
}