<template>
  <v-app>
    <NavigationBar />

    <router-view />
    <PhotoCarroussel />
    <MeetPartners />
  </v-app>
</template>

<script lang="ts" setup>
import NavigationBar from "./components/NavigationBar.vue";
import MeetPartners from "./components/MeetPartners.vue";
import PhotoCarroussel from "./components/PhotoCarroussel.vue";
</script>
