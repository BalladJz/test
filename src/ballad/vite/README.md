# vite 配置（基于 vite.config.ts 文件进行配置）


#### vite 与 webpack的 区别
`因为webpack支持多种模块化，他一开始必须要统一模块化代码，所以意味着他需要将所有的依赖全部读一遍`
`vite会不会直接把webpack干翻，vite是基于es modules的，侧重点不一样，webpack更多的关注兼容性，而vite关注浏览器端的开发体验`

#### vite 与 create-vite 的 区别
`相当于 webpack 与 vue-cli 的关系 （out of box）`
`在默认情况下，我们esmodule去导入资源时，要么绝对路径或，要么相对路径`
`在三方依赖时，浏览器不去直接读取node_modules是因为浏览器承载不了那么多东西的 读取，因为打包工具 webpack vite rollup`

#### vite的预加载(依赖预构建)
`在处理第三方依赖的时候，如果遇到了有非绝对路径和非相对路径的引用，它会尝试路径不全`
`在开发环境，会vite会自己做，在生产环境，vite会全权交给rollup的库去完成生产打包`
*** 依赖预构建 ***
`vite只支持 esmodule 格式，需要处理的是各种三方依赖，以及三方依赖的依赖他们不一定是 esmodule，相比如 react、axios等它们采用的commonjs规范`
`所以vite 需要解决的是：首先会找到对应的依赖，然后调用esbuild（对js语法进行统一处理的库），将其它规范的代码转换成esmodule规范，然后放到当前目录下的node_modules/.vite/deps，同时对esmodule规范的各个模块进行统一集成`
**解决了3个问题**
`1、不同的第三方包会有不同的导出格式（这是vite没法约束人家的事情）`
`2、对路径上的处理可以直接使用 .vite/deps，方便路径重写`
`3、网络多包传输的性能问题（也是原生esmodule规范不敢支持node_modules的原因之一），有了一来与构建以后，无论它有多少额外的export和import，vite斗湖尽可能的将他们进行集成最后只生成一个或几个模块`


#### 开发和生产
` 开发 pnpm run dev`
` 生产 vite 依赖于 rollup 进行构建 `
` 新建对应模式下的config文件 利用策略模式进行集成`

#### 
