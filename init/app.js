import express from 'express'
import session from 'express-session'
import session_store from 'express-mysql-session';

import crypto from 'crypto'
import cors from 'cors';

import routes from '../routes/routes.js'

async function set_express() {
    const app = express()
    const port = process.env.EXPRESS_PORT
    const cors_configuration = {
        origin: process.env.APP_HOSTNAME,
        credentials: true,
    }

    const session_configuration = {
        name: 'ouss.sid',
        resave: false,
        store: new session_store({
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

    app.use(cors(cors_configuration))
    app.use(session(session_configuration))

    app.set('view engine', 'ejs')

    app.listen(port, () => {
        console.log(`Application listening at http://localhost:${port}`)
    })

    return app
}

function set_routes(app, bot) {
    routes(app, bot)
}

export { 
    set_express, 
    set_routes 
}