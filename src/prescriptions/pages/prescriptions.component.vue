<template>
  <div class="global-container">
    <div class="title-section-container">
      <h1>Prescriptions</h1>
    </div>
    <div class="data-table-container">
      <pv-toolbar class="mb-4">
        <template #start>
          <pv-button label="Export" icon="pi pi-upload" severity="help"
                     @click="exportCSV($event)"></pv-button>
        </template>
      </pv-toolbar>

      <pv-data-table ref="dt" :value="prescriptions" v-model:selection="selectedPrescriptions"
                  dataKey="id" :paginator="true" :rows="10" :filters="filters"
                  paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                  :rowsPerPageOptions="[5,10,25]"
                  currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
        <template #header>
          <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 class="m-0">Manage Prescriptions</h4>
            <span class="p-input-icon-left">
                <i class="pi pi-search"/>
                <pv-input-text v-model="filters['global'].value"
                               placeholder="Search..."></pv-input-text>
            </span>
          </div>
        </template>

        <pv-column field="id" header="Id" sortable style="min-width:8rem"></pv-column>
        <pv-column field="date" header="Date" sortable
                   style="min-width:12rem"></pv-column>
        <pv-column field="doctorName" header="Doctor Name" sortable
                   style="min-width:16rem"></pv-column>
        <pv-column field="specialty" header="Specialty" sortable
                   style="min-width:10rem"></pv-column>
        <pv-column field="prescriptionStatus" header="Status" sortable style="min-width:12rem">
          <template #body="slotProps">
            <pv-tag :value="slotProps.data.state"
                    :severity="getStatusLabel(slotProps.data.state)"></pv-tag>
          </template>
        </pv-column>
      </pv-data-table>
    </div>

  </div>
</template>

<script>
import {FilterMatchMode} from "primevue/api";
import {PrescriptionsApiService} from "../services/prescriptions-api.service.js";

export default {
  name: "prescriptions",
  data() {
    return {
      prescriptionsService: null,
      prescriptions: null,
      selectedPrescriptions: null,
      filters: {},
      statuses: [
        {label: "ACCOMPLISHED", value: "accomplished"},
        {label: "PENDING", value: "pending"},
        {label: "CANCELLED", value: "cancelled"}
      ]
    }
  },
  created() {
    this.prescriptionsService = new PrescriptionsApiService();
    this.prescriptionsService.getAll()
        .then(response => this.prescriptions = response.data);
    this.initFilters();
  },
  mounted(){

  },
  methods: {
    initFilters() {
      this.filters = {
        'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
      }
    },
    exportCSV() {
      this.$refs.dt.exportCSV();
    },
    getStatusLabel(status) {
      switch (status) {
        case 'ACCOMPLISHED':
          return 'success';

        case 'PENDING':
          return 'warning';

        case 'CANCELLED':
          return 'danger';

        default:
          return null;
      }
    }
  }
}
</script>

<style scoped>
/*
1. Id
2. Fecha de la prescripción
3. Especialidad médica
4. Médico
5. Estado de cumplimiento

Fecha de la prescripción: Indica cuándo se realizó la prescripción médica.
Nombre del medicamento: Especifica el nombre del medicamento prescrito.
Dosis: Muestra la cantidad y frecuencia en la que se debe tomar el medicamento.
Duración: Indica la duración total de la prescripción, es decir, por cuánto tiempo se debe tomar el medicamento.
Estado de cumplimiento: Puede ser una indicación visual (por ejemplo, un ícono o un color) que muestra si la prescripción ha sido cumplida o está pendiente.
Médico: Muestra el nombre del médico o profesional de la salud que realizó la prescripción.
Condiciones médicas asociadas: Puede ser útil incluir alguna indicación o etiqueta que resuma la razón o condición médica para la cual se hizo la prescripción.
*/
</style>