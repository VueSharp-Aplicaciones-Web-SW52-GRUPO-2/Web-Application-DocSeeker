<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "login-footer"
})
</script>

<template>
  <pv-toolbar class="toolbar p-d-flex p-jc-between p-ai-center">
    <template #start>
      <div class="p-d-flex p-ai-center">
        <span class="px-5">DocSeeker 2023 | All rights reserved</span>
      </div>
    </template>
    <template #end>
      <div class="p-d-flex p-ai-center">
        <span class="px-5">Terms and Conditions</span>
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>
.toolbar {
  border-radius: 20px;
  margin: 10px;
  height: 100px;
}

</style>