import express from 'express';
const router = express.Router()

import * as discordAuthController from '../../app/controllers/auth/discordAuthController.js'

router.get('/', async (req, res) => {
    await discordAuthController.index(req, res)
    .catch(err => {
        console.log(err)
        res.sendStatus(500)
    })

    return
})

export default router