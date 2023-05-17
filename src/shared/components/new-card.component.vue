<template>
    <div class="card flex align-items-center justify-content-center">
        <pv-card style="width: 20em">
            <template #header>
                <img alt="covid image" style="width: 100%"
                     src="https://www.paho.org/sites/default/files/styles/max_1500x1500/public/2021-05/covid-19-variants.jpg?itok=szJH1mCw"/>
            </template>
            <template #title>{{ cardDetail.title }}</template>
            <template #subtitle> {{ cardDetail.date }}</template>
            <template #content>
                <p>{{ cardDetail.description }}</p>
            </template>
        </pv-card>
    </div>

</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "new-card",
    props: {
        cardDetail: null
    }
})
</script>

<style scoped>
.card {
    padding: 2em;
}
</style>