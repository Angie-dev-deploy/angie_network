<template>
  <v-app-bar :elevation="elevation" :class="appBarClass">
    <v-container>
      <v-row align="center" width="100%">
        <v-img
          class="rounded-image mr-4"
          src="../assets/logo.png"
          alt="Logo"
          max-width="40"
          max-height="40"
        ></v-img>
        <v-toolbar-title class="navbar--title">ANGIE</v-toolbar-title>
        <v-spacer></v-spacer>

        <div class="d-flex navbar-desktop">
          <v-btn class="navbar--button" to="/">HOME</v-btn>
          <v-btn class="navbar--button">ABOUT</v-btn>
          <v-btn class="navbar--button" to="/partners">PARTNERS</v-btn>
        </div>

        <div class="navbar-mobile">
          <v-dialog transition="dialog-top-transition" fullscreen>
            <template v-slot:activator="{ props }">
              <v-btn
                @click="drawer = !drawer"
                class="navbar--button"
                icon
                large
                color="black"
                v-bind="props"
              >
                <v-icon>mdi-menu</v-icon>
              </v-btn></template
            >
            <template v-slot:default="{ isActive }">
              <v-card color="transparent" style="backdrop-filter: blur(20px)">
                <v-toolbar color="transparent">
                  <v-btn @click="isActive.value = false">
                    <v-icon size="x-large">mdi-close-circle-outline</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-card-text>
                  <div class="d-flex flex-column">
                    <v-btn
                      color="transparent"
                      :elevation="0"
                      to="/"
                      @click="isActive.value = false"
                      >HOME</v-btn
                    >
                    <v-btn
                      color="transparent"
                      :elevation="0"
                      @click="isActive.value = false"
                      >ABOUT</v-btn
                    >
                    <v-btn
                      color="transparent"
                      :elevation="0"
                      to="/partners"
                      @click="isActive.value = false"
                      >PARTNERS</v-btn
                    >
                  </div>
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
        </div>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const elevation = ref(0);
const scrollY = ref(0);
const drawer = ref(false);

const appBarClass = computed(() => ({
  "transparent-toolbar": scrollY.value === 0,
  "blurred-toolbar": scrollY.value > 0,
}));

const handleScroll = () => {
  scrollY.value = window.scrollY;
  elevation.value = scrollY.value > 0 ? 2 : 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.rounded-image {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  padding: 3px;
}

.transparent-toolbar {
  background-color: transparent;
  backdrop-filter: blur(0);
  box-shadow: none;
}

.blurred-toolbar {
  background-color: transparent;
  backdrop-filter: blur(20px);
}

.v-container {
  margin: 2vw !important;
  width: 100% !important;
  max-width: none !important;
}
</style>
