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
      appointments: []
    };
  },
  mounted() {
    this.getAppointments();
  },
  methods: {
    getAppointments() {
      const user = JSON.parse(localStorage.getItem('authenticatedUser'));
      if (user && user.id) {

        const url = 'http://localhost:3000/users';

        axios.get(url)
            .then(response => {
              if (response && response.data) {
                const users = response.data;
                const currentUser = users.find(u => u.id === user.id);
                if (currentUser && currentUser.appointments) {
                  this.appointments = currentUser.appointments;
                }
              }
            })
            .catch(error => {
              console.error('Error fetching user data:', error);
            });
      }
    },
    formatDate(datetime) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };
      return new Date(datetime).toLocaleDateString(undefined, options);
    },
    async deleteAppointment(appointmentId) {
      try {
        const user = JSON.parse(localStorage.getItem('authenticatedUser'));
        if (user && user.id) {
          const url = `http://localhost:3000/users/${user.id}`;
          const response = await axios.get(url);
          const currentUser = response.data;

          // Buscar el índice de la cita en el array de citas del usuario
          const index = currentUser.appointments.findIndex(appointment => appointment.id === appointmentId);

          if (index !== -1) {
            // Eliminar la cita del array
            currentUser.appointments.splice(index, 1);

            // Actualizar los datos del usuario en el servidor
            await axios.put(url, currentUser);

            // Actualizar el array de citas en el componente
            this.appointments.splice(index, 1);

            // Actualizar el usuario almacenado en el Local Storage
            localStorage.setItem('authenticatedUser', JSON.stringify(currentUser));

            console.log('Cita eliminada exitosamente');
          } else {
            console.log('Appointment not found');
          }
        }
      } catch (error) {
        console.error('Error deleting appointment:', error);
      }
    }
  }
})
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
  <div class="card">
    <pv-tab-menu :model="items" />
    <router-view />
  </div>
  <div class="grid p-align-center card">
    <div class="col-12">
      <div class="p-fluid container">
        <pv-card class="no-appointment text-center" v-if="appointments.length === 0">
          <template #content>
            <div class="grid">
              <div class="col-12">
                <h4>No appointments found.</h4>
              </div>
            </div>
          </template>
        </pv-card>
        <pv-card class="pv-card" v-for="appointment in appointments" :key="appointment.datetime">
          <template #content>
            <div class="grid">
              <div class="col-12">
                <h4>Doctor: {{ appointment.doctor }}</h4>
              </div>
              <div class="col-6">
                <h4>{{ appointment.specialty }}</h4>
              </div>
              <div class="col-6">
                <p><strong>Date and Time:</strong> {{ formatDate(appointment.datetime) }}</p>
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