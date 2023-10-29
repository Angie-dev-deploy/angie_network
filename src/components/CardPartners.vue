<template>
  <v-card class="card">
    <v-img :src="imageUrl" class="card-image" max-height="200"></v-img>
    <v-card-title class="card-title">
      {{ title }}
    </v-card-title>
    <v-card-text class="card-description">
      {{ description }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  imageUrl: {
    type: String,
    required: true, // You can provide a default value here
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

.card {
  width: 300px; /* Adjust the width as needed */
  margin: 10px; /* Add margins for spacing between cards */
}

.card-image {
  object-fit: cover;
}

.card-title {
  font-weight: bold;
}

.card-description {
  color: #555;
}
</style>
