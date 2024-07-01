const koa = require('koa') // 不能使用 esmodule 必须使用commonjs规范
const fs = require('fs')
const path = require('path')

const app = new koa()

app.use(async (ctx) => {
  // console.log('ctx', ctx.request, ctx.response)
  // 这是在找根路径的资源 真正开发 直接用中间件 读取就行
  if (ctx.request.url === '/') {
    const indexContent = await fs.promises.readFile(path.resolve(__dirname, './index.html'))
    // console.log('indexContent', indexContent.toString()) indexContent // 是个Buffer
    ctx.response.body = indexContent
    ctx.response.set('Content-Type', 'text/html')
  }

  if (ctx.request.url === '/ballad.js') {
    const indexContent = await fs.promises.readFile(path.resolve(__dirname, './ballad.js'))
    ctx.response.body = indexContent
    ctx.response.set('Content-Type', 'text/javascript')
  }

  if (ctx.request.url === '/App.vue') {
    const indexContent = await fs.promises.readFile(path.resolve(__dirname, './App.vue'))
    ctx.response.body = indexContent
    ctx.response.set('Content-Type', 'text/javascript')
  }

})

app.listen(8899, () => {
  console.log('ballad serve', 123)
})
