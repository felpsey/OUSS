import express from 'express'

// Controllers
import * as dashboardController from '../app/controllers/dashboardController.js'

// Middleware
import { authenticated } from '../app/middleware/auth.js'

// Routes
const router = express.Router()

router.get('/', authenticated, (req, res) => {
  dashboardController.index(req, res)
})

export default router