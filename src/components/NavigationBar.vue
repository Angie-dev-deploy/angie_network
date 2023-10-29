<template>
  <v-app-bar :elevation="elevation" :class="appBarClass">
    <v-container>
      <v-row align="center">
        <v-img
          class="rounded-image mr-4"
          src="../assets/logo.png"
          alt="Logo"
          max-width="40"
          max-height="40"
        ></v-img>
        <v-toolbar-title class="navbar--title">ANGIE</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="navbar--button" to="/">HOME</v-btn>
        <v-btn class="navbar--button">ABOUT</v-btn>
        <v-btn class="navbar--button" to="/partners">PARTNERS</v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      elevation: 0,
      scrollY: 0,
    };
  },
  computed: {
    appBarClass() {
      return {
        "transparent-toolbar": this.scrollY === 0,
        "blurred-toolbar": this.scrollY > 0,
      };
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
      this.elevation = this.scrollY > 0 ? 2 : 0;
    },
  },
};
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
</style>
