<script setup lang="ts">
import { ref, watch } from 'vue'

// 数字增长效果
defineOptions({
  name: 'NumberAnimation'
})

interface Options {
  form: number
  to: number
  duration: number
  onProgress: (num: number) => void
}

const props = defineProps<{ to?: number }>()

const useNumberAnimation = (options: Options) => {
  const { form, to, duration, onProgress } = options
  let value = form
  const speed = (to - form) / duration
  const startTime = Date.now()

  const run = () => {
    const currentTime = Date.now() - startTime
    if (currentTime > duration) {
      value = to
      onProgress(value)
      return
    }
    value = form + currentTime * speed
    onProgress(value)
    // 动画时间 设定为 900ms，递归调用 run 方法，不会超过60次
    requestAnimationFrame(() => run())
  }
  run()
}

const viewNum = ref(0)

watch(
  () => props.to,
  to => {
    if (!to) return
    useNumberAnimation({
      form: 0,
      to,
      duration: 900,
      onProgress: (v: number) => {
        viewNum.value = Number(v.toFixed())
      }
    })
  },
  {
    immediate: true
  }
)
</script>

<template>
  <text>{{ viewNum }}</text>
</template>