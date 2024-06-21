<script setup lang="ts">
// @ts-nocheck
import AMapLoader from '@amap/amap-jsapi-loader'
import { onMounted, ref, watch } from 'vue'

const isVisible = ref(false)

const initMap = async () => {
  // 本地配置 安全密钥（写在别处也行，确保这行代码 比 AMapLoader.load 先执行即可）
  window._AMapSecurityConfig = {
    securityJsCode: import.meta.env.VITE_AMAP_SECURITY_JS_CODE
  }

  const myMap = await AMapLoader.load({
    // @ts-ignore
    key: import.meta.env.VITE_AMAP_KEY, // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    // plugins: ['ToolBar', 'Scale'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    plugins: ['AMap.MarkerCluster', 'AMap.DistrictSearch']
  })

  const map = new myMap.Map('container', {
    // 设置地图容器id
    // mapStyle: 'amap://styles/549ee05aa472fb646ad1163bbeffea01', //设置地图的显示样式
    viewMode: '2D', // 是否为3D地图模式
    zoom: 10, // 初始化地图级别
    center: [121.378466, 31.270302] // 初始化地图中心点位置
    // layers: [
    //     map.createDefaultLayer()
    // ],
  })
}

onMounted(() => {
  initMap()
})
watch(isVisible, (visible) => {
  console.log('56 => MapContainer.vue', visible)
})
</script>

<template>
  <div id="container" class="w-[100%]" style="height: calc(100%)" />
  <div class="flex items-center flex-col justify-center"></div>
</template>

<!-- <style scoped lang="scss">
.container {
    width: vw(200);
    width: vh(100);
}
</style> -->
