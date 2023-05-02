import express from 'express'
import ArticleController from '../controllers/article'

const router = express.Router()

router.get('/', ArticleController.list)
router.get('/:id(\\d+)', ArticleController.get)
// router.post('/addComment/1', ArticleController.addComment)

export default router
