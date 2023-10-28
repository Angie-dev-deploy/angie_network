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

<script>
export default {
  props: {
    imageUrl: String,
    title: String,
    description: String,
  },
};
</script>

<!-- <script lang="ts" setup>
import { ref, defineProps } from "vue";

const { imageUrl, title, description } = defineProps<{
  imageUrl: string;
  title: string;
  description: string;
}>();
</script> -->

<style scoped>
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
