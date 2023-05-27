<script>
import {defineComponent} from 'vue'
import LoginFooter from "../../login/public/components/login-footer.component.vue";
import LoginToolbar from "../../login/public/components/login-toolbar.component.vue";

export default defineComponent({
  name: "appointment-main",
  components: { LoginToolbar, LoginFooter}

})
</script>

<script setup>
import { ref } from "vue";
import SideBar from "../../shared/components/side-bar.component.vue";
const active = ref(0);
const items = ref([
  {
    label: 'Appoinment Records',
    icon: 'pi pi-fw pi-calendar',
    to: '/appointment-records'
  },
  {
    label: 'Create a Appoinment',
    icon: 'pi pi-fw pi-calendar',
    to: '/appointment-new'
  }
]);

</script>

<template>
  <side-bar></side-bar>
  <div class="pv-card">
    <pv-tab-menu :model="items" v-model:activeIndex="active" />
    <router-view />
  </div>
</template>

<style scoped>
.pv-card {
  border-color: #0093AB;
  border-radius: 20px;
}

img {
  width: 55%;
  padding: 20px;
}

img {
  animation-name: pulse;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
</style>