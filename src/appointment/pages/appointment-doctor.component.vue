<script>
import {defineComponent} from 'vue'
import SideBar from "../../shared/components/side-bar.component.vue";
import axios from "axios";
import LoginFooter from "../../login/public/components/login-footer.component.vue";

export default defineComponent({
  name: "appointment-doctor",
  components: {LoginFooter, SideBar},
  props: {
    doctor: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      doctors: []
    };
  },
  async created() {
    try {
      const response = await axios.get('../../../server/db.json');
      this.doctors = response.data.doctors;
    } catch (error) {
      console.error(error);
    }
  }
})
</script>

<template>
  <side-bar></side-bar>
  <div class="grid p-align-center card">
    <div class="col-3">
      <div class="p-fluid text-center">
        <pv-card class="pv-card" v-for="doctor in doctors" :key="doctor.id">
          <template #content>
            <img src="../../assets/images/login-doctor.png" alt="Patient Image" style="width: 150px;">
          </template>
        </pv-card>
      </div>
    </div>
    <div class="col-9">
      <div class="p-fluid container">
        <pv-card class="pv-card" v-for="doctor in doctors" :key="doctor.id">
          <template #content>
            <div class="grid">
              <div class="col-6">
                <h5 class="card-text">{{ doctor.name }}</h5>
              </div>
              <div class="col-6">
                <h5 class="card-text">Specialty: {{ doctor.specialty }}</h5>
              </div>
              <div class="col-6">
                <p class="card-text">{{ doctor.description }}</p>
              </div>
              <div class="col-3">
                <p class="card-text">Phone: {{ doctor.phone }}</p>
              </div>
              <div class="col-3">
                <p class="card-text">Email: {{ doctor.email }}</p>
              </div>
            </div>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
  <login-footer></login-footer>
</template>

<style scoped>
.pv-card {
  border-color: #0093AB;
  border-radius: 20px;
  height: 200px;
  margin-bottom: 10px;
}
.card {
  background: #0093AB;
  border-radius: 20px;
  margin: 10px;
}
</style>