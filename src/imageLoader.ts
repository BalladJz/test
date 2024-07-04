// @ts-nocheck

// 此文件主要是学习怎么加载静态资源
import imgPic from '@assets/image/ts.png?raw'
import user from '@assets/json/index.json'

const img = document.createElement('img')

console.log(imgPic); // 导入路径上 添加 ?raw 会转成 Buffer

console.log(user);


img.src = imgPic


document.body.append(img)