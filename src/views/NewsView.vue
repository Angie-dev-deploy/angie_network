<template>
  <div class="news bg">
    <div class="title">
      <div class="title-section gradient__text">
        <v-icon small class="mr-4"><MdiNewspaperIcon /></v-icon>
        <h1 class="title">The Latest News</h1>
      </div>
    </div>
    <v-divider
      :thickness="4"
      color="#3AB54A"
      class="mx-12 border-opacity-100 my-12"
    ></v-divider>
    <div class="news-card">
      <div class="news-container">
        <div class="news-container_groupB">
          <NewsCard
            v-for="news1 in news.slice()"
            :key="news1.index"
            :imgUrl="news1.photo"
            :date="news1.date"
            :title="news1.title"
            :subtitle="news1.subtitle ? news1.subtitle : ''"
            @click="goToNewsDetailPage(news1.index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NewsCard from "@/components/NewsCard.vue";
import news from "@/shared/news";
import MdiNewspaperIcon from "@/assets/icons/MdiNewspaperIcon.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToNewsDetailPage = (id: number) => {
  router.push({ name: "NewsComponent", params: { id: id } });
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  font-size: 60px;
  font-weight: 800;
  text-align: center;
}

.news {
  padding-top: 4rem;
}

.bg {
  background: #e2dcde;
}

.title-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;

  .v-img {
    margin: 0 20px;
    min-width: 100px;
  }
}

.news-card {
  padding: 3rem 4rem;
}

.news-container {
  display: flex;
  flex-direction: row;
}

.news-container_groupB {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}

@media screen and (max-width: 990px) {
  .news-container {
    flex-direction: column-reverse;
  }
}

@media screen and (max-width: 770px) {
  .news-container_groupB {
    grid-template-columns: repeat(1, 1fr);
  }
  .title {
    font-size: 50px;
  }
}

@media screen and (max-width: 550px) {
  .title {
    font-size: 30px;
    padding-right: 0;
  }

  .title-section {
    .v-img {
      min-width: 80px !important;
    }
  }
}
</style>
