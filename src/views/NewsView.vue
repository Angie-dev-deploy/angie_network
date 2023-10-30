<template>
  <div>
    <NewsComponent
      v-for="(news, index) in article"
      :key="index"
      :image-url="news.imageUrl"
      :title="news.title"
      :text="news.text"
    />
    <!-- <news-component
      title="Sample Article"
      imageUrl="https://example.com/sample-image.jpg"
      text="This is a sample news article."
    ></news-component> -->
  </div>
</template>

<script setup lang="ts">
import NewsComponent from "@/components/NewsComponent.vue";
import constants from "@/shared/constants";

const article = [
  {
    imageUrl: constants.news.article_1.photo,
    title: constants.news.article_1.title,
    text: constants.news.article_1.text,
  },
  {
    imageUrl: constants.news.article_2.photo,
    title: constants.news.article_2.title,
    text: constants.news.article_2.text,
  },
];
</script>
