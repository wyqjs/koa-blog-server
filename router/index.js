const Router = require('koa-router')
const user = require('./routes/user')
const article = require('./routes/article')
const category = require('./routes/category')
const comment = require('./routes/comment')
const qiniu = require('./routes/qiniu')
const image = require('./routes/image')

const router = new Router({
  prefix: '/api'
})

module.exports = app => {
  user(router)
  article(router)
  category(router)
  comment(router)
  qiniu(router)
  image(router)
  tag(router)

  app.use(router.routes())
    .use(router.allowedMethods())
}