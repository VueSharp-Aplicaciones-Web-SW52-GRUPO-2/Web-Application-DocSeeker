<template>
  <div class="section-container">
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

        <pv-column :exportable="false" style="min-width:8rem">
          <template #body="slotProps">
            <pv-button icon="pi pi-eye" outlined rounded
                       @click="showDetails(slotProps.data)"></pv-button>
          </template>
        </pv-column>
      </pv-data-table>
    </div>

    <pv-dialog v-model:visible="prescriptionDialog" :style="{width: '750px'}"
               header="Prescription Details" :modal="true" class="p-fluid">
        <div class="prescriptions-selected title">
          <pv-card :pt="{ body: { class: 'bg-primary border-round-lg' } }">
            <template #title>Medical Prescription Status</template>
            <template #content>
              <p><b>Prescription date:</b> {{ prescription.date }}</p>
              <p><b>State: </b>
                <pv-tag :value="prescription.state"
                        :severity="getStatusLabel(prescription.state)"></pv-tag>
              </p>
            </template>
          </pv-card>
        </div>
        <div class="prescriptions-selected doctor-info">
          <pv-card :pt="{ body: { class: 'bg-primary border-round-lg' } }">
            <template #title>Doctor Information</template>
            <template #content>
              <p><b>Doctor name:</b> {{ prescription.doctorName }}</p>
              <p><b>Specialty:</b> {{ prescription.specialty }}</p>
            </template>
          </pv-card>
        </div>
        <div class="prescriptions-selected recommendations">
          <pv-card :pt="{ body: { class: 'bg-primary border-round-lg' } }">
            <template #title>Doctor Recommendations</template>
            <template #content>
              <p>{{ prescription.recommendations }}</p>
            </template>
          </pv-card>
        </div>
        <div class="prescriptions-selected medicines">
          <pv-card :pt="{ body: { class: 'bg-primary border-round-lg' } }">
            <template #title>Medicines</template>
            <template #content>
              <medicines-list :medicines="prescription.medicines"></medicines-list>
            </template>
          </pv-card>
        </div>
    </pv-dialog>
  </div>
</template>

<script>
import {FilterMatchMode} from "primevue/api";
import {PrescriptionsApiService} from "../services/prescriptions-api.service.js";
import MedicinesList from "../components/medicines-list.component.vue";

export default {
  name: "prescriptions",
  components: {MedicinesList},
  data() {
    return {
      prescriptionsService: null,
      prescriptions: null,
      prescription: null,
      selectedPrescriptions: null,
      filters: {},
      statuses: [
        {label: "ACCOMPLISHED", value: "accomplished"},
        {label: "PENDING", value: "pending"},
        {label: "CANCELLED", value: "cancelled"}
      ],
      prescriptionDialog: false
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
        case 'accomplished':
          return 'success';

        case 'pending':
          return 'warning';

        case 'cancelled':
          return 'danger';

        default:
          return null;
      }
    },
    showDetails(prescription) {
      this.prescription = {...prescription};
      this.prescriptionDialog = true;
    }
  }
}
</script>

<style scoped>
.prescriptions-selected {
  margin-bottom: 10px;
}
</style>