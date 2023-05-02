import express from 'express'
import ArticleController from '../controllers/article'

const router = express.Router()

router.post('/add', ArticleController.addComment)
router.get('/add/:articleId', ArticleController.showForm)

export default router
