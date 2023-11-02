<template>
  <div class="news-container_article">
    <div class="news-container_article-image">
      <v-img :src="imgUrl" class="article-image"></v-img>
    </div>
    <div class="news-container_article-content">
      <div>
        <p>{{ date }}</p>
        <h3>{{ title }}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.news-container_article {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background: #006837;
}

.news-container_article-image {
  width: 100%;
  height: 100%;
}

.news-container_article-image img {
  width: 100%;
  height: 100%;
}

.news-container_article-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem 1.5rem;
  height: 100%;
}

.news-container_article-content p {
  color: #fff;
  font-family: var(--font-family);
  font-size: 11.649px;
  font-weight: 700;
  line-height: 35px;
}

.news-container_article-content h3 {
  color: #fff;
  font-family: var(--font-family);
  font-size: 25.11px;
  font-weight: 800;
  line-height: 30px;

  margin-bottom: 5rem;
  cursor: pointer;
}

.news-container_article-content p:last-child {
  color: #fff;
  font-family: var(--font-family);
  font-size: 11.649px;
  font-weight: 700;
  line-height: 35px;
  cursor: pointer;
}

@media screen and (max-width: 550px) {
  .news-container_article-content h3 {
    font-size: 18px;
    line-height: 25px;
  }
}
</style>
