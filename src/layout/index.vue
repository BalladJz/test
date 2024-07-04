<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import { routes } from '@router/index'
import useBalladStore from '@store/modules/Ballad'
import ScreenDataV from '@components/ScreenDataV/index.vue'

const routeList = computed(() => routes.filter((v) => !v.redirect))
const { cutLayout } = useBalladStore()

const isisScreenState = ref(false)

onMounted(() => {
  const isScreen = localStorage.getItem('ballad')
  JSON.parse(isScreen).isScreen && cutLayout()
  // const isScreen = localStorage.getItem('ballad')
  // isisScreenState.value = JSON.parse(isScreen).isScreen
})

const goToDataV = async () => {
  cutLayout()
  await nextTick(() => {})
  const isScreen = localStorage.getItem('ballad')
  isisScreenState.value = JSON.parse(isScreen).isScreen
}
</script>

<template>
  <div class="flex flex-col layout">
    <template v-if="!isisScreenState">
      <div class="header">
        <div class="flex justify-end items-center mr-[50px] h-full">
          <text
            class="h-full inline-block px-4 hover:bg-[#435caa] rounded-sm leading-[60px] cursor-pointer"
            @click="goToDataV"
          >
            大屏
          </text>
        </div>
      </div>

      <div class="flex justify-between main">
        <div class="bg-[#f1f1f1] w-[160px] nav mr-6">
          <template v-for="route in routeList" :key="route.path">
            <router-link
              :to="route.children?.[0].path"
              class="flex flex-col justify-center items-start pl-4 h-[40px] my-4 py-4 bg-[#6c8bd7]"
            >
              {{ route.children?.[0].meta.name ?? '-' }}
            </router-link>
          </template>
        </div>

        <div class="app-main flex-1">
          <router-view></router-view>
        </div>
      </div>
    </template>
    <template v-else>
      <ScreenDataV />
    </template>
  </div>
</template>

<style scoped lang="scss">
.layout {
  height: 100%;
  .header {
    height: 60px;
    background-color: #7691c7;
  }
  .main {
    height: calc(100vh - 64px);
    .nav {
      height: 100%;
    }
    .app-main {
      height: 100%;
    }
  }
}
</style>
