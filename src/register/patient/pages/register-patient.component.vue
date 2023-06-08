<script>
import {defineComponent} from 'vue'

import LoginFooter from "../../../login/public/components/login-footer.component.vue";
import LoginToolbar from "../../../login/public/components/login-toolbar.component.vue";
import axios  from "axios";

export default defineComponent({
  name: "register-component",
  components: { LoginToolbar, LoginFooter },
  data() {
    return {
      username: '',
      name: '',
      paternalname: '',
      maternalname: '',
      selectedGenre: null,
      genres: [
        { name: 'Male', code: 'MAL' },
        { name: 'Female', code: 'FEM' },
        { name: 'Other', code: 'OTH' }
      ],
      date: null,
      email: '',
      phone: '',
      cellphone: '',
      password: '',
      formData: {
        username: '',
        name: '',
        paternalname: '',
        maternalname: '',
        selectedGenre: null,
        date: null,
        email: '',
        phone: '',
        cellphone: '',
        password: ''
      }
    };
  },
  computed: {
    isFormComplete() {
      for (const field in this.formData) {
        if (this.formData[field] === '') {
          return false;
        }
      }
      return true;
    }
  },
  methods: {
    async signUp() {
      try {
        const newUser = {
          username: this.username,
          password: this.password,
          name: this.name,
          paternal: this.paternalname,
          maternal: this.maternalname,
          genre: this.selectedGenre,
          birthday: this.date,
          email: this.email,
          cellphone: this.cellphone,
          phone: this.phone
        };

        await axios.post('http://localhost:3000/users', newUser);

        // Aquí puedes agregar el código para mostrar un mensaje de éxito o redirigir a otra página
        console.log('Usuario creado con éxito');
        this.$router.push({ name: 'login-patient' });
      } catch (error) {
        // Aquí puedes agregar el código para mostrar un mensaje de error
        console.error('Error al crear el usuario:', error);
      }
    }
  }
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
                <pv-input-text id="username" class="my-2" v-model="formData.username" placeholder="DNI"/>
              </div>
              <div class="col-6">
                <label for="name">Name</label>
                <pv-input-text id="name" class="my-2" v-model="formData.name" placeholder="Name"/>
              </div>
              <div class="col-6">
                <label for="lastname-1">Paternal Name</label>
                <pv-input-text id="name" class="my-2" v-model="formData.paternalname" placeholder="Paternal Name"/>
              </div>
              <div class="col-6">
                <label for="lastname-2">Maternal Name</label>
                <pv-input-text id="name" class="my-2" v-model="formData.maternalname" placeholder="Maternal Name"/>
              </div>

              <div class="col-12">
                <label for="email">Email</label>
                <pv-input-text id="email" class="my-2" v-model="formData.email" placeholder="Email"/>
              </div>
              <div class="col-6">
                <label for="phone">Phone</label>
                <pv-input-text id="phone" class="my-2" v-model="formData.phone" placeholder="Phone"/>
              </div>
              <div class="col-6">
                <label for="cellphone">Cell Phone</label>
                <pv-input-text id="cellphone" class="my-2" v-model="formData.cellphone" placeholder="Cell Phone" />
              </div>
              <div class="col-6">
                <label for="password">Password</label>
                <pv-password id="password" class="my-2" v-model="formData.password" placeholder="Password" />
              </div>
            </div>
            <pv-button class="pv-button my-2" label="Sign Up" @click="signUp" :disabled="!isFormComplete" />
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