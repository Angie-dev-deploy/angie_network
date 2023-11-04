<template>
  <div class="news-list bg">
    <NewsComponent
      v-for="(news, index) in article"
      :key="index"
      :image-url_1="news.imageUrl_1"
      :image-url_2="news.imageUrl_2"
      :title="news.title"
      :text="news.text"
    />
  </div>
</template>

<script setup lang="ts">
import NewsComponent from "@/components/NewsComponent.vue";
import constants from "@/shared/constants";

const article = [
  {
    imageUrl_1: constants.news.article_1.photo_1,
    imageUrl_2: constants.news.article_1.photo_2,
    title: constants.news.article_1.title,
    text: constants.news.article_1.text,
  },
];
</script>

<style scoped>
.news-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 4rem;
}
</style>
