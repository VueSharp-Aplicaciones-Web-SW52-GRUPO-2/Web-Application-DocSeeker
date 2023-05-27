<script>
import {defineComponent} from 'vue'
import LoginFooter from "../../public/components/login-footer.component.vue";
import LoginToolbar from "../../public/components/login-toolbar.component.vue";

export default defineComponent({
  name: "forgot-password-patient",
  components: {LoginToolbar, LoginFooter}
})
</script>

<template>
  <login-toolbar></login-toolbar>
  <div class="grid p-align-center card">
    <div class="col-12">
      <div class="p-fluid text-center">
        <pv-card class="pv-card">
          <template #title>Forgot Password</template>
          <template #content>
            <div class="grid">
              <div class="col-12">
                <label for="username">Username</label>
                <pv-input-text id="username" class="my-2" v-model="username" placeholder="DNI"/>
              </div>
              <div class="col-12">
                <label for="email">Email</label>
                <pv-input-text id="email" class="my-2" v-model="email" placeholder="Email"/>
              </div>
              <div class="col-12">
                <label for="password">New Password</label>
                <pv-password id="password" class="my-2" v-model="password" placeholder="Password" :feedback="false" />
              </div>
              <div class="col-12">
                <label for="password">Repeat Password</label>
                <pv-password id="password" class="my-2" v-model="password" placeholder="Password" :feedback="false" />
              </div>
            </div>
            <pv-button class="pv-button my-2" label="Reset Password"/>
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
  height: 500px;
}
.card {
  background: #0093AB;
  border-radius: 20px;
  margin: 10px;
}
img {
  max-width: 50%;
  height: auto;
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