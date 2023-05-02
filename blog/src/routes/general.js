import { home, about, contact, chat,pubchat } from '../controllers/general'
import express from 'express'
import acl from '../middlewares/acl'

const router = express.Router()

router.get('/', home)
router.get('/about', about)
router.get('/contact', contact)
router.get('/chat', acl('USER'), chat)
router.get('/pubchat', acl('USER'), pubchat)

export default router
