<script>
import {defineComponent} from 'vue'
import SideBar from "../../shared/components/side-bar.component.vue";

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
    this.retrieveStoredUser();
  },
  methods: {
    retrieveStoredUser() {
      const storedUser = localStorage.getItem('authenticatedUser');
      if (storedUser) {
        this.storedUser = JSON.parse(storedUser);
        console.log('Stored User:', this.storedUser);
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
                <pv-input-text id="username" class="my-2" v-model="storedUser.username" placeholder="DNI"/>
              </div>
              <div class="col-6">
                <label for="name">Name</label>
                <pv-input-text id="name" class="my-2" v-model="storedUser.name" placeholder="Name"/>
              </div>
              <div class="col-6">
                <label for="lastname-1">Paternal Name</label>
                <pv-input-text id="name" class="my-2" v-model="storedUser.paternal" placeholder="Paternal Name"/>
              </div>
              <div class="col-6">
                <label for="lastname-2">Maternal Name</label>
                <pv-input-text id="name" class="my-2" v-model="storedUser.maternal" placeholder="Maternal Name"/>
              </div>
              <div class="col-6">
                <label for="genre">Genre</label>
                <pv-dropdown v-model="storedUser.genre" :options="genres" class="pv-dropdown my-2" optionLabel="genre" placeholder="Select a Genre"/>
              </div>
              <div class="col-6">
                <label for="birthday">Birthday</label>
                <pv-calendar v-model="storedUser.birthday" class="my-2" dateFormat="dd/mm/yy" showIcon/>
              </div>
              <div class="col-12">
                <label for="email">Email</label>
                <pv-input-text id="email" class="my-2" v-model="storedUser.email" placeholder="Email" disabled/>
              </div>
              <div class="col-6">
                <label for="phone">Phone</label>
                <pv-input-mask id="phone" class="my-2" v-model="storedUser.cellphone" placeholder="Phone" mask="9999999"/>
              </div>
              <div class="col-6">
                <label for="cellphone">Cell Phone</label>
                <pv-input-mask id="cellphone" class="my-2" v-model="storedUser.phone" placeholder="Cell Phone" mask="999-999-999"/>
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
            <pv-button class="pv-button my-2" label="Update"/>
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