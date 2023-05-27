<script>
import {defineComponent} from 'vue'
import LoginToolbar from "../../login/public/components/login-toolbar.component.vue";
import SideBar from "../../shared/components/side-bar.component.vue";

export default defineComponent({
  name: "medical-record",
  components: {SideBar, LoginToolbar},
  data() {
    return {
      storedUser: {}
    }
  },
  mounted() {
    this.retrieveStoredUser();
  },
  methods: {
    retrieveStoredUser() {
      const storedUser = localStorage.getItem('authenticatedUser');
      if (storedUser) {
        this.storedUser = JSON.parse(storedUser);
        console.log('Stored User:', this.storedUser);
      }
    }
  }
})
</script>

<template>
  <side-bar></side-bar>
  <div class="p-fluid container card">
    <pv-card class="pv-card">
      <template #content>
        <div class="grid ">
          <div class="col-4 text-center">
            <img src="../../assets/images/height.svg" alt="Patient height" style=" width: 120px; ">
          </div>
          <div class="col-4 text-center">
            <img src="../../assets/images/weight.svg" alt="Patient weight" style=" width: 120px; ">
          </div>
          <div class="col-4 text-center">
            <img src="../../assets/images/bmi.svg" alt="Patient BMI" style=" width: 120px; ">
          </div>
        </div>
        <div class="grid ">
          <div class="col-4 text-center">
            <h5 class="card-text">Height: {{ storedUser.height }}</h5>
          </div>
          <div class="col-4 text-center">
            <h5 class="card-text">Weight: {{ storedUser.weight }}</h5>
          </div>
          <div class="col-4 text-center">
            <h5 class="card-text">BMI: {{ storedUser.bodyMass }}</h5>
          </div>
          <div class="col-4 "></div>
          <div class="col-4 ">
            <h5 class="card-text">Allergies</h5>
            <li v-for="allergy in storedUser.allergies" :key="allergy">{{ allergy }}</li>
          </div>
          <div class="col-4">
            <h5 class="card-text">Pathological</h5>
            <li v-for="pathologicals in storedUser.pathological" :key="pathologicals">{{ pathologicals }}</li>
          </div>
          <pv-button class="pv-button mt-5"  label="Change information"/>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.pv-card {
  border: 2px solid #0093AB;
  border-radius: 20px;
}
.card {
  border-radius: 20px;
  margin: 10px;
}
.pv-button {
  border-radius: 20px;
}
</style>