<template>
  <div class="news">
    <div class="news-heading">
      <h1 class="gradient__text">The Latest News</h1>
    </div>
    <div class="news-container">
      <!-- <div class="news-container_groupA">
        <NewsCard
          class="news-card__first"
          :imgUrl="news[0].photo"
          :date="news[0].date"
          :title="news[0].title"
          :text="news[0].text"
        />
      </div> -->
      <div class="news-container_groupB">
        <NewsCard
          v-for="(news1, index) in news.slice(0, 3)"
          :key="index"
          class="news-card__second"
          :imgUrl="news1.photo"
          :date="news1.date"
          :title="news1.title"
          :text="news1.text"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NewsCard from "@/components/NewsCard.vue";
import news from "@/shared/news";
</script>

<style lang="scss" scoped>
.gradient__text {
  background: linear-gradient(90deg, #006837 0%, #00a551 100%);
  width: fit-content;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.news {
  display: flex;
  flex-direction: column;
  padding: 4rem 4rem;
  background: #fff;
}

.news-heading {
  width: 100%;
  text-align: left;
  margin-bottom: 5rem;
}

.news-heading h1 {
  font-family: var(--font-family);
  font-size: 62px;
  font-weight: 800;
  line-height: 75px;
  letter-spacing: -0.04rem;
}

.news-container {
  display: flex;
  flex-direction: row;
}

.news-container_groupA {
  flex: 0.75;
  margin-right: 2rem;
}

.news-container_groupB {
  flex: 1;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}

@media screen and (max-width: 990px) {
  .news-container {
    flex-direction: column-reverse;
  }

  .news-container_groupA {
    margin: 2rem 0;
  }

  .news-container_groupA .news-container_article {
    width: 48%;
  }

  .news-container_groupA .news-container_article-image {
    height: 250px;
  }
}

@media screen and (max-width: 770px) {
  .news-container_groupB {
    grid-template-columns: repeat(1, 1fr);
  }

  .news-container_groupA .news-container_article {
    width: 100%;
  }

  .news-heading h1 {
    font-size: 46px;
    line-height: 52px;
  }
}

@media screen and (max-width: 550px) {
  .news-heading h1 {
    font-size: 34px;
    line-height: 42px;
  }
  .news {
    padding: 4rem 1rem;
  }
}
</style>
