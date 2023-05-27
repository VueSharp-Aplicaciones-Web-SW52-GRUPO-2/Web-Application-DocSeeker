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
export default {
  name: "medicines-list",
  props: {
    medicines: Array
  }
}
</script>

<style scoped>

</style>