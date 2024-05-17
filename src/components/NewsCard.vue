<template>
  <div class="news-container_article" @click="emit('click')">
    <div class="news-container_article-image">
      <img :src="imgUrl" class="article-image" alt="Article Image" />
    </div>
    <div class="news-container_article-content">
      <div>
        <p>{{ formattedDate }}</p>
        <h3>{{ title }}</h3>
        <h4 v-if="subtitle" class="article-subtitle">{{ subtitle }}</h4>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watchEffect } from "vue";
import { format } from "date-fns";

const emit = defineEmits(["click"]);

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
  subtitle: {
    type: String,
    required: false,
  },
});

const formattedDate = ref(format(new Date(props.date), "MMMM dd, yyyy"));
</script>

<style scoped>
.news-container_article {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #006837;
  cursor: pointer;
  overflow: hidden; /* Ensure overflow is hidden */

  &:hover {
    .news-container_article-image {
      transform: scale(1.05);
      transition: transform 0.3s ease;
    }
  }
}

.news-container_article-image {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
  overflow: hidden; /* Ensure overflow is hidden */
}

.news-container_article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
}

.news-container_article-content p:last-child {
  color: #fff;
  font-family: var(--font-family);
  font-size: 11.649px;
  font-weight: 700;
  line-height: 35px;
}

@media screen and (max-width: 550px) {
  .news-container_article-content h3 {
    font-size: 18px;
    line-height: 25px;
  }
}

.article-subtitle {
  color: #fff;
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-top: -3rem;
}
</style>
