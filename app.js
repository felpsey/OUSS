import * as dotenv from 'dotenv' 
import express from 'express'
import session from 'express-session'
import crypto from 'crypto'
import MySQLStore from 'express-mysql-session';
import cors from 'cors';

import routerAuth from './routes/auth.js'
import routerAuthDiscord from './routes/auth/discord.js'
import routerDashboard from './routes/dashboard.js'
import routerDiscord from './routes/discord.js'

dotenv.config()

const app = express()
const port = process.env.EXPRESS_PORT

const cors_configuration = {
  origin: process.env.APP_HOSTNAME,
  credentials: true,
};

const session_configuration = {
  name: 'ouss.sid',
  resave: false,
  store: new MySQLStore({
    host: process.env.APP_DB_HOST,
    port: process.env.APP_DB_PORT,
    user: process.env.APP_DB_USER,
    password: process.env.APP_DB_PASSWORD,
    database: process.env.APP_DB_NAME,
    createDatabaseTable: true,
  }),
  saveUninitialized: false,
  secret: process.env.APP_SESSION_KEY,
  genid: function(req) {
    return crypto.randomBytes(48).toString('hex')
  },
  cookie: {
    maxAge: 86400000,
    sameSite: 'lax',
    secure: false
  }
}

app.use(cors(cors_configuration));
app.use(session(session_configuration))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', { root: '.' })
})

app.use('/auth', routerAuth)
app.use('/auth/discord', routerAuthDiscord)
app.use('/dashboard', routerDashboard)
app.use('/discord', routerDiscord)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})