import express from 'express'

// Controllers
import * as authController from '../app/controllers/authController.js'

// Routes
const router = express.Router()

router.get('/', (req, res) => {
  authController.index(req, res)
})

export default router