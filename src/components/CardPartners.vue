<template>
  <div class="bg">
    <v-card class="card">
      <div class="img-title">
        <v-img :src="imageUrl" class="card-image" max-height="200"></v-img>
        <v-card-title class="card-title">
          {{ title }}
        </v-card-title>
      </div>
      <v-card-text class="card-description">
        {{ description }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Your component's styles */

.bg {
  background: #e2dcde;
}
.card {
  width: 600px; /* Adjust the width as needed */
  height: 300px; /* Adjust the height as needed */
  margin: 10px; /* Add margins for spacing between cards */
  background: linear-gradient(71deg, #b5bebf, #c9c9c9, #b5bebf);
  border-radius: 25px;
  background-color: transparent;
  backdrop-filter: blur(0);
  box-shadow: none;
}

.img-title {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.card-image {
  flex: 1;
  object-fit: cover;
  margin: 10px 0 0 10px;
}

.card-title {
  flex: 2;
  font-weight: bold;
  text-wrap: wrap;
  text-align: right;
}

.card-description {
  color: #555;
}
</style>
