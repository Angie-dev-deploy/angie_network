<template>
  <div class="app__gallery flex__center">
    <div class="app__gallery-content">
      <h1 class="h-text">CAPITOL POZE</h1>
      <h1 class="h-text">Photo Gallery</h1>
      <p class="p-text" style="color: #aaaaaa; margin-top: 2rem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis
        ipsum turpis elit elit scelerisque egestas mu.
      </p>
      <button type="button" class="custom__button">View More</button>
    </div>
    <div class="app__gallery-images">
      <div class="app__gallery-images_container" ref="scrollRef">
        <div
          class="app__gallery-images_card flex__center"
          v-for="(image, index) in galleryImages"
          :key="'gallery_image-' + (index + 1)"
        >
          <img :src="image" alt="gallery_image" />
          <p class="gallery__image-icon">
            Descriere pt fiec imagine in parte maybe (am nevoie de ajutot, sa se
            updateze cumva cu indexul imaginii)
          </p>
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
import { ref, onMounted } from "vue";

import acceuPhoto from "@/assets/images/partners/acceu.png";
import babesPhoto from "@/assets/images/partners/babes.png";
import bariPhoto from "@/assets/images/partners/bari.png";
import fhooPhoto from "@/assets/images/partners/fhoo.png";
import lisboaPhoto from "@/assets/images/partners/lisboa.png";
import ljublianaPhoto from "@/assets/images/partners/ljubliana.png";
import malagaPhoto from "@/assets/images/partners/malaga.png";
import ucvPhoto from "@/assets/images/partners/ucv.png";
import unizaPhoto from "@/assets/images/partners/UNIZA.png";

const galleryImages = ref([
  ucvPhoto,
  acceuPhoto,
  bariPhoto,
  babesPhoto,
  fhooPhoto,
  lisboaPhoto,
  ljublianaPhoto,
  malagaPhoto,
  unizaPhoto,
]);
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
.h-text {
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.flex__center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.app__gallery {
  display: flex;
  flex-direction: row;

  background: #52616c;
  padding: 4rem 0rem 4rem 6rem;
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
  max-width: 70%;
  position: relative;
}

.app__gallery-images_container {
  display: flex;
  flex-direction: row;
  width: max-content;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth; /* Add smooth scroll behavior */
  scroll-snap-type: x mandatory; /* Add snap-type for horizontal scrolling */
}

.app__gallery-images_container::-webkit-scrollbar {
  display: none;
}

.app__gallery-images_card {
  position: relative;
  min-width: 301px;
  height: 447px;
  margin-right: 2rem;
  scroll-snap-align: start;
  //scroll-snap-align: end;
}

.gallery__image-icon {
  position: absolute;
  color: #fff;
  font-size: 2rem;
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
}

.app__gallery-images_card:hover img {
  opacity: 0.35;
}

.app__gallery-images_card:hover .gallery__image-icon {
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
  transition: color 0.1s ease-in-out, opacity 0.1s ease-in-out; /* Apply timing functions */
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
