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
    <pv-sidebar v-model:visible="sidebarVisible"></pv-sidebar>

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
