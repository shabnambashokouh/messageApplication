import Article from '../models/article'
import Comment from "../models/comment";
import {NotFoundError} from '../utils/errors'
import {Op} from "sequelize";
import log from "../utils/logger";


class ArticleController {
    async list(req, res) {
        const data = await Article.findPaginate(req.query.page, {limit: 8})

        res.render('article/list', {
            title: 'Articles',
            user: req.user,
            ...data
        })
    }

    async get(req, res) {
        const {id} = req.params

        const article = await Article.find(+id)

        if (!article) {
            throw new NotFoundError('Article not found')
        }

        const comment = await Comment.findAll({where: {articleId: {[Op.eq]: id}}, order: [['id', 'desc']]})

        res.render('article/show', {
            title: article.title,
            article,
            comment,
            user: req.user
        })
    }

    async addComment(req, res) {
        const {text} = req.body
        const {articleId} = req.body
        console.log("req is ",req.body)

        const comment = new Comment({text, articleId: articleId})

        await comment.save()

        log({
            message: 'comment:create',
            metadata: {comment: comment.dataValues}
        })

        res.redirect('/article/'+articleId);
    }

    async showForm(req, res) {
        const {articleId} = req.params
        console.log("articleId is ", articleId)

        res.render('article/create', {
            title: 'addComment',
            articleId: articleId
        })
    }
}

export default new ArticleController()
