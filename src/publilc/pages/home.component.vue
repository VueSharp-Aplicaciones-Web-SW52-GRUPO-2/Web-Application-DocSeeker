<template>
    <div>
        <h1>News</h1>
        <div class="flex flex-row">
            <div v-for="(singleNew,index) in news">
                <div v-if="index < 3">
                    <div class="flex align-items-center justify-content-center">
                        <new-card :cardDetail="singleNew"></new-card>
                    </div>
                </div>
            </div>
        </div>
        <h1>Options</h1>
        <div class="grid text-center">
            <div class="col-4"><pv-button size="large" class="w-full justify-content-center">Medical
                History</pv-button></div>
            <div class="col-4"><pv-button size="large" class="w-full justify-content-center">Profile</pv-button></div>
            <div class="col-4"><pv-button size="large" class="w-full justify-content-center">Appointment</pv-button></div>
        </div>
        <div class="grid">
            <div class="col-4"><pv-button size="large" class="w-full justify-content-center">Doctors</pv-button></div>
            <div
                class="col-4"><pv-button size="large" class="w-full justify-content-center">Prescriptions</pv-button></div>
            <div class="col-4"><pv-button size="large" class="w-full justify-content-center">News</pv-button></div>
        </div>

    </div>
</template>

<script>
import {defineComponent} from 'vue'
import {NewsApiService} from "../../docseeker/services/news-api.service.js";
import NewCard from "../../shared/components/new-card.component.vue";

export default defineComponent({
    name: "home",
    components: {NewCard},
    data() {
        return {
            news: [],
            newsService: null
        }
    },
    created() {
        this.newsService = new NewsApiService();
        this.newsService.getAll().then((response) => {
            this.news = response.data
            console.log(response);
        })
        console.log(this.news);
    },
    methods: {}
})
</script>

<style scoped>

</style>