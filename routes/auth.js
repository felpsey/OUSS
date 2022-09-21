import express from 'express'

// Controllers
import * as authController from '../app/controllers/authController.js'

// Routes
const router = express.Router()

router.get('/', (req, res) => {
  authController.index(req, res)
})

router.get('/logout', (req, res) => {
  authController.destroy(req, res)
})

export default router