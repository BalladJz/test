// 屏幕适配  函数
import { onMounted, onBeforeUnmount } from 'vue'

// * 设计稿尺寸（px）
function useScale() {
  // * 默认缩放值
  const scale = {
    width: '1',
    height: '1',
  };

  // @ts-ignore 设计稿宽度
  const baseWidth = import.meta.env.VITE_ROOT_WIDTH;

  function resize() {
    clearTimeout(drawTiming);
    drawTiming = setTimeout(() => {
      calcRate();
    }, 200);
  }

  // * 需保持的比例
  let drawTiming: any = null;
  function calcRate() {
    // 拿到整个页面元素
    const appRef: any = document.querySelector('#app');
    // 如果没有值就结束
    if (!appRef) return;
    // 当前宽高比
    // 判断：如果有值代表页面变化了
    if (appRef) {
      // 那么把默认缩放的宽高改为：同比例缩小
      scale.width = (window.innerWidth / baseWidth).toFixed(10);
      scale.height = (window.innerWidth / baseWidth).toFixed(10);
      // 整个页面的元素样式，缩放宽高用当前同比例放大的宽高
      appRef.style.transform = `scale(${scale.width}, ${scale.height}) translateY(-50%)`;
      appRef.style.transformOrigin = `left top`;
      appRef.style.position = 'absolute';
      appRef.style.top = '50%';
    }
  }

  onMounted(() => {
    // 进入触发
    calcRate();
    window.addEventListener('resize', resize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize);
  });
};

export default useScale
