import * as dotenv from 'dotenv' 

dotenv.config()

// import * as init_database from './init/database.js'
import * as init_bot from './init/bot.js'
import * as init_app from './init/app.js'

const bot = await init_bot.start_bot()
const app = await init_app.set_express()

init_bot.set_interaction(bot)
init_app.set_routes(app, bot)