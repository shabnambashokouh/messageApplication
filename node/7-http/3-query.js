const http = require('http')
const fs = require('fs')
const path = require('path')
const URL = require('url')

function initApp (req, res) {
  const { pathname, query } = URL.parse(req.url)

  const arrayQuery = query?.split('&').map(el => el.split('='))
  req.query = arrayQuery ? Object.fromEntries(arrayQuery) : {}

  req.pathname = pathname

  res.json = data => res.end(JSON.stringify(data))
}

const server = http.createServer((req, res) => {
  initApp(req, res)

  const { pathname, query } = req

  if (pathname === '/') {
    const data = fs.readFileSync(path.resolve(__dirname, 'form-get.html'))
    return res.end(data)
  }

  if (pathname === '/contact') {
    return res.json(query)
  }

  res.statusCode = 404
  res.end('Not found')
})

server.listen(3000, () => {
  console.clear()
  console.log('Server running on port 3000')
})
