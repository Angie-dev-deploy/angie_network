<template>
  <v-app>
    <NavigationBar />

    <router-view />
    <PhotoCarroussel />
  </v-app>
</template>

<script lang="ts" setup>
import NavigationBar from "./components/NavigationBar.vue";
import PhotoCarroussel from "./components/PhotoCarroussel.vue";
</script>
