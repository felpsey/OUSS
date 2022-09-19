import express from 'express';
const router = express.Router()

import * as authController from '../app/controllers/authController.js'

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', (req, res) => {
  authController.index(req, res)
})

export default router