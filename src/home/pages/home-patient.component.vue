<script>
import {defineComponent} from 'vue'
import SideBar from "../../shared/components/side-bar.component.vue";
import axios from "axios";

export default defineComponent({
  name: "home-patient",
  components: { SideBar},
  props: {
    news: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      news: []
    };
  },
  async created() {
    try {
      const response = await axios.get('../../../server/db.json');
      this.news = response.data.news;
    } catch (error) {
      console.error(error);
    }
  }
})
</script>

<template>
  <side-bar></side-bar>
  <div class="grid p-align-center card">
    <div class="col-12">
      <div class="p-fluid text-center">
        <pv-card class="title">
          <template #content>
            <h1>News</h1>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
  <div class="flex flex-row p-align-center card">
          <pv-carousel :value="news" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
              <div class="border-1 surface-border  m-2 py-5 px-3 bg-white carousel">
                <div class="mb-3 text-center ">
                  <img alt="covid image" style="width: 100%; border-radius: 20px;" src="https://www.paho.org/sites/default/files/styles/max_1500x1500/public/2021-05/covid-19-variants.jpg?itok=szJH1mCw"/>
                </div>
                <div>
                  <h3 class="mb-3 text-center ">{{ slotProps.data.title }}</h3>
                  <h5 class="mt-0 mb-3 text-justify">{{ slotProps.data.description }}</h5>
                  <h6 class="mb-1">{{ slotProps.data.date }}</h6>
                  </div>
                </div>
            </template>
          </pv-carousel>
  </div>
  <div class="grid p-align-center card">
    <div class="col-12">
      <div class="p-fluid text-center">
        <pv-card class="title">
          <template #content>
            <h1>Links Helpful</h1>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
  <div class="grid text-center options">
    <div class="col-4">
      <pv-button class="w-full justify-content-center pv-button" label="Medical Records" @click="$router.push('/medical-record')" />
    </div>
    <div class="col-4">
      <pv-button class="w-full justify-content-center pv-button" label="Prescriptions"
                 @click="$router.push('/prescriptions')" />
    </div>
    <div class="col-4">
      <pv-button class="w-full justify-content-center pv-button" label="Appointments" @click="$router.push('/appointment')" />
    </div>
    <div class="col-4">
      <pv-button class="w-full justify-content-center pv-button" label="News" @click="$router.push('/news')" />
    </div>
    <div class="col-4">
      <pv-button class="w-full justify-content-center pv-button" label="Doctors" @click="$router.push('/doctors')" />
    </div>
    <div class="col-4">
      <pv-button class="w-full justify-content-center pv-button" label="Profile" @click="$router.push('/profile')" />
    </div>
  </div>
</template>

<style scoped>
.carousel {
  border-radius: 20px;
}
.title {
  border-color: #0093AB;
  border-radius: 20px;
  height: 150px;
}
.pv-button {
  border-radius: 20px;
}
.card {
  background: #0093AB;
  border-radius: 20px;
  margin: 10px;
}
.options
{
  background: #0093AB;
  border-radius: 20px;
  margin: 10px;
}

</style>