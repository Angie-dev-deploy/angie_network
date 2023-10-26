<template>
  <v-img alt="photo" src="../assets/images/angie.png">
    <div class="project-subheading">
      <span
        >Academic Network for a <br />
        Green & Innovative Europe</span
      >
    </div>
    <div class="project-heading">
      <span>ANGIE</span>
    </div>
    <div class="image-text">
      <v-img
        src="../assets/images/erasmus.png"
        alt="Erasmus"
        max-height="50px"
      /><span>2023-1-RO01-KA220-HED-000158031</span>
    </div>
  </v-img>
  <HomePagePartnersSection />
  <v-container>
    <h1>blah</h1>
    <p>Lorem ipsum dolor sit amet</p>
    <h1>Content</h1>
    <p>Lorem ipsum dolor sit amet</p>
    <h1>Continut</h1>
    <p>Lorem ipsum dolor sit amet</p>
    <h1>blah</h1>
    <p>Lorem ipsum dolor sit amet</p>
    <h1>Content</h1>
    <p>Lorem ipsum dolor sit amet</p>
    <h1>Continut</h1>
    <p>Lorem ipsum dolor sit amet</p>
    <h1>blah</h1>
    <p>Lorem ipsum dolor sit amet</p>
    <h1>Content</h1>
    <p>Lorem ipsum dolor sit amet</p>
    <h1>Continut</h1>
    <p>Lorem ipsum dolor sit amet</p>
    <h1>blah</h1>
    <p>Lorem ipsum dolor sit amet</p>
    <h1>Content</h1>
    <p>Lorem ipsum dolor sit amet</p>
    <h1>Continut</h1>
    <p>Lorem ipsum dolor sit amet</p>
  </v-container>
</template>

<script lang="ts" setup>
import HomePagePartnersSection from "../components/HomePagePartnersSection.vue";
</script>

<style lang="scss" scoped>
.image-text {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px;
  font-size: 16px;
  border-radius: 0 55% 0 0;
}

.project-subheading {
  position: absolute;
  bottom: 40%;
  right: 100px;
  color: white;
  text-align: center;
  font-size: 50px;
  text-shadow: 5px 5px 5px #000;
}

.project-heading {
  position: absolute;
  bottom: 40%;
  left: 100px;
  color: white;
  text-align: center;
  font-size: 100px;
  text-shadow: 5px 5px 5px #000;
}
</style>
