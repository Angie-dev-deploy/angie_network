<template>
  <v-carousel class="custom-carousel">
    <v-carousel-item
      v-for="(slide, index) in slides"
      :key="index"
      class="custom-carousel-item"
    >
      <v-img :src="slide" class="custom-carousel-image" contain>
        <v-overlay class="custom-carousel-overlay">
          <v-card class="custom-carousel-card">
            <v-card-title class="headline">Image Title</v-card-title>
            <v-card-text>Caption or description goes here.</v-card-text>
          </v-card>
        </v-overlay>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts" setup>
import ucvPhoto from "../assets/images/partners/ucv.png";
import acceuPhoto from "../assets/images/partners/acceu.png";
import bariPhoto from "../assets/images/partners/bari.png";
const slides = [ucvPhoto, acceuPhoto, bariPhoto];
</script>

<style lang="scss" scoped>
/* Add custom CSS styles here */
.custom-carousel {
  background-color: #f0f0f0;
  border: 5px solid #ddd;
  padding: 10px;
}

.custom-carousel-item {
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  transition: transform 0.5s ease-in-out;
}

.custom-carousel-image {
  width: 100%;
  height: 100%;
  margin: 0;
}

.custom-carousel-overlay {
  background: rgba(0, 0, 0, 0.6);
}

.custom-carousel-card {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}

.custom-carousel-card .headline {
  font-size: 24px;
}

.custom-carousel-card .v-card-text {
  font-size: 16px;
}

/* Add styles for navigation controls (customize as needed) */
.v-carousel-control-prev,
.v-carousel-control-next {
  background-color: #007aff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
}
</style>
