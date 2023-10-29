<template>
  <v-app>
    <NavigationBar />

    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
import NavigationBar from "./components/NavigationBar.vue";
</script>
