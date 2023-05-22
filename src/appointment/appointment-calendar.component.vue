<script>

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import router from '../router/index.js';
export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridWeek',
        editable: true,
        weekends: true,
        dateClick: (arg) =>{
          console.log(arg.dateStr)



          console.log(arg)
        }
      }
    }
  }
}
</script>

<template>
  <div class="backButton">
    <h1>Available Dates</h1>
  </div>
  <FullCalendar :options="calendarOptions" />
</template>
<style scoped>
.backButton{
  display:flex;
  align-items: center;
}
</style>