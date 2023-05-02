import express from 'express'
import PubMessageController from '../../controllers/pubMessage'
import acl from '../../middlewares/acl'

const router = express.Router()

router.get('/', acl('USER'), PubMessageController.list)

export default router
