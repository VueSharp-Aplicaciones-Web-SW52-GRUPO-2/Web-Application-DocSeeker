<template>
  <div class="patient">
    <img :src="image" alt="patient image" class="patientImg">
    <div class="info">
      <h3 class="patientName">For {{ name }}</h3>
      <h3>{{ date }}</h3>
      <h3>{{ hour }}</h3>
    </div>
  </div>
</template>

<script setup>
const image = `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png`
const props = defineProps({
  name: {
    type: String,
    default: "Patient name"
  },
  image: {
    type: String,
    default: "Patient image"
  },
  date: {
    type: String,
    default: "Date appointment"
  },
  hour: {
    type: String,
    default: "Hour appointment"
  },
})


</script>

<style scoped>
.patient {
  border: solid 1px black;
  border-color: #0093AB;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  padding: 2rem;
  margin: 2rem;
}

.patientImg {
  width: 150px;
  height: 150px;
  border-radius: 20px;
  border-color: #0093AB;

}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.patientName {
  font-size: 150%;
  font-weight: bolder;
}


@media (max-width: 750px){
  .patient{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>