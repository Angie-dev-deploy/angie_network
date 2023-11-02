<template>
  <v-img alt="photo" :src="selectedImage">
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
        class="image"
      /><span class="text">2023-1-RO01-KA220-HED-000158031</span>
    </div>
  </v-img>
  <HomePagePartnersSection />
  <AboutSection />
  <NewsSection />
  <PhotoCarroussel />
</template>

<script lang="ts" setup>
import HomePagePartnersSection from "../components/HomePagePartnersSection.vue";
import NewsSection from "@/components/NewsSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import PhotoCarroussel from "../components/PhotoCarroussel.vue";
import angiePhoto from "../assets/images/angie.png";
import angieMobilePhoto from "../assets/images/angie_mobile.png";
import { ref } from "vue";
import { watch } from "vue";

const selectedImage = ref(
  window.innerWidth >= 1200 ? angiePhoto : angieMobilePhoto
);

watch(
  () => window.innerWidth,
  (width) => {
    if (width >= 1200) {
      selectedImage.value = angiePhoto;
    } else {
      selectedImage.value = angieMobilePhoto;
    }
  }
);
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

  .image {
    max-height: 10vh !important;
    max-width: 20vw !important;
  }

  .text {
    display: block;
    font-size: 2vw !important;
  }
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
