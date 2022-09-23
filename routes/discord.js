import express from 'express'

// Controllers

// Routes
const router = express.Router()

router.get('/', (req, res) => {
    res.redirect('https://discord.gg/7gqDPc2YcY')
})

export default router