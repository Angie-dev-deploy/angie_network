<template>
  <div class="app__gallery flex__center">
    <div class="app__gallery-content">
      <h1 class="h-text">Photo Gallery</h1>
      <p class="p-text">Here are the latest photos from our project.</p>
      <router-link type="button" class="custom__button" to="/media">
        View More
      </router-link>
    </div>
    <div class="app__gallery-images">
      <div class="app__gallery-images_container" ref="scrollRef">
        <div
          class="app__gallery-images_card flex__center"
          v-for="(image, index) in galleryImages"
          :key="'gallery_image-' + (index + 1)"
        >
          <img :src="image" alt="gallery_image" />
          <p class="gallery__image-description mx-12">Image description.</p>
          <!-- <v-icon class="gallery__image-icon">mdi-information</v-icon> -->
        </div>
      </div>
      <div class="app__gallery-images_arrows">
        <v-icon class="gallery__arrow-icon" @click="scroll('left')"
          >mdi-arrow-left-circle</v-icon
        >
        <v-icon class="gallery__arrow-icon" @click="scroll('right')"
          >mdi-arrow-right-circle</v-icon
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import poza1 from "@/assets/images/events/poza1.jpeg";

const galleryImages = ref([poza1, poza1, poza1]);
const scrollRef = ref<HTMLElement | null>(null);

const scroll = (direction: string) => {
  if (scrollRef.value) {
    if (direction === "left") {
      scrollRef.value.scrollLeft -= 301;
    } else {
      scrollRef.value.scrollLeft += 301;
    }
  }
};
// ANIMATIE SCROLL AUTOMAT
// let currentImageIndex = ref(0);
// let intervalId = null;

// const startAutoScroll = () => {
//   intervalId = setInterval(() => {
//     scroll("right");
//   }, 3000); // Adjust the interval duration as needed (3000 milliseconds = 3 seconds)
// };

// const stopAutoScroll = () => {
//   clearInterval(intervalId);
// };

// onMounted(() => {
//   startAutoScroll();
// });
</script>

<style lang="scss" scoped>
.custom__button {
  text-decoration: none;
  padding-top: 1rem;
}

.h-text {
  background: linear-gradient(90deg, #006837 0%, #00a551 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 62px;
}
.p-text {
  color: #aaaaaa;
  margin-top: 2rem;
  font-size: 24px;
}
.flex__center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.app__gallery {
  display: flex;
  flex-direction: row;

  background: #e2dcde;
  padding: 4rem 0rem 4rem 6rem;
  max-width: 100% !important;
}

.app__gallery-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  min-width: 500px;
  padding-right: 2rem;
}

.app__gallery-content button {
  margin-top: 1rem;
}

.app__gallery-images {
  flex: 2;
  display: flex;
  flex-direction: row;
  max-width: 50%;
  position: relative;
}

.app__gallery-images_container {
  display: flex;
  flex-direction: row;
  width: max-content;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  overflow-y: hidden;
}

.app__gallery-images_container::-webkit-scrollbar {
  display: none;
}

.app__gallery-images_card {
  position: relative;
  min-width: 400px;
  height: 447px;
  margin-right: 2rem;
  scroll-snap-align: start;
  //scroll-snap-align: end;
}

.gallery__image-description {
  position: absolute;
  color: #fff;
  font-size: 1.5rem;
  opacity: 0;
  transition: 0.5s ease;
  cursor: pointer;
}

.app__gallery-images_card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  transition: 0.5s ease;
  border-radius: 12px;
}

.app__gallery-images_card:hover img {
  opacity: 0.35;
  filter: blur(4px);
  transform: scale(1.1);
}

.app__gallery-images_card:hover .gallery__image-description {
  opacity: 1;
}

.app__gallery-images_arrows {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;
  position: absolute;
  bottom: 5%;
}

.gallery__arrow-icon {
  color: #3ab54a;
  font-size: 4rem;
  cursor: pointer;
  opacity: 0.8;
  transition: color 0.1s ease-in-out, opacity 0.1s ease-in-out;
}

.gallery__arrow-icon:hover {
  color: #006837;
  opacity: 1;
}

@media screen and (min-width: 2000px) {
  .app__gallery-content button {
    margin-top: 2rem;
  }

  .app__gallery-content {
    min-width: 1000px;
    padding-right: 4rem;
  }

  .app__gallery-images_card {
    min-width: 400px;
    height: 547px;
  }
}

@media screen and (max-width: 1150px) {
  .app__gallery {
    flex-direction: column;
    padding: 4rem 4rem 4rem 4rem;
  }

  .app__gallery-images {
    max-width: 100%;
    margin: 5rem 0;
  }
}

@media screen and (max-width: 850px) {
  .app__gallery {
    padding: 4rem 4rem 4rem 4rem;
  }
}

@media screen and (max-width: 650px) {
  .app__gallery {
    padding: 4rem 2rem 4rem 2rem;
  }

  .app__gallery-content {
    min-width: 100%;
  }

  .app__gallery-images_card {
    min-width: 240px;
    height: 320px;
  }
}
</style>
