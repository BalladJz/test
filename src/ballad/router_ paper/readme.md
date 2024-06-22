### pnpm i vue-router


### 安装sass pnpm i sass -D
#### 在style.css的文件中 定义 #app 高度百分百


### src下 新建 views 文件夹
#### 在 views 创建 页面级 文件


### src下 新建 layout 文件夹 并新建 index.vue 文件
#### 编写路由代码 src/router/index.ts （？？？一级不能给name属性）


### src下 新建 router 文件夹 并新建 index.ts与modules模块 
#### 利用vue-router内置的方法 createRouter 创建路由实例，并利用 createWebHistory / createWebHashHistory配置路由模式 导出路由，并在 main.ts中导入 并挂载到根节点上


### 布局 
#### 在app.vue 文件中配置 路由出口
#### 在layout/index.vue文件下 理由 router-view + router-link 等vue-router内置组件进行路由布局 利用flex布局，左侧导航 + 右侧main 
