<template>
  <pv-accordion>
    <pv-accordion-tab v-for="medicine in medicines" :key="medicine.name" :header="medicine.name">
      <p>
        <b>Name:</b> {{ medicine.name }}<br>
        <b>Dose:</b> {{ medicine.dose }}<br>
        <b>Period:</b> {{ medicine.period }}<br>
        <b>Route of administration:</b> {{ medicine.routeOfAdministration }}<br>
        <b>Duration:</b> {{ medicine.duration }}<br>
        <b>Special instructions:</b> {{ medicine.specialInstructions }}
      </p>
    </pv-accordion-tab>
  </pv-accordion>
</template>

<script>

import axios from "axios";

export default {
    name: "medicines-list",
    props: {
      prescriptionId: String
    },
    data() {
      return {
        medicines: []
      };
    },
    created() {
      this.fetchMedicines();
    },
    methods: {
      fetchMedicines() {
        axios.get('https://docseekerapi.azurewebsites.net/api/v1/medicines')
            .then(response => {
              // Verificar si hay datos en la respuesta
              if (response.data && response.data.length > 0) {
                // Asignar el primer medicamento a la lista de medicamentos
                this.medicines = [response.data[0]];
              }
            })
            .catch(error => {
              console.error('Error al obtener los medicamentos:', error);
            });
      }
    }
  };
</script>

<style scoped>

</style>