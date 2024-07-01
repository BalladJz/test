
```js
/**
 * ## html第一行代码的作用
 * <!DOCTTYPE html> 用于声明文档的类型，并告诉浏览器使用哪种html标准来解析页面
 */


/**
 * 一、head标签
 * head标签用于定于文档头部信息，它是所有头部元素的容器。head中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等等。
 * 文档的头部描述了文档的各种属性和信息，包括文档的标题、在 Web 中的位置以及和其他文档的关系等。绝大多数文档头部包含的数据都不会真正作为内容显示给读者。
 * 下面这些标签可用在 head 部分：base, link, meta, script, style, 以及 title。
 */


/**
 * 二、head 下 title 标签
 * title 定义文档的标题，对SEO有重要意义，它是 head 部分中唯一必需的元素。浏览器会以特殊的方式来使用标题，通常把它放置在浏览器窗口的标题栏或状态栏上，如设置为空标题展示当前页面的地址信息。
 * dir属性： 规定元素中内容的文本方向rtl、ltr。
 * lang属性：规定元素中内容的语言代码。
 */


/**
 * 三、head 下 meta 标签
 * meta 元素往往不会引起用户的注意，但是meta对整个网页有影响，会对网页能否被搜索引擎检索，和在搜索中的排名起着关键性的作用。
 * meta有个必须的属性content用于表示需要设置的项的值。
 * meta存在两个非必须的属性http-equiv和name, 用于表示要设置的项。
 * <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 告诉浏览器将所有的非安全 (HTTP) 请求升级为安全 (HTTPS) 请求，提高你网站的安全性
 * 元数据 关于数据的数据。它描述了其他数据的属性或特征，以便于理解、管理和处理这些数据。元数据可以在不同的上下文中使用，从数据库和文件系统到网络资源和网页内容
 * 
 * 1. http-equiv 属性 一般设置的都是与http请求头相关的信息，设置的值会关联到http头部。也就是说浏览器在请求服务器获取html的时候，服务器会将html中设置的meta放在响应头中返回给浏览器，如果在我们的http头部中也设置了这个属性，并且和meta中设置的有冲突，那么哪一个优先呢？ 答案是：开发者偏好（meta元素）优先于Web服务器设置（HTTP头）。
 *    常见的类型比如content-type, expires, refresh, set-cookie, window-target, charset， pragma等等
 *      1）、content-type <meta http-equiv="content-type" content="text/html charset=utf8">可以用来声明文档类型、设字符集，目前content-type只能在html文档中使用
 *        这样设置浏览器的头信息就会包含: content-type: text/html charset=utf8
 *      2）、expires <meta http-equiv="expires" content="31 Dec 2021">
 *          用于设置浏览器的过期时间, 其实就是响应头中的expires属性。expires:31 Dec 2008
 *      3）、refresh <meta http-equiv="refresh" content="5 url=http://www.baidu.com">
 *          该种设定表示5秒自动刷新并且跳转到指定的网页。如果不设置url的值那么浏览器则刷新本网页。
 *      4）、window-target <meta http-equiv="window-target" content="_top'>
 *          强制页面在当前窗口以独立页面显示, 可以防止别人在框架中调用自己的页面。
 *      5）、pragma <meta http-equiv="pragma" content="no-cache">
 *          禁止浏览器从本地计算机的缓存中访问页面的内容
 *      6）、X-UA-Compatible <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
 *          它是用来是做IE浏览器适配的。
 *          IE=edge告诉浏览器，以当前浏览器支持的最新版本来渲染，IE9就以IE9版本来渲染。 这个属性支持的范围是IE8-IE11
 *          chrome=1告诉浏览器，如果当前IE浏览器安装了Google Chrome Frame插件，就以chrome内核来渲染页面。如果有chrome插件，就以chrome内核渲染，如果没有，就以当前浏览器支持的最高版本渲染。
 *      7）、x-dns-prefetch-control  <meta http-equiv="x-dns-prefetch-control" content="on">
 *          一般来说，HTML页面中的a标签会自动启用DNS提前解析来提升网站性能，但是在使用https协议的网站中失效了，我们可以设置：<meta http-equiv="x-dns-prefetch-control" content="on"> 来打开dns对a标签的提前解析
 * 
 * 2. name 属性 主要用于描述网页，与对应的content中的内容主要是便于搜索引擎查找信息和分类信息用的, 用法与http-equiv相同，name设置属性名，content设置属性值。
 *      1）、author <meta name="author" content="aaa@mail.abc.com">
 *          author用来标注网页的作者
 *      2）、description <meta name="description" content="这是我的HTML">
 *          description用来告诉搜素引擎当前网页的主要内容，是关于网站的一段描述信息。
 *      3）、keywords <meta name="keywords" content="Hello world">
 *          keywords设置网页的关键字，来告诉浏览器关键字是什么。是一个经常被用到的名称。它为文档定义了一组关键字。某些搜索引擎在遇到这些关键字时，会用这些关键字对文档进行分类。
 *      4）、generator <meta name="generator" content="vscode">
 *          表示当前html是用什么工具编写生成的，并没有实际作用，一般是编辑器自动创建的。
 *      5）、revised <meta name="revised" content="V2，2015/10/1">
 *          指定页面的最新版本
 *      6）、robots <meta name="robots" content="all">
 *          告诉搜索引擎机器人抓取哪些页面，all / none / index / noindex / follow / nofollow。
 *          all：文件将被检索，且页面上的链接可以被查询；
 *          none：文件将不被检索，且页面上的链接不可以被查询；
 *          index：文件将被检索；
 *          follow：页面上的链接可以被查询；
 *          noindex：文件将不被检索，但页面上的链接可以被查询；
 *          nofollow：文件将不被检索，页面上的链接可以被查询。
 *      7）、viewport <meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
 *          width               设置视口的宽度等于设备的宽度。这样可以确保网页的宽度自动适应设备的屏幕宽度。
 *          initial-scale       设置网页的初始缩放比例为1.0，即默认不缩放。
 *          minimum-scale=1     设置网页的最小缩放比例为1，防止用户将网页缩小到低于实际尺寸
 *          maximum-scale=1     设置网页的最大缩放比例为1，防止用户将网页放大超过实际尺寸
 *          user-scalable=no    禁止用户缩放网页。这可以防止用户通过手势放大或缩小网页，但也可能影响可访问性
 *          viewport-fit=cover  在设备支持的情况下，使内容填满整个屏幕，包括设备的安全区域（如 iPhone X 及以后的刘海屏）。这可以确保网页内容充分利用设备屏幕空间。
 *      8）、renderer 用来指定双核浏览器的渲染方式，比如360浏览器，我们可以通过这个设置来指定360浏览器的渲染方式
 *          <meta name="renderer" content="webkit"> //默认webkit内核
 *          <meta name="renderer" content="ie-comp"> //默认IE兼容模式
 *          <meta name="renderer" content="ie-stand"> //默认IE标准模式
 * 
 * 3. scheme 用于指定要用来翻译属性值的方案。此方案应该在由 head 标签的 profile 属性指定的概况文件中进行了定义。html5不支持该属性。
 */


/**
 * 四、head 下 base 标签
 * base标签定义了文档的基础url地址，在文档中所有的相对地址形式的url都是相对于这里定义的url而言的。为页面上的链接规定默认地址或目标。
 *  <base href="http://www.w3school.com.cn/i/" target="_blank" />
 * 1.href：href是必选属性，指定了文档的基础url地址
 *    如果希望将文档的基础URL定义为https：//www.abc.com，
 *    则可以使用如下语句：<base href="http://www.abc.com">
 *    如果文档的超链接指向welcom.html,则它实际上指向的是如下url地址：https://www.abc.com/welocme.html。
 * 2.target 定义了当文档中的链接点击后的打开方式_blank，_self，_parrent，_top。
 */


/** 
 * 五、head 下 link 标签
 * link用于引入外部样式表，在html的头部可以包含任意数量的link <link type="text/css" rel="stylesheet" href="github-markdown.css">
 * 1. type 定义包含的文档类型，例如text/css
 * 2. rel  定义html文档和所要包含资源之间的链接关系，可能的值有很多，最为常用的是stylesheet，用于包含一个固定首选样式的表单。
 * 3. href 表示指向被包含资源的url地址。
 */


/**
 * 六、head 下 script 标签
 *    1. type <script type="text/javascript">
 *      指示脚本的MIME类型。
 *    2. async <script async src="script.js"></script>
 *      async属性的script加载不会影响后面html的解析，加载是与文档解析同时发生的。加载完成后立即执行。此时若html还未解析完，会停止html文档解析，而执行js代码。
 *    3. defer <script defer src="script.js"></script>
 *      defer 安全不会阻止html解析，遇到带有defer的script标签会直接开启异步加载资源，等待html解析完毕后，再执行js代码
 *    4. charset <script type="text/javascript" src="script.js" charset="UTF-8"></script>
 *      规定在外部脚本文件中使用的字符编码。
 *    5. language 规定脚本语言，与``type``功能类似，不建议使用该字段。
 */


/**
 * 七、head 下 bgsound 标签
 * bgsound 网站背景音乐。 <bgsound src="music.mp4" autostart="true" loop="5">
 *  1. src        表示背景音乐的url值。
 *  2. autostart  是否自动播放 true 自动播放，false不播放，默认为false。
 *  3. loop       是否重复播放，值为数字或者infinite，表示重复具体次或无限次。
 * 
 */
```