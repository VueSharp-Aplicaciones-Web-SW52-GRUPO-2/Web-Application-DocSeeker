<script>
import {defineComponent} from 'vue'
import axios from "axios";
import SideBar from "../../shared/components/side-bar.component.vue";
import LoginFooter from "../../login/public/components/login-footer.component.vue";

export default defineComponent({
  name: "news-main",
  components: {LoginFooter, SideBar},
  data() {
    return {
      news: []
    };
  },
  mounted() {
    axios.get('http://localhost:3000/news')
        .then(response => {
          this.news = response.data;
        })
        .catch(error => {
          console.error(error);
        });
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
  <div>
    <pv-data-table :value="news" :paginator="true" :rows="5" class="card">
      <pv-column field="image" header="Image">
        <template #body="slotProps">
          <img alt="covid image" style="width: 400px; border-radius: 20px;" :src="slotProps.data.image"/>
        </template>
      </pv-column>
      <pv-column field="title" header="Title" :sortable="true"></pv-column>
      <pv-column field="date" header="Date" :sortable="true"></pv-column>
      <pv-column field="description" header="Description"></pv-column>
    </pv-data-table>
  </div>
  <login-footer></login-footer>
</template>

<style scoped>
.card {
  background: #0093AB;
  border-radius: 20px;
  margin: 10px;
}
.title {
  border-color: #0093AB;
  border-radius: 20px;
  height: 150px;
}
</style>