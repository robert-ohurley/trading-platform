import express from 'express'
import { getAssets } from '../controllers/asset.js'
const router = express.Router()

router.get('/', getAssets)

export default router 
