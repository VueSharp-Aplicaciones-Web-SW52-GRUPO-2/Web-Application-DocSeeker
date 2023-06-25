<script>
import {defineComponent} from 'vue'
import SideBar from "../../shared/components/side-bar.component.vue";
import moment from 'moment';

export default defineComponent({
  name: "profile-information",
  components: {SideBar},
  data() {
    return {
      genres: [
        { genre: 'Male' },
        { genre: 'Female' },
        { genre: 'Other' }
      ],
      storedUser: {}
    }
  },
  mounted() {
    this.retrieveUser() ;
  },
  methods: {
    retrieveUser() {
      const userId = localStorage.getItem('id'); // Reemplaza 'tu_id_de_usuario' con el ID de usuario real
      if (userId) {
        fetch(`https://docseekerapi.azurewebsites.net/api/v1/patients`)
            .then((response) => response.json())
            .then((patients) => {
              const user = patients.find((patient) => patient.id === parseInt(userId));
              if (user) {
                this.storedUser = {
                  id: user.id,
                  username: user.username,
                  name: user.name,
                  lastname: user.lastname,
                  middlename: user.middlename,
                  gender: user.gender,
                  birthday: new Date(user.birthdate),
                  email: user.email,
                  cellphone: user.phone,
                  phone: user.phone,
                  password: user.password
                };
              } else {
                console.log('Usuario no encontrado.');
              }
            })
            .catch((error) => {
              console.error('Error al recuperar el usuario:', error);
            });
      }
    },
    updateUser() {
      const userId = localStorage.getItem('id');
      if (userId) {

        fetch(`https://docseekerapi.azurewebsites.net/api/v1/patients/${userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.storedUser)
        })
            .then((response) => response.json())
            .then((updatedUser) => {
              console.log('Usuario actualizado:', updatedUser);
            })
            .catch((error) => {
              console.error('Error al actualizar el usuario:', error);
            });
      }

    }
  }
})

</script>

<template>
  <side-bar></side-bar>

  <div class="grid p-align-center card">
    <div class="col-6">
      <div class="p-fluid text-center">
        <pv-card class="pv-card border-round-right">
          <template #content>
            <img src="../../assets/images/login-user.png" alt="Patient Image">
          </template>
        </pv-card>
      </div>
    </div>
    <div class="col-6">
      <div class="p-fluid text-center">
        <pv-card class="pv-card border-round-left">
          <template #title>My Profile</template>
          <template #content>
            <div class="grid">
              <div class="col-6">
                <label for="username">Username</label>
                <pv-input-text id="username" class="my-2" v-model="storedUser.username" placeholder="DNI" />
              </div>
              <div class="col-6">
                <label for="name">Name</label>
                <pv-input-text id="name" class="my-2" v-model="storedUser.name" placeholder="Name"/>
              </div>
              <div class="col-6">
                <label for="lastname-1">Paternal Name</label>
                <pv-input-text id="name" class="my-2" v-model="storedUser.lastname" placeholder="Paternal Name"/>
              </div>
              <div class="col-6">
                <label for="lastname-2">Maternal Name</label>
                <pv-input-text id="name" class="my-2" v-model="storedUser.middlename" placeholder="Maternal Name"/>
              </div>
              <div class="col-6">
                <label for="genre">Genre</label>
                <pv-dropdown v-model="storedUser.gender" :options="genres" class="pv-dropdown my-2" optionLabel="genre" placeholder="Select a Genre"/>
              </div>
              <div class="col-6">
                <label for="birthday">Birthday</label>
                <pv-calendar v-model="storedUser.birthday" class="my-2"  disabled showIcon/>
              </div>
              <div class="col-12">
                <label for="email">Email</label>
                <pv-input-text id="email" class="my-2" v-model="storedUser.email" placeholder="Email" disabled/>
              </div>
              <div class="col-6">
                <label for="cellphone">Cell Phone</label>
                <pv-input-text id="cellphone" class="my-2" v-model="storedUser.phone" placeholder="Cell Phone" mask="999-999-999"/>
              </div>
              <div class="col-6">
                <label for="password">Password</label>
                <pv-password id="password" class="my-2" v-model="storedUser.password" placeholder="Password" :feedback="false" />
              </div>
              <div class="col-6">
                <label for="password">Repeat Password</label>
                <pv-password id="password" class="my-2" v-model="password" placeholder="Password" :feedback="false" />
              </div>
            </div>
            <pv-button class="pv-button my-2" label="Update" @click="updateUser" />

          </template>
        </pv-card>
      </div>
    </div>
  </div>

</template>

<style scoped>

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
  max-width: 60%;
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