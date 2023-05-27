<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "side-bar",
  data() {
    return {
      sidebarVisible: false
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('authenticatedUser');
      this.$router.push({ name: 'login-patient' });
    }
  }
})
</script>

<template>
  <pv-toolbar class="toolbar">
    <template #start>
      <a href="https://vuesharp-aplicaciones-web-sw52-grupo-2.github.io/Landing-Page-DocSeeker">
        <img src="../../assets/images/logo-toolbar.png" alt="Photo Pacient">
      </a>
    </template>
    <template #end>
      <pv-button class="p-button-text text-white" icon="pi pi-bars" @click="sidebarVisible = !sidebarVisible"></pv-button>
    </template>
  </pv-toolbar>
  <pv-sidebar v-model:visible="sidebarVisible">
    <div class="col-12 text-center">
      <img src="../../assets/images/logo-toolbar.png " alt="Photo Pacient">
    </div>
    <div class="col-12">
      <pv-button class="w-full justify-content-center pv-button" label="Home" @click="$router.push('/home')" />
    </div>
    <div class="col-12">
      <pv-button class="w-full justify-content-center pv-button" label="Medical Records" @click="$router.push('/medical-record')" />
    </div>
    <div class="col-12">
      <pv-button class="w-full justify-content-center pv-button" label="Prescriptions" @click="$router.push('/prescriptions')" />
    </div>
    <div class="col-12">
      <pv-button class="w-full justify-content-center pv-button" label="Appointments" @click="$router.push('/appointment')" />
    </div>
    <div class="col-12">
      <pv-button class="w-full justify-content-center pv-button" label="News" @click="$router.push('/news')" />
    </div>
    <div class="col-12">
      <pv-button class="w-full justify-content-center pv-button" label="Doctors" @click="$router.push('/doctors')" />
    </div>
    <div class="col-12">
      <pv-button class="w-full justify-content-center pv-button" label="Profile" @click="$router.push('/profile')" />
    </div>
    <div class="col-12">
      <pv-button class="w-full justify-content-center pv-button"  @click="logout" label="Close" severity="danger" />
    </div>
  </pv-sidebar>
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
.pv-button {
  border-radius: 20px;
}

</style>