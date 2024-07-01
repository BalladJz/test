// 测试 浏览器 读取 .vue 的文件资源
import './App.vue'

// vite 是如何让浏览器认识.vue 文件的
// 如果发现是 Vue文件 会做一个字符串替换：VueContent.toString().find('template'), 如果匹配到了就会直接全部进行字符串替换
// 其实会走AST 正则语法分析 ==> 调用Vue.createElement() --> 构建原生DOM
// 并且 返回给浏览器时 设置 Content-type的类型 Content-type: 'text-javascript' 告诉浏览器以什么样的格式去解析这个文件
// 在浏览器和服务器眼里，你的文件都是字符串，至于怎么解析 全看Content-type的值去解析

console.log('ballad.js')
