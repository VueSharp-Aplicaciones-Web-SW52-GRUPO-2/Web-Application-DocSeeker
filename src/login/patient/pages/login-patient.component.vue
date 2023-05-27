<script>
import {defineComponent} from 'vue'

import LoginFooter from "../../public/components/login-footer.component.vue";
import LoginToolbar from "../../public/components/login-toolbar.component.vue";

import axios from 'axios';

export default defineComponent({
  name: "login-patient",
  components: {LoginToolbar, LoginFooter},
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.get('http://localhost:3000/users', {
          params: {
            username: this.username,
            password: this.password
          }
        });
        const users = response.data;
        const authenticatedUser = users.find(user => user.username === this.username && user.password === this.password);
        if (authenticatedUser) {
          console.log('Authenticated User:', authenticatedUser);
          localStorage.setItem('authenticatedUser', JSON.stringify(authenticatedUser));
          console.log(localStorage);
          this.$router.push({ name: 'home-patient' });
        } else {
          console.log('Invalid Credentials');
        }
      } catch (error) {
        console.error(error);
      }
    },
  }
})
</script>

<template>
  <login-toolbar></login-toolbar>
  <div class="grid p-align-center card">
    <div class="col-6">
      <div class="p-fluid text-center">
        <pv-card class="pv-card border-round-right">
          <template #content>
            <img src="../../../assets/images/login-user.png" alt="Patient Image">
          </template>
        </pv-card>
      </div>
    </div>
    <div class="col-6">
      <div class="p-fluid text-center">
        <pv-card class="pv-card border-round-left">
          <template #title>Login</template>
          <template #content>
            <div class="p-field py-2">
              <label for="username">Username</label>
              <pv-input-text id="username" class="my-4" v-model="username" placeholder="DNI"/>
            </div>
            <div class="p-field">
              <label for="password">Password</label>
              <pv-password id="password" class="my-4" v-model="password" placeholder="Password" :feedback="false"/>
            </div>
            <pv-button class="pv-button mt-4" @click="login" label="Login"/>
            <div class="p-text-center font-italic">
              <p class="p-mt-2 my-4">
                <router-link to="/forgot-password">Did you forget your password?</router-link>
              </p>
              <p class="p-mt-2 my-4">You do not have an account?
                <router-link to="/sign-up">Sign Up!</router-link>
              </p>
            </div>
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