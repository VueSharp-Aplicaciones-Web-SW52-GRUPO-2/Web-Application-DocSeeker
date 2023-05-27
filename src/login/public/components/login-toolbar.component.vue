<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "login-toolbar",
})
</script>

<template>
  <pv-toolbar class="toolbar">
    <template #start>
      <img src="../../../assets/images/logo-toolbar.png" alt="Photo Pacient">
    </template>
    <template #end>
    </template>
  </pv-toolbar>
</template>

<style scoped>
.toolbar {
  background: #0093AB;
  border-color: #0093AB;
  border-radius: 20px;
  margin: 10px;
}
img {
  width: 220px ;
}
</style>