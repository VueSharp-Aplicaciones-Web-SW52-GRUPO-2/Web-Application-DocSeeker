<script setup>
const props = defineProps({
  date:{
    type: String,
    default: "Date"
  },
  hour:{
    type: String,
    default: "Hour"
  },
  name: {
    type: String,
    default: "Doctor's name"
  },
  area: {
    type: String,
    default: "Area"
  },
  cost: {
    type: Number,
    default: "Price"
  },
  doctorId: {
    type: Number
  },
  hourId:{
    type: Number
  }
})
</script>
<style scoped>
.containerHour{
  display: flex;
  flex-direction: row;
  gap: 2rem;
  background-color: #8DBFC7;
  border: 1px solid #0093AB;
  border-radius: 15px;
  margin-top: 2rem;
}
.date{
  padding: 1rem;
  background-color: #A0DEE8;
  border: 1px solid #0093AB;
  border-radius: 15px;
}
.date h3{
  font-weight: bolder;
  color: #535353;
}
.doctor{
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.doctorInfo h3{
  font-weight: bolder;
  color: #FFFFFF;
}
.link{
  color: #426267;
  border-bottom: 1px solid;
}
@media (max-width: 750px){
  .containerHour{
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 70%;
    margin: 2rem auto;
  }
  .doctor{
    flex-direction: column;
  }
}
</style>

<template>
  <div class="containerHour">
    <div class="date">
      <h3>{{date}}</h3>
      <h3>{{hour}}</h3>
    </div>
    <div class="doctor">
      <div class="doctorInfo">
        <h3>{{name}}</h3>
        <h3>{{area}}</h3>
        <h3>{{cost}}</h3>
      </div>
      <router-link :to="{name: 'payment', params: { id: doctorId, date: date, hourId: hourId }}"><h3 class="link">Go to payment <i class="pi pi-angle-right"></i></h3></router-link>
    </div>
  </div>
</template>
