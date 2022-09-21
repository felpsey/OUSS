import express from 'express';

// Controllers
import * as discordAuthController from '../../app/controllers/auth/discordAuthController.js'

// Routes
const router = express.Router()

router.get('/', async (req, res) => {
    await discordAuthController.index(req, res)
    .catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
})

export default router