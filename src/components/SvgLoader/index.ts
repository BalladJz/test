import shutIcon from '@assets/svg/shut.svg'

import shutSvg from '@assets/svg/shut.svg?raw'

console.log('shutIcon', shutIcon);

// 第一种 avg 渲染成图片
// const img = document.createElement('img')
// img.src = shutIcon
// document.body.appendChild(img)



// 第一种 avg 渲染成svg
console.log('shutSvg', shutSvg);
document.body.innerHTML = shutSvg


const svgEl = document.getElementsByTagName('svg')[0]
// const svgEl = document.querySelector('svg')

svgEl.onmouseenter = function () {
  // 修改svg的颜色是 修改fill属性
  this.style.fill = 'pink'
}
