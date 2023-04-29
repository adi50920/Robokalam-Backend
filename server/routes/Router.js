import express from 'express'
import { getAllUser, addUser } from '../controller/controller.js'

const router = express.Router()

router.get('/', getAllUser)
router.post('/', addUser)

export default router
