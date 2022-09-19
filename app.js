import * as dotenv from 'dotenv' 
import express from 'express'

dotenv.config()

import routerAuth from './routes/auth.js'
import routerAuthDiscord from './routes/auth/discord.js'


const app = express()
const port = process.env.EXPRESS_PORT

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  // res.sendFile('/views/index.html', { root: '.' })

  res.render('index', { root: '.' })
})

app.use('/auth', routerAuth)
app.use('/auth/discord', routerAuthDiscord)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})