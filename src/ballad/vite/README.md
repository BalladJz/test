# vite 配置（基于 vite.config.ts 文件进行配置）


#### vite 相较于 webpack的 的优势
`然而，当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。包含数千个模块的大型项目相当普遍。基于 JavaScript 开发的工具就会开始遇到性能瓶颈：通常需要很长时间（甚至是几分钟！）才能启动开发服务器，即使使用模块热替换（HMR），文件修改后的效果也需要几秒钟才能在浏览器中反映出来。如此循环往复，迟钝的反馈会极大地影响开发者的开发效率和幸福感。`
```js
// 起因:我们的项目越大 ---->构建工具(webpack)所要处理的js代码就越多 【跟webpack的一个构建过程(工作流程)有关系】
// 造成的结果:构建工具需要很长时间才能启动开发服务器(启动开发服务器 --->把项目跑起来)

// webpack能不能改?如果一旦要改 那么将会动到webpack的大动脉

// webpack支持多种模块化：但我们的工程可能不只是跑在浏览器端，也可能跑在服务端

// 这一段代码最终会到浏览器里去运行
const lodash = require("lodash"); //-commonjs-规范
import Vue from "vue"; // es6.module
// webpack是允许我们这么写的

/**
 * webpack的编译原理，AST 抽象语法分析的工具 分析出你写的这个js文件有哪些导入和导出操作构建工具是运行在服务端的，虽然前端是无法修改文件的，但服务端是可以修改的，webpack通过立即执行函数修改好，然后通过立即执行函数，启动项目
 */

(function(modules){
  function webpack_require(){ }
    // 入口是index.js
    // 通过webpack的配置文件得来的 webpack.config.js  ./src/index.js
    modules[entry](webpack_require)

}，({
    "./src/index.js": (webpack_require) => {
        const lodash = webpack require("lodash");
        const Vue = webpack _require("vue");
    }
}))

// webpack的一个转换结果
const lodash = webpack_require("lodash");
const Vue = webpack_require("vue");

// 最终造成的结果是需要很长的时间才能启动开发服务器，
// 而且vite和webpack的侧重点不一样:
// webpack 支持多种模块化，他一开始必须要统一模块化代码，所以意味着他需要将所有的依赖全部读一遍，然后构建依赖、打包、然后开启 entry（项目越大 工作越多）（它关注于兼容性）
// vite    是基于esmodule的，关注浏览器的开发体验，首先开启entry(入口main.ts)，然后按需加载模块，（无论项目有多大，通过entry，只会加载需要的模块，不会把依赖全部解析完）
```
<br/>


#### vite 与 create-vite 的 区别
`比如我们敲了 yarn create vite`
<br/>

`1、它会帮我们全局安装一个create-vite（vite脚手架）（就相当于在vue-cli内置了webpack一样）`
<br/>

`2、直接运行这个create-vite bin目录下的一个执行配置`
<br/>

```js
// 预设，就是 create-vite帮我们配置好了所有场景的配置：下载vite、post-css、less、babel，同时把配置调整到了最佳实践
// vue-cli     ---> 内置了 webpack
// create-vite ---> 内置了 vite
// vue团队希望弱化vite的存在感，不希望新的用户使用vite的时候觉得不好用，所以在脚手架里直接内置了vite，并把配置调整到了最佳实践
```
<br/>

`相当于 webpack 与 vue-cli 的关系 （out of box），create vite内置了vite`
<br/>

`默认情况下（无任何构建工具），我们的esmodule去导入资源的时候，要么是绝对路径，要么是相对路径，如果是直接使用 import _ from 'lodash，而又在没有构建工具时，浏览器也不知道有node_modules的存在，浏览器也不知道如何去寻找资源`
<br/>

`既然我们的最佳实践是需要node_modules， 为什么浏览器不直接搜寻node_modules呢？`
<br/>

