<template>
  <v-app>
    <NavigationBar />

    <router-view />

    <FooterComponent />
  </v-app>
</template>

<script lang="ts" setup>
import NavigationBar from "./components/NavigationBar.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>
