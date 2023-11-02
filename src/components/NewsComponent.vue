<template>
  <div class="news-article">
    <v-row>
      <v-col cols="12" md="6">
        <v-card-title class="news-title">{{ title }}</v-card-title>
        <v-divider
          :thickness="4"
          color="#3AB54A"
          class="border-opacity-100 mx-4 my-4"
        ></v-divider>
        <v-card-text class="news-text"><span v-html="text"></span></v-card-text>
        <v-img
          :src="imageUrl_1"
          class="news-image"
          aspect-ratio="1.5"
          @click="showImageDialog(imageUrl_1)"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6" class="news-text-container">
        <v-img
          :src="imageUrl_2"
          class="news-image"
          aspect-ratio="1.5"
          @click="showImageDialog(imageUrl_2)"
        ></v-img>
        <v-card-text class="news-text"><span v-html="text"></span></v-card-text>
      </v-col>
    </v-row>

    <v-dialog v-model="isImageDialogOpen" max-width="600px" overlay>
      <v-card max-width="600px">
        <v-img :src="currentImage" class="img_pop-up"></v-img>
        <v-btn @click="closeImageDialog">Close</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  imageUrl_1: {
    type: String,
    required: true,
  },
  imageUrl_2: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const isImageDialogOpen = ref(false);
const currentImage = ref("");

const showImageDialog = (imageUrl: string) => {
  currentImage.value = imageUrl;
  isImageDialogOpen.value = true;
};

const closeImageDialog = () => {
  isImageDialogOpen.value = false;
};
</script>

<style scoped>
.title {
  color: #006837;
  font-size: 60px;
  text-align: center;
}
.news-article {
  margin: 3% 8% 8% 8%;
}

.news-title {
  font-size: 40px;
  color: #006837;
}

.news-image {
  object-fit: cover;
  width: 100%;
  margin: 5% 0;
  cursor: pointer;
}

.news-text {
  font-size: 14px;
  text-align: justify;
}

.img_pop-up {
  max-width: 100%;
  max-height: 450px;
  margin: 20px;
}
</style>
