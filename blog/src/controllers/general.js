import { NotFoundError, BadRequestError } from '../utils/errors'
import Article from '../models/article'

export async function home (req, res) {
  const articles = await Article.findAll({ limit: 4, order: [['id', 'desc']] })

  res.render('index', {
    title: 'Home Page',
    content: 'This is homepage',
    articles,
    user: req.user
  })
}

export function about (req, res) {
  res.render('about', {
    title: 'About us',
    content: 'This is About us page',
    user: req.user
  })
}

export function contact (req, res) {
  res.render('contact', {
    title: 'Contact us',
    content: 'This is Contact us page',
    user: req.user
  })
}

export function chat (req, res) {
  res.render('chat', {
    title: 'Chatroom',
    user: req.user
  })
}

export function pubchat (req, res) {
  res.render('pubchat', {
    title: 'Public Chatroom',
    user: req.user
  })
}
