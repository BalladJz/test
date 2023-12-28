<script setup lang="ts">
import AMapLoader from '@amap/amap-jsapi-loader';
import { onMounted, ref, watch } from 'vue';


const myMap = ref()
const isVisible = ref(false)

// const initMap = () => AMapLoader.load({
//     // @ts-ignore
//     key: import.meta.env.VITE_AMAP_KEY, // 申请好的Web端开发者Key，首次调用 load 时必填
//     version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
//     plugins: ['ToolBar', 'Scale'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
// })
//     .then((AMap) => {
//         myMap.value = new AMap.Map("container", {
//             // 设置地图容器id
//             mapStyle: "amap://styles/graffiti", //设置地图的显示样式
//             viewMode: "2D", // 是否为3D地图模式
//             zoom: 6, // 初始化地图级别
//             center: [121.378466, 31.270302], // 初始化地图中心点位置
//         });
//         myMap.value.addControl(toolbar);
//     })
//     .catch((e) => {
//         console.log(e);
//     });


const initMap = async () => {
    const AMap = await AMapLoader.load({
        // @ts-ignore
        key: import.meta.env.VITE_AMAP_KEY, // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['ToolBar', 'Scale'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等

    })

    new AMap.Map("container", {
        // 设置地图容器id
        mapStyle: "amap://styles/graffiti", //设置地图的显示样式
        viewMode: "2D", // 是否为3D地图模式
        zoom: 12, // 初始化地图级别
        center: [121.378466, 31.270302], // 初始化地图中心点位置
    });

    const layer = new AMap.createDefaultLayer({
        zooms: [3, 20], //可见级别
        visible: false, //是否可见
        opacity: 1, //透明度
        zIndex: 10, //叠加层级
    });
    // myMap.value.addControl(toolbar);

}


onMounted(() => {
    initMap()
})
watch(isVisible, visible => {
    console.log('56 => MapContainer.vue', visible)
})
</script>

<template>
    <div class="flex items-center flex-col justify-center ">
        <button @click="isVisible = !isVisible" class="block mb-8 rounded-[4px] bg-[#466dcf] p-2">切换图层</button>

        <div id="container" class="w-[1800px] h-[800px]" />
    </div>
</template>

<style scoped></style>