<script>
import {defineComponent} from 'vue'
import LoginToolbar from "../../login/public/components/login-toolbar.component.vue";
import LoginFooter from "../../login/public/components/login-footer.component.vue";
import axios from 'axios';
import SideBar from "../../shared/components/side-bar.component.vue";
export default defineComponent({
  name: "appointment-record.component",
  components: {SideBar, LoginFooter, LoginToolbar},
  data() {
    return {
      appointments: [],
      doctors: [],
    };
  },
  computed: {
    filteredAppointments() {
      const patientId = localStorage.getItem('id');
      return this.appointments.filter(appointment => appointment.patientId === parseInt(patientId));
    },
    doctorMap() {
      return this.doctors.reduce((map, doctor) => {
        map[doctor.id] = doctor.name + ' ' + doctor.lastname + ' ' + doctor.middlename;
        return map;
      }, {});
    },
    specialityMap() {
      return this.doctors.reduce((map, doctor) => {
        map[doctor.id] = doctor.speciality;
        return map;
      }, {});
    },
  },
  mounted() {
    axios
        .get('https://docseekerapi.azurewebsites.net/api/v1/appointments')
        .then(response => {
          this.appointments = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    this.fetchDoctors();
  },
  methods: {
    async fetchDoctors() {
      try {
        const response = await axios.get('https://docseekerapi.azurewebsites.net/api/v1/doctors');
        this.doctors = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    getDoctorName(doctorId) {
      return this.doctorMap[doctorId] || '';
    },
    getSpeciality(doctorId) {
      return this.specialityMap[doctorId] || '';
    },
    async deleteAppointment(appointmentId) {
      try {
        await axios.delete(`https://docseekerapi.azurewebsites.net/api/v1/appointments/${appointmentId}`);
        this.appointments = this.appointments.filter(appointment => appointment.id !== appointmentId);
      } catch (error) {
        console.error(error);
      }
    },
    formatDateTime(dateTime) {
      const date = new Date(dateTime);
      const formattedDate = date.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      const formattedTime = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });

      return `${formattedDate} ${formattedTime}`;
    },
  },

})
</script>

<script setup>
import { ref, computed } from 'vue';


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
  <div class="card">
    <pv-tab-menu :model="items" />
    <router-view />
  </div>
  <div class="grid p-align-center card">
    <div class="col-12">
      <div class="p-fluid container">
        <pv-card class="no-appointment text-center" v-if="filteredAppointments.length === 0">
          <template #content>
            <div class="grid">
              <div class="col-12">
                <h4>No appointments found.</h4>
              </div>
            </div>
          </template>
        </pv-card>
        <pv-card class="pv-card" v-for="appointment in filteredAppointments" :key="appointment.id">
          <template #content>
            <div class="grid">
              <div class="col-12">
                <h4>Speciality: {{ getSpeciality(appointment.doctorId) }} - ID: {{appointment.id}}</h4>
              </div>
              <div class="col-6">
                <h4>Doctor: {{ getDoctorName(appointment.doctorId) }}</h4>
              </div>
              <div class="col-6">
                <h4><strong>Date and Time:</strong> {{ formatDateTime(appointment.date) }}</h4>
              </div>
              <div class="p-d-flex p-jc-end">
                <pv-button class="p-button-rounded p-button-danger" @click="deleteAppointment(appointment.id)">
                  Delete
                </pv-button>
              </div>
            </div>
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
  margin-bottom: 10px;
}
.card {
  background: #0093AB;
  border-radius: 20px;
  margin: 10px;
}
.no-appointment {
  background: #ffffff;
  border-radius: 20px;
}
</style>