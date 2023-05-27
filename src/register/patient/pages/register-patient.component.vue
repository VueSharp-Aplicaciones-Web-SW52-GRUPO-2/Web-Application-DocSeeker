<script>
import {defineComponent} from 'vue'

import LoginFooter from "../../../login/public/components/login-footer.component.vue";
import LoginToolbar from "../../../login/public/components/login-toolbar.component.vue";

export default defineComponent({
  name: "register-component",
  components: {LoginToolbar, LoginFooter}
})
</script>

<script setup>
import {ref} from "vue";

const selectedGenre = ref();
const genres = ref([
  { name: 'Male', code: 'MAL' },
  { name: 'Female', code: 'FEM' },
  { name: 'Other', code: 'OTH' }
]);
</script>

<template>
  <login-toolbar></login-toolbar>
  <div class="grid p-align-center card">
    <div class="col-12">
      <div class="p-fluid text-center">
        <pv-card class="pv-card">
          <template #title>New User</template>
          <template #content>
            <div class="grid">
              <div class="col-6">
                  <label for="username">Username</label>
                  <pv-input-text id="username" class="my-2" v-model="username" placeholder="DNI"/>
              </div>
              <div class="col-6">
                  <label for="name">Name</label>
                  <pv-input-text id="name" class="my-2" v-model="name" placeholder="Name"/>
              </div>
              <div class="col-6">
                <label for="lastname-1">Paternal Name</label>
                <pv-input-text id="name" class="my-2" v-model="paternalname" placeholder="Paternal Name"/>
              </div>
              <div class="col-6">
                <label for="lastname-2">Maternal Name</label>
                <pv-input-text id="name" class="my-2" v-model="maternalname" placeholder="Maternal Name"/>
              </div>
              <div class="col-6">
                <label for="genre">Genre</label>
                <pv-dropdown v-model="selectedGenre" :options="genres" class="pv-dropdown my-2" optionLabel="genre" placeholder="Select a Genre"/>
              </div>
              <div class="col-6">
                <label for="birthday">Birthday</label>
                <pv-calendar v-model="date" class="my-2" dateFormat="dd/mm/yy" showIcon/>
              </div>
              <div class="col-12">
                <label for="email">Email</label>
                <pv-input-text id="email" class="my-2" v-model="email" placeholder="Email"/>
              </div>
              <div class="col-6">
                <label for="phone">Phone</label>
                <pv-input-mask id="phone" class="my-2" v-model="phone" placeholder="Phone" mask="9999999"/>
              </div>
              <div class="col-6">
                <label for="cellphone">Cell Phone</label>
                <pv-input-mask id="cellphone" class="my-2" v-model="cellphone" placeholder="Cell Phone" mask="999-999-999"/>
              </div>
              <div class="col-6">
                <label for="password">Password</label>
                <pv-password id="password" class="my-2" v-model="password" placeholder="Password" :feedback="false" />
              </div>
              <div class="col-6">
                <label for="password">Repeat Password</label>
                <pv-password id="password" class="my-2" v-model="password" placeholder="Password" :feedback="false" />
              </div>
            </div>
              <pv-button class="pv-button my-2" label="Sign Up"/>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
  <login-footer></login-footer>
</template>

<style scoped>
.pv-dropdown{
  text-align: left;
}
.pv-card {
  border-color: #0093AB;
  border-radius: 20px;
  height: 680px;
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