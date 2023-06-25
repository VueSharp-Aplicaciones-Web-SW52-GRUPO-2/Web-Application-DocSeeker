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
        this.userId = this.storedUser.id;  // Almacenar el ID del usuario

        // Obtener los registros del usuario desde el endpoint
        fetch('https://docseekerapi.azurewebsites.net/api/v1/record')
            .then(response => response.json())
            .then(userRecords => {
              // Filtrar los registros para obtener solo el del usuario actual
              const currentUserRecord = userRecords.find(record => record.patientId === this.userId);

              // Verificar si se encontró el registro del usuario actual
              if (currentUserRecord) {
                // Actualizar los datos almacenados en el componente con los del registro del usuario
                this.storedUser.height = currentUserRecord.height;
                this.storedUser.weight = currentUserRecord.weight;
                this.storedUser.bodyMass = currentUserRecord.bodyMass;
              }
            })
            .catch(error => {
              console.error('Error retrieving user records:', error);
            });
      }
    },
    updateInformation() {
      // Obtener el ID del usuario desde el almacenamiento local
      const userId = localStorage.getItem('id');

      // Construir la URL del endpoint con el ID del usuario
      const url = `https://docseekerapi.azurewebsites.net/api/v1/record/${userId}`;

      // Realizar la actualización de la información del usuario
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          height: this.storedUser.height,
          weight: this.storedUser.weight,
          bodyMass: this.storedUser.bodyMass,
          patientId: this.userId
        })
      })
          .then(response => {
            if (response.ok) {
              console.log('User information updated successfully');
              // Aquí puedes agregar acciones adicionales después de la actualización exitosa
            } else {
              console.error('Error updating user information');
            }
          })
          .catch(error => {
            console.error('Error updating user information:', error);
          });
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
            <h5 class="card-text">Height: <pv-input-text id="height" class="my-2" v-model="storedUser.height " placeholder="Height"/></h5>
          </div>
          <div class="col-4 text-center">
            <h5 class="card-text">Weight: <pv-input-text id="weight" class="my-2" v-model="storedUser.weight " placeholder="Weight"/></h5>
          </div>
          <div class="col-4 text-center">
            <h5 class="card-text">BMI: <pv-input-text id="BonyMass" class="my-2" v-model="storedUser.bodyMass " placeholder="BMI"/></h5>
          </div>
          <div class="col-4 "></div>
          <pv-button class="pv-button mt-5" label="Change information" @click="updateInformation" />
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