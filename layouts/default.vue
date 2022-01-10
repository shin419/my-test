<template>
  <v-app class="white">
<!--    <v-toolbar dense>-->
<!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

<!--      <v-toolbar-title>-->
<!--      </v-toolbar-title>-->
<!--      <v-spacer></v-spacer>-->
<!--      <v-text-field label="Search" class="mt-7" dense single-line outlined-->
<!--                    v-model="search" @input="$store.dispatch('setValSearch', search)"></v-text-field>-->
<!--      <v-btn icon>-->
<!--        <v-icon>mdi-magnify</v-icon>-->
<!--      </v-btn>-->
<!--    </v-toolbar>-->
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyARMpvbKlWhqnQkwYflPdZWnXQPoV4Vucs",
  authDomain: "my-test-9c40c.firebaseapp.com",
  projectId: "my-test-9c40c",
  storageBucket: "my-test-9c40c.appspot.com",
  messagingSenderId: "861239065636",
  appId: "1:861239065636:web:64fc345c76a8ec3b382cb1",
  measurementId: "G-VGQ5RMXEGC"
}
initializeApp(firebaseConfig);
export default Vue.extend({
  name: 'DefaultLayout',
  data: () => ({
    search: ''
  })
})
</script>
