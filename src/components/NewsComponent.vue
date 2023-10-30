<template>
  <v-card class="news-article">
    <v-img :src="imageUrl" class="news-image" aspect-ratio="1.5"></v-img>
    <v-card-title class="news-title">{{ title }}</v-card-title>
    <v-card-text class="news-text">{{ text }}</v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps({
  title: String,
  imageUrl: String,
  text: String,
});
</script>

<style scoped>
.news-article {
  max-width: 300px;
  margin: 16px;
}

.news-image {
  object-fit: cover;
}

.news-title {
  font-size: 18px;
}

.news-text {
  font-size: 14px;
}
</style>
