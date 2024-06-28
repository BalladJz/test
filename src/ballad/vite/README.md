# vite 配置（基于 vite.config.ts 文件进行配置）


#### vite 与 webpack的 区别
`因为webpack支持多种模块化，他一开始必须要统一模块化代码，所以意味着他需要将所有的依赖全部读一遍`
<br/>

`vite会不会直接把webpack干翻，vite是基于es modules的，侧重点不一样，webpack更多的关注兼容性，而vite关注浏览器端的开发体验`
<br/>


#### vite 与 create-vite 的 区别
`相当于 webpack 与 vue-cli 的关系 （out of box）`
<br/>

`在默认情况下，我们esmodule去导入资源时，要么绝对路径或，要么相对路径`
<br/>

`在三方依赖时，浏览器不去直接读取node_modules是因为浏览器承载不了那么多东西的 读取，因为打包工具 webpack vite rollup`
<br/>


#### vite的预加载(依赖预构建)
`在处理第三方依赖的时候，如果遇到了有非绝对路径和非相对路径的引用，它会尝试路径不全`
<br/>

`在开发环境，会vite会自己做，在生产环境，vite会全权交给rollup的库去完成生产打包`
<br/>

*** 依赖预构建 ***
`vite只支持 esmodule 格式，需要处理的是各种三方依赖，以及三方依赖的依赖他们不一定是 esmodule，相比如 react、axios等它们采用的commonjs规范`
<br/>

`所以vite 需要解决的是：首先会找到对应的依赖，然后调用esbuild（对js语法进行统一处理的库），将其它规范的代码转换成esmodule规范，然后放到当前目录下的node_modules/.vite/deps，同时对esmodule规范的各个模块进行统一集成`
<br/>

**解决了3个问题**
`1、不同的第三方包会有不同的导出格式（这是vite没法约束人家的事情）`
<br/>

`2、对路径上的处理可以直接使用 .vite/deps，方便路径重写`
<br/>

`3、网络多包传输的性能问题（也是原生esmodule规范不敢支持node_modules的原因之一），有了依赖与构建以后，无论它有多少额外的export和import，vite都尽可能的将他们进行集成，最后只生成一个或几个模块`
<br/>


#### 开发和生产
` 开发 pnpm run dev`
<br/>

` 生产 vite 依赖于 rollup 进行构建 `
<br/>

` 新建对应模式下的 config 文件 利用策略模式进行集成`
<br/>


#### vite的环境变量的处理
` 补充：为什么vite.config.ts 可以书写成esmodule的格式，这是因为vite它在读取这个vite.config.ts的时候会率先解析文件语法，如果发现是esmodule规范，会直接将你的esmodule规范进行替换成commonjs规范  `
<br/>


` vite 内置了 dotenv(多塔恩物)第三方库来实现 获取环境变量 （dotenv会自动读取 .env文件，并解析这个文件中的环境变量，利用split“=”来分割最后组装成一个键值对的对象，并将其注入到 process 这个对象上）**(但是vite考虑到和其他配置的一些冲突的问题，他不会直接注入到process对象下)**`


```js
// 涉及到 vite.config.ts中的一些配置
// - root
// - envDir: 用来配置当前环境变量的文件地址
```

` vite也给我们提供了一些补偿措施，利用loadEnv()这个方法可以获取到环境变量的配置，这只在服务端，而在客户端则利用import.meta.env 来获取环境变量 `

```js
/**
 * 这个方法有三个参数
 * 第一个参数：mode(vite中defineConfig的形参会携带)，vite 开发环境是 development，相当于我们执行 pnpm run dev 命令会默认加上 --mode development => 是执行的 pnpm run dev --mode development，所以mode就是 development
 * 第二个参数：process.cwd()，返回当前node进程的工作目录（执行命令的当前目录的路径）
 * 第三个参数：执行的env文件名，vite默认就是 .env 可以不传
 * 
 * .env: 所有环境需要用到的变量
 * .env.development: 开发环境需要用到的环境变量（默认情况下vite 将我们的开发环境取名为development）
 * .env.production: 生产环境需要用到的环境变量（默认情况下vite 将我们的生产环境取名为production）
 * 
 */
// const env  = loadEnv(mode, process.cwd(), '.env')

```

```js
// 当我们调用loadEnv()方法时，它会做如下几件事情：
// 1、直接找到.env文件 并解析其中的环境变量，并放进一个对象里
// 2、会讲传进来的mode这个变量进行拼接 => .env.development，并根据我们提供的目录去取对应的配置文件进行解析，并放进一个对象
// 3、我们可以理解为：
const baseEnvConfig = '读取的.env文件配置'
const modeEnvConfig = '读取的.env.xxxx 相关文件的配置'
const envConfig = {...modeEnvConfig, ...baseEnvConfig}
// 如果有相同配置项，后一个modeEnvConfig的配置，会覆盖前一个baseEnvConfig的配置项
```

`  以上是服务端通过loadEnv方法来获取环境变量，而在客户端 则使用 vite => import.meta.env.XXX 来获取相关的环境变量； 环境变量文件中 默认需要设置以 VITE_ 开头的变量，不然也获取不到变量 `
<br/>

` vite 做了一个拦截，它为了防止我们将隐私性的变量直接宋金 import.meta.env中，所以它做了一层拦截，如果你的环境变量不是以 VITE_ 开头的，它就不会帮我们注入到客户端中取，如果我们想要更改这个前缀，需要去  defineConfig中配置{ envPrefix: 'ENV_' }，envPrefix属性值 是开发者可以自定义前缀，（这个名称只影响客户端 不影响服务端） `
<br/>


#### 实现一套简单的 vite 开发服务器
`在浏览器、或服务器眼里，文件都是字符串，根据Content-type的值去解析`
<br/>


#### vite 处理css