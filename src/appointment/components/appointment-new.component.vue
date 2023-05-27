<script>
import {defineComponent} from 'vue'
import LoginFooter from "../../login/public/components/login-footer.component.vue";
import LoginToolbar from "../../login/public/components/login-toolbar.component.vue";
import axios from "axios";
import SideBar from "../../shared/components/side-bar.component.vue";

export default defineComponent({
  name: "appointment-new",
  components: {SideBar, LoginToolbar, LoginFooter },
  data() {
    return {
      selectedSpecialty: null,
      selectedDoctor: null,
      specialties: [],
      doctors: [],
      filteredDoctors: [],
      datetime12h: null,
      authenticatedUser: null
    };
  },
  mounted() {
    this.fetchSpecialties();
    this.fetchDoctors();
    this.fetchUserAppointments();
  },
  computed: {
    doctorOptions() {
      return this.filteredDoctors.map(doctor => doctor.name);
    }
  },
  methods: {
    async fetchSpecialties() {
      try {
        const response = await axios.get('http://localhost:3000/doctors');
        const doctors = response.data;
        const specialties = doctors.map(doctor => doctor.specialty);
        this.specialties = [...new Set(specialties)];
      } catch (error) {
        console.error(error);
      }
    },
    async fetchDoctors() {
      try {
        const response = await axios.get('http://localhost:3000/doctors');
        this.doctors = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    filterDoctors() {
      if (this.selectedSpecialty) {
        this.filteredDoctors = this.doctors.filter(doctor => doctor.specialty === this.selectedSpecialty);
      } else {
        this.filteredDoctors = [];
      }
    },
    async fetchUserAppointments() {
      try {
        const authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
        this.authenticatedUser = authenticatedUser;
      } catch (error) {
        console.error(error);
      }
    },
    async createAppointment() {
      try {
        const authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));

        const lastAppointment = authenticatedUser.appointments.slice(-1)[0];
        const newId = lastAppointment ? lastAppointment.id + 1 : 1;

        const newAppointment = {
          id: newId,
          specialty: this.selectedSpecialty,
          doctor: this.selectedDoctor,
          datetime: this.datetime12h
        };

        authenticatedUser.appointments.push(newAppointment);

        await axios.put(`http://localhost:3000/users/${authenticatedUser.id}`, authenticatedUser);

        localStorage.setItem('authenticatedUser', JSON.stringify(authenticatedUser));

        this.selectedSpecialty = null;
        this.selectedDoctor = null;
        this.datetime12h = null;

        // Actualizar la lista de citas después de agregar una nueva cita
        this.fetchUserAppointments();

        console.log('Cita creada exitosamente');
      } catch (error) {
        console.error(error);
      }
    },
  }
});
</script>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: 'Appoinment Records',
    icon: 'pi pi-fw pi-calendar',
    to: '/appointment-records'
  },
  {
    label: 'Create a Appoinment',
    icon: 'pi pi-fw pi-calendar',
    to: '/appointment-new'
  }
]);
</script>

<template>
  <side-bar></side-bar>
  <div class="pv-card">
    <pv-tab-menu :model="items" />
    <router-view />
  </div>
  <div class="grid p-align-center card">
    <div class="col-12">
      <div class="p-fluid text-center">
        <pv-card class="pv-card">
          <template #title>New Appointment</template>
          <template #content>
            <div class="grid">
              <div class="col-12">
                <label for="specialities">Specialities</label>
                <pv-dropdown v-model="selectedSpecialty" :options="specialties" class="my-2" placeholder="Selecciona una especialidad" @change="filterDoctors"></pv-dropdown>
              </div>
              <div class="col-12">
                <label for="doctors">Doctors</label>
                <pv-dropdown v-model="selectedDoctor" :options="doctorOptions" class="my-2" placeholder="Selecciona un doctor"></pv-dropdown>
              </div>
              <div class="col-12 ">
                <label for="date">Date</label>
                <pv-calendar id="calendar-12h" v-model="datetime12h" showTime hourFormat="12" inputId="birth_date"/>
              </div>
            </div>
            <pv-button class="pv-button my-2" label="Create Appointment" @click="createAppointment" />
          </template>
        </pv-card>
      </div>
    </div>
  </div>

</template>

<style scoped>
.pv-card {
  border-color: #0093AB;
  border-radius: 20px;
}
.card {
  background: #0093AB;
  border-radius: 20px;
  margin: 10px;
}
.pv-button {
  border-radius: 20px;
}
</style>