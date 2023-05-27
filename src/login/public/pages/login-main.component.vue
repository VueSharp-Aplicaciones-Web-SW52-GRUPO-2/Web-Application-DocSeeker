<script>
import {defineComponent} from 'vue'
import LoginToolbar from "../components/login-toolbar.component.vue";
import LoginFooter from "../components/login-footer.component.vue";

export default defineComponent({
  name: "login",
  components: {LoginFooter, LoginToolbar},
})
</script>

<template>
  <login-toolbar></login-toolbar>
  <div class="grid p-align-center card">
    <div class="col-6">
      <div class="p-fluid text-center">
        <pv-card class="pv-card border-round-right">
          <template #title>Patient</template>
          <template #content>
            <img src="../../../assets/images/login-user.png" alt="Patient Image">
            <pv-button class="pv-button" label="Login as Patient" @click="$router.push('/login-patient')" />
          </template>
        </pv-card>
      </div>
    </div>
    <div class="col-6">
      <div class="p-fluid text-center">
        <pv-card class="pv-card border-round-left">
          <template #title>Doctor</template>
          <template #content>
            <img src="../../../assets/images/login-doctor.png" alt="Doctor Image">
            <pv-button class="pv-button" label="Login as Doctor"/>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
  <login-footer></login-footer>
</template>

<style scoped>
.pv-card {
  border-color: #0093AB;
  border-radius: 20px;
}
.card {
  background: #0093AB;
  border-radius: 20px;
  margin: 10px;
}
img {
  width: 55%;
  padding: 20px;
}
.pv-button {
  border-radius: 20px;
}
img {
  animation-name: pulse;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
</style>