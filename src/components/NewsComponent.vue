<template>
  <div class="news-article">
    <v-row>
      <v-col cols="12" md="6">
        <v-card-title class="news-title">{{ title }}</v-card-title>
        <v-card-text class="news-text"><span v-html="text"></span></v-card-text>
        <v-img :src="imageUrl" class="news-image" aspect-ratio="1.5"></v-img>
      </v-col>
      <v-col cols="12" md="6" class="news-text-container">
        <v-img :src="imageUrl" class="news-image" aspect-ratio="1.5"></v-img>
        <v-card-text class="news-text"><span v-html="text"></span></v-card-text>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.news-article {
  margin: 80px;
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
