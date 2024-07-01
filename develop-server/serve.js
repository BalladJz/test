const koa = require('koa') // 不能使用 esmodule 必须使用commonjs规范
const fs = require('fs')
const path = require('path')

/** 读取vite config.js 不用去用fs 模块读取 因为不需要返回客户端 */
const viteConf = require('./vite.config') // 就是 vite.config.js 文件中的数据
// console.log('serve 中的 viteConf', viteConf) // 就是 vite.config.js 文件中的数据
/** alias 原理 方法 */
const aliasResolver = require('./aliasResolver')

const app = new koa()

app.use(async (ctx) => {
  /** = = = = = = = = = = = = = = = = = = = = = = = = = = =*/
  /** 手写 alias 原理 这里判断以 alias.js 结尾的文件 */
  if (ctx.request.url.endsWith('alias.js')) {
    const viteConfContent = await fs.promises.readFile(
      path.resolve(__dirname, '.' + ctx.request.url)
    )
    // console.log('viteConfContent', viteConfContent.toString()) // viteConfContent是个 Buffer  import '@/alias.js'
    const aliasResult = aliasResolver(viteConf.resolve.alias, viteConfContent.toString())
    ctx.response.body = aliasResult
    ctx.response.set('Content-Type', 'text/javascript')
  }
  /** = = = = = = = = = = = = = = = = = = = = = = = = = = =*/

  // console.log('ctx', ctx.request, ctx.response)
  // 这是在找根路径的资源 真正开发 直接用中间件 读取就行
  if (ctx.request.url === '/') {
    const indexContent = await fs.promises.readFile(path.resolve(__dirname, './index.html'))
    ctx.response.body = indexContent
    ctx.response.set('Content-Type', 'text/html')
  }

  // if (ctx.request.url === '/ballad.js') {
  //   const balladContent = await fs.promises.readFile(path.resolve(__dirname, './ballad.js'))
  //   ctx.response.body = balladContent
  //   ctx.response.set('Content-Type', 'text/javascript')
  // }

  if (ctx.request.url === '/App.vue') {
    const appContent = await fs.promises.readFile(path.resolve(__dirname, './App.vue'))
    ctx.response.body = appContent
    ctx.response.set('Content-Type', 'text/javascript')
  }
})

app.listen(8899, () => {
  console.log('ballad serve start')
})
