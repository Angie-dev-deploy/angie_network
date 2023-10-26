<template>
  <div>
    <v-app-bar app :elevation="0" class="transparent-bar">
      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="goToAboutPage">About</v-btn>
      <!-- Add more navigation buttons as needed -->
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";

const pageTitle = "ANGIE";

const goToAboutPage = () => {
  console.log("asd");
};
</script>

<style lang="scss" scoped>
.transparent-bar {
  background: transparent !important;
}
</style>
