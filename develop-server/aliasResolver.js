/**
 * alias 大致原理方法
 * @param {*} viteConf 配置文件
 * @param {*} JSContent 组件中导入的 方法 比如 import '@/xxxx'
 */
module.exports = function (viteConf, JSContent) {
  console.log('alias 方法 viteConf', viteConf) //  { '@', '/Users/zhangjie/Desktop/BalladJz/2、Integration/GaoDe/develop-server/src' }
  const entries = Object.entries(viteConf) // [['@', '/Users/zhangjie/Desktop/BalladJz/2、Integration/GaoDe/develop-server/src']]
  console.log('alias 方法 JSContent', JSContent) // import '@/alias.js'

  let lastContent = JSContent
  entries.forEach((entry) => {
    const [alia, path] = entry
    // 这里的path 直接就是 操作系统根目录至src的绝对路径 这不是我们想要的

    const srcIndex = path.indexOf('/src')
    const realPath = path.slice(srcIndex, path.length) // /src
    // 最主要的是 把 import '@/xxxx' 中的 @ 替换成 ==>  /src
    lastContent = JSContent.replace(alia, realPath)
  })

  return lastContent
}
