<template>
    <header>
        <pv-toolbar class="bg-primary">
            <template #start>
                <pv-button class="p-button-text text-white" icon="pi pi-bars"
                           @click="sidebarVisible = !sidebarVisible"></pv-button>
                <h3><a href="https://vuesharp-aplicaciones-web-sw52-grupo-2.github.io/Landing-Page-DocSeeker/public/ " target="_blank">DocSeeker</a></h3>
            </template>
            <template #end>

            </template>
        </pv-toolbar>
    </header>
    <pv-sidebar v-model:visible="sidebarVisible">
        <div>
            <div
                class="py-3 pl-3"><router-link to="/home" class="text-color">Home</router-link></div>
            <div class="py-3 pl-3"><router-link to="/myProfile" class="text-color">Profile</router-link></div>
            <div class="py-3 pl-3">Appointment</div>
            <div class="py-3 pl-3"><router-link to="/doctorList" class="text-color">Doctors</router-link></div>
            <div class="py-3 pl-3"><router-link to="/medicalHistory" class="text-color">Medical
                History</router-link></div>
            <div class="py-3 pl-3">Prescriptions</div>
            <div class="py-3 pl-3">News</div>
        </div>
    </pv-sidebar>
    <router-view></router-view>
</template>

<script>

export default {
    name: "App",
    data() {
        return {
            sidebarVisible: false
        }
    }
}
</script>

<style scoped>

</style>
