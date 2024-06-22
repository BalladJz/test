<script setup lang="ts">
import { computed } from 'vue'
import { routes } from '@/router/index'

const routeList = computed(() => {
  // console.log(routes.filter((v) => v.path !== '/'))

  return routes.filter((v) => !v.redirect)
})
</script>

<template>
  <div class="flex justify-between layout">
    <div class="bg-[#f1f1f1] w-[160px] nav mr-6">
      <template v-for="route in routeList" :key="route.path">
        <router-link
          :to="route.children?.[0].path"
          class="flex flex-col justify-center items-start pl-4 h-[40px] my-4 py-4 bg-[skyblue]"
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

<style scoped lang="scss">
.layout {
  height: 100%;
  .nav {
    height: 100%;
  }
  .app-main {
    height: 100%;
  }
}
</style>