`因为：浏览器端的资源都是通过网络请求获取到的，依赖的中也会有其他三方依赖，浏览器不去直接读取node_modules是因为浏览器承载不了那么多东西的，虽然commonjs支持，但也是而服务端读取本地资源，不会发生网络请求`
<br/> 

`而  vite 就是来做代码处理的`
<br/>


#### vite的预加载(依赖预构建)
`在处理第三方依赖的时候，如果遇到了有非绝对路径和非相对路径的引用（import、require），它则会尝试开启路径补全`
```js
// 比如
import _ from 'lodash'
// 补全后
import lodash_xxx_xxx from '/node_modules/.vite/lodash'
// 找寻依赖的过程是自当前目录一次向上查找的过程，直到搜寻到根目录或者搜寻到对应的依赖为止

// 在开发环境，会vite会自己做，在生产环境，vite会全权交给rollup的库去完成生产打包
```
<br/>


`vite只支持 esmodule 格式，需要处理的是各种三方依赖，以及三方依赖的依赖他们不一定是 esmodule，相比如 react、axios等它们采用的commonjs规范`
<br/>

`所以vite 需要解决的是：首先会找到对应的依赖，然后调用esbuild（对js语法进行统一处理的库，go语言写的），将其它规范的代码转换成esmodule规范，然后放到当前目录下的node_modules/.vite/deps，同时对esmodule规范的各个模块进行统一集成，最后只生成一个或几个模块`
<br/>

**解决了3个问题（官方说了两个）**
<br/>

`1、不同的第三方包会有不同的导出格式（这是vite没法约束人家的事情）`
<br/>

`2、对路径上的处理可以直接使用 .vite/deps，方便路径重写`
<br/>

`3、网络多包传输的性能问题（也是原生esmodule规范不敢支持node_modules的原因之一），有了依赖与构建以后，无论它有多少额外的export和import，vite都尽可能的将他们进行集成，最后只生成一个或几个模块`
<br/>


#### 开发和生产
`开发 pnpm run dev`
<br/>

`生产 vite 依赖于 rollup 进行构建`
<br/>

`新建对应模式下的 config 文件 利用策略模式进行集成`
<br/>


#### vite的环境变量的处理
`补充：为什么vite.config.ts 可以书写成esmodule的格式，这是因为vite它在读取这个vite.config.ts的时候会率先解析文件语法，如果发现是esmodule规范，会直接将你的esmodule规范进行替换成commonjs规范`
<br/>


`vite 内置了 dotenv(多塔恩物)第三方库来实现 获取环境变量 （dotenv会自动读取 .env文件，并解析这个文件中的环境变量，利用split“=”来分割最后组装成一个键值对的对象，并将其注入到 process 这个对象上）**(但是vite考虑到和其他配置的一些冲突的问题，他不会直接注入到process对象下)**`


```js
// 涉及到 vite.config.ts中的一些配置
// - root
// - envDir: 用来配置当前环境变量的文件地址
```

`vite也给我们提供了一些补偿措施，利用loadEnv()这个方法可以获取到环境变量的配置，这只在服务端，而在客户端则利用import.meta.env 来获取环境变量`

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

`以上是服务端通过loadEnv方法来获取环境变量，而在客户端 则使用 vite => import.meta.env.XXX 来获取相关的环境变量； 环境变量文件中 默认需要设置以 VITE_ 开头的变量，不然也获取不到变量`
<br/>

`vite 做了一个拦截，它为了防止我们将隐私性的变量直接宋金 import.meta.env中，所以它做了一层拦截，如果你的环境变量不是以 VITE_ 开头的，它就不会帮我们注入到客户端中取，如果我们想要更改这个前缀，需要去  defineConfig中配置{ envPrefix: 'ENV_' }，envPrefix属性值 是开发者可以自定义前缀，（这个名称只影响客户端 不影响服务端）`
<br/>


#### 实现一套简单的 vite 开发服务器
`在浏览器、或服务器眼里，文件都是字符串，根据Content-type的值去解析`
<br/>


#### vite 处理css