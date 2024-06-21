<script lang="ts" setup>
import { ref } from 'vue'

const uploadFile = ref()
const uploadChunkList = ref()

/** 文件切片 */
const createChunk = (file?: File, FILE_SIZE: number = 1 * 1024 * 1024) => {
  if (!file) return
  const chunkList = []
  let cur = 0
  while (cur < file.size) {
    chunkList.push({ file: file.slice(cur, cur + FILE_SIZE) })
    cur += FILE_SIZE
  }
  return chunkList
}

const handleChange = (e: any) => {
  uploadFile.value = e.target.files[0]
  console.log(uploadFile.value)

  const chunkList = createChunk(uploadFile.value, 1024)
  console.log(chunkList)

  uploadChunkList.value = chunkList?.map(({ file }, index) => {
    return {
      file,
      size: file.size,
      percent: 0,
      chunkName: `${uploadFile.value.name}-${index + 1}`,
      fileName: uploadFile.value.name,
      index
    }
  })

  console.log(uploadChunkList.value)
}
</script>

<template>
  <div>
    <div style="margin: 100px">
      <input type="file" @change="handleChange($event)" />
    </div>
  </div>
</template>
