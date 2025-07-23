<template>
  <div class="news-article">
    <v-row>
      <v-col cols="12" md="6">
        <v-card-title class="news-title">{{ newsPiece.title }}</v-card-title>
        <v-card-title v-if="newsPiece.subtitle" class="news-subtitle">{{
          newsPiece.subtitle
        }}</v-card-title>
        <v-divider
          :thickness="4"
          color="#3AB54A"
          class="border-opacity-100 mx-4 my-4"
        ></v-divider>
        <div
          class="news-image-container"
          v-if="isMobile"
          @click="showImageDialog(newsPiece.photo)"
        >
          <img :src="newsPiece.photo" class="news-image" alt="News Image" />
        </div>
        <v-card-text class="news-text">
          <span v-html="newsPiece.text"></span>
        </v-card-text>
        <div
          class="news-image-container"
          v-if="!isMobile"
          @click="showImageDialog(newsPiece.photo)"
        >
          <img :src="newsPiece.photo" class="news-image" alt="News Image" />
        </div>
      </v-col>
      <v-col cols="12" md="6" class="news-text-container">
        <div
          class="news-image-container"
          v-if="newsPiece.photo_2"
          @click="showImageDialog(newsPiece.photo_2)"
        >
          <img :src="newsPiece.photo_2" class="news-image" alt="News Image 2" />
        </div>
        <v-card-text class="news-text" v-if="newsPiece.text_2">
          <span v-html="newsPiece.text_2"></span>
        </v-card-text>
      </v-col>
    </v-row>

    <ImagePopup
      :showPopup="isImageDialogOpen"
      :selectedImage="currentImage"
      @close-popup="closeImageDialog"
    />
  </div>
  <div v-if="!newsPiece" class="loading-state">
    <!-- Loading state or placeholder -->
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import news from "@/shared/news";
import ImagePopup from "./ImagePopup.vue";

const route = useRoute();
const isImageDialogOpen = ref(false);
const currentImage = ref("");
const newsId = ref(Number(route.params.id));
const newsPiece: any = ref(null);

const windowWidth = ref(window.innerWidth);

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateWindowWidth);
});

const isMobile = computed(() => windowWidth.value < 960);

function findNewsById(index: number) {
  return news.find((piece: any) => piece.index === index);
}

const showImageDialog = (imageUrl: string) => {
  currentImage.value = imageUrl;
  isImageDialogOpen.value = true;
};

const closeImageDialog = () => {
  isImageDialogOpen.value = false;
};

watchEffect(() => {
  newsId.value = Number(route.params.id);
  newsPiece.value = findNewsById(newsId.value);
});
</script>

<style lang="scss" scoped>
.news-article {
  padding: 6rem 4% 4%;
  background-color: #e2dcde;
}

.news-title {
  font-size: 2rem;
  color: #006837;
  margin-bottom: 1rem;
  white-space: wrap;
}

.news-subtitle {
  font-size: 1.2rem;
  color: #567466;
  margin-top: -2rem;
  white-space: wrap;
}

.news-text {
  font-size: 1rem;
  text-align: justify;
  margin-bottom: 1.5rem;
}

.news-image-container {
  cursor: pointer;
  border-radius: 12px;
  transition: transform 0.3s ease;
  overflow: hidden; /* Ensure overflow is hidden */
  margin: 2rem; /* Adjust margin as needed */
  display: flex;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0; /* Set margin to zero */
    padding: 0; /* Set padding to zero */
    border-radius: 12px;
  }
}

.img_pop-up {
  max-width: 100%;
  max-height: 450px;
  margin: 1rem 0;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #fff;
  background-color: #3ab54a;
  border-radius: 50%;
  cursor: pointer;
}

.loading-state {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; /* Adjust the height as needed */
}
</style>
