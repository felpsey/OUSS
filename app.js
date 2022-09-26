import * as dotenv from 'dotenv' 

import * as init_app from './init/app.js'
import * as init_bot from './init/bot.js'

dotenv.config()

const app = await init_app.set_express()
init_app.set_routes(app)

const bot = await init_bot.start_bot()

bot.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'contribute') {
    await interaction.reply('Contribute to the GitHub repository for the application, API and Discord bot at https://github.com/felpsey/ouss.club');
  }
});


app.get('/discord/bot/role/:discord_role_id', async (req, res) => {
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

  res.send('OVER')
})