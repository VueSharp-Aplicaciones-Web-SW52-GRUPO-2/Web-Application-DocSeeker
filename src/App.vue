<template>
    <header>
        <pv-toolbar class="bg-primary">
            <template #start>
                <pv-button class="p-button-text text-white" icon="pi pi-bars"
                           @click="sidebarVisible = !sidebarVisible"></pv-button>
                <h3>DocSeeker</h3>
            </template>
            <template #end>

            </template>
        </pv-toolbar>
    </header>
    <pv-sidebar v-model:visible="sidebarVisible">
        <div>
            <div class="py-3 pl-3">Profile</div>
            <div class="py-3 pl-3">Appointment</div>
            <div class="py-3 pl-3">Doctors</div>
            <div class="py-3 pl-3">Medical History</div>
            <div class="py-3 pl-3">Prescriptions</div>
            <div class="py-3 pl-3">News</div>
        </div>
    </pv-sidebar>
    <router-view></router-view>
</template>

<script>
import MainContent from "./docseeker/pages/main-content.component.vue";

export default {
    name: "App",
    components: {MainContent},
    data() {
        return {
            sidebarVisible: false
        }
    }
}
</script>

<style scoped>

</style>
