<script setup>
import HourAvailable from "../../docseeker/pages/hour-available.component.vue"
</script>

<script>


export default {
  data() {
    return {
      doctors: [],
      doctor: {},
      dates: [],
      date: {},
      hoursAvailable: [],
      hourAvailable: {},
      doctorsService: null,
      datesService: null,
      hoursService: null,

      hour: 0

    }
  },
  created() {
    this.doctorsService = new DoctorsApiService();
    this.doctorsService.getAll().then((response) => {
      this.doctors = response.data;

      for (let x in this.doctors){
        if (this.doctors[x].id == this.$route.params.id){
          this.doctor = this.doctors[x];
          break;
        }
      }
    });

    this.hoursService = new HoursApiService();
    this.hoursService.getAll().then((response) => {
      this.hoursAvailable = response.data;
    });


    this.datesService = new DatesApiService();
    this.datesService.getAll().then((response) => {
      this.dates = response.data;
    });
  },
  methods: {
    schedule() {
      this.date = {
        id: this.dates.length,
        idPatient: sessionStorage.getItem("UserId"),
        doctorId: this.doctor.id,
        cDate: this.$route.params.date,
        //hourId: this.hour
      }

      for (let x in this.hoursAvailable){
        if(this.hoursAvailable[x].doctorId == this.doctor.id && this.hoursAvailable[x].hours == this.hour) {
          console.log("AEAAAAA");
          this.hoursAvailable[x].booked = true;
          this.hourAvailable = {
            hours: this.hoursAvailable[x].hours,
            booked: this.hoursAvailable[x].booked,
            doctorId: this.hoursAvailable[x].doctorId,
          }
          this.hoursService.update(this.hoursAvailable[x].id, this.hoursAvailable[x]);
        }
      }



      this.datesService.create(JSON.stringify(this.date));
    }
  }
}
</script>

<template>
  <div class="backButton">
    <h1>Book your appointment</h1>
  </div>
  <h2 class="title">These are all hours available for {{$route.params.date}}</h2>

  <HourAvailable @click="schedule(), hour = available.hours" v-model="hour" v-for="available in hoursAvailable" :date=$route.params.date :hour=available.hours
                 :name=doctor.name :area=doctor.area :cost=doctor.cost :doctorId=doctor.id :hourId=available.id
                 v-show="!available.booked"/>

</template>

<style scoped>
.backButton{
  display:flex;
  align-items: center;
}
.title{
  color: #7E7E7E;
  font-weight: bolder;
}
</style>