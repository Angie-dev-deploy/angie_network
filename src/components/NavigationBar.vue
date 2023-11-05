<template>
  <v-app-bar :elevation="elevation" :class="appBarClass">
    <v-container>
      <v-row align="center" width="100%">
        <v-btn color="transparent" :elevation="0" to="/">
          <v-img
            class="rounded-image mr-4"
            src="../assets/logo.png"
            alt="Logo"
            max-width="40"
            max-height="40"
          ></v-img>
          <v-toolbar-title class="navbar--title">ANGIE</v-toolbar-title>
        </v-btn>
        <v-spacer></v-spacer>

        <div class="d-flex navbar-desktop">
          <v-btn class="navbar--button" to="/">HOME</v-btn>
          <v-btn class="navbar--button" to="/news">NEWS</v-btn>
          <v-btn class="navbar--button" to="/partners">NETWORK</v-btn>
          <v-menu class="navbar--dropdown" offset-y>
            <template v-slot:activator="{ props }">
              <v-btn
                class="navbar--button"
                v-bind="props"
                @click="menuActive = !menuActive"
              >
                IMPLEMENTATION
                <v-icon class="ml-1" small>
                  {{ menuActive ? "mdi-chevron-up" : "mdi-chevron-down" }}
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item to="/objectives">OBJECTIVES</v-list-item>
              <v-list-item to="/activities">ACTIVITIES</v-list-item>
              <v-list-item to="/outputs">OUTPUTS</v-list-item>
              <v-list-item to="/dissemination">DISSEMINATION</v-list-item>
            </v-list>
          </v-menu>

          <v-btn class="navbar--button" to="/media">MEDIA</v-btn>
          <v-btn class="navbar--button" to="/contact">CONTACT</v-btn>
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
                <v-icon class="menu-button">mdi-menu</v-icon>
              </v-btn></template
            >
            <template v-slot:default="{ isActive }">
              <v-card color="transparent" style="backdrop-filter: blur(20px)">
                <v-toolbar color="transparent" class="nav-toolbar">
                  <v-btn @click="isActive.value = false">
                    <v-icon size="x-large" class="menu-button"
                      >mdi-close-circle-outline</v-icon
                    >
                  </v-btn>
                </v-toolbar>
                <v-card-text>
                  <div class="d-flex flex-column">
                    <v-btn
                      color="transparent"
                      :elevation="0"
                      to="/"
                      @click="isActive.value = false"
                      class="menu-button--text"
                      >HOME</v-btn
                    >
                    <v-btn
                      color="transparent"
                      :elevation="0"
                      to="/news"
                      @click="isActive.value = false"
                      class="menu-button--text"
                      >NEWS</v-btn
                    >
                    <v-btn
                      color="transparent"
                      :elevation="0"
                      to="/partners"
                      @click="isActive.value = false"
                      class="menu-button--text"
                      >NETWORK</v-btn
                    >
                    <v-expansion-panels>
                      <v-expansion-panel
                        elevation="0"
                        bg-color="transparent"
                        class="navbar--dropdown"
                      >
                        <v-expansion-panel-title>
                          <v-col no-gutters> IMPLEMENTATION </v-col>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                          <v-row>
                            <v-col>
                              <v-list-item
                                :elevation="0"
                                to="/objectives"
                                class="menu-button--text"
                                @click="isActive.value = false"
                                >OBJECTIVES</v-list-item
                              >
                              <v-list-item
                                :elevation="0"
                                to="/activities"
                                class="menu-button--text"
                                @click="isActive.value = false"
                                >ACTIVITIES</v-list-item
                              >
                              <v-list-item
                                :elevation="0"
                                to="/outputs"
                                class="menu-button--text"
                                @click="isActive.value = false"
                                >OUTPUTS</v-list-item
                              >
                              <v-list-item
                                :elevation="0"
                                to="/dissemination"
                                class="menu-button--text"
                                @click="isActive.value = false"
                                >DISSEMINATION</v-list-item
                              >
                            </v-col>
                          </v-row>
                        </v-expansion-panel-text>
                      </v-expansion-panel>
                    </v-expansion-panels>

                    <v-btn
                      :elevation="0"
                      color="transparent"
                      class="menu-button--text"
                      to="#"
                      @click="isActive.value = false"
                      >MEDIA</v-btn
                    >
                    <v-btn
                      :elevation="0"
                      color="transparent"
                      class="menu-button--text"
                      to="/contact"
                      @click="isActive.value = false"
                      >CONTACT</v-btn
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
const menuActive = ref(false);
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

.v-overlay__content > .v-list {
  backdrop-filter: blur(20px);
  background: transparent;
}
</style>
