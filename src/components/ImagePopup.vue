<template>
  <div v-if="showPopup" class="image-popup">
    <div class="popup-content">
      <v-btn
        class="close-button"
        @click="closePopup"
        transparent
        :elevation="0"
      >
        <v-icon small>mdi-close-circle-outline</v-icon>
      </v-btn>
      <img :src="selectedImage" alt="popup_image" />
      <p class="popup-description">{{ selectedDescription }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  showPopup: Boolean,
  selectedImage: String,
  selectedDescription: String,
});

const emit = defineEmits(["close-popup"]);

const closePopup = () => {
  emit("close-popup");
};
</script>

<style scoped>
/* Styling for the popup */
.image-popup {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  margin-top: 4rem;
  text-align: center;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  position: relative; /* Set position relative for child positioning */
}

.popup-content img {
  height: auto;
  max-height: 100%;
  max-width: 100%;
  border-radius: 12px;
}

.popup-description {
  margin-top: 10px;
  color: #666;
}

/* Close button styling */
.close-button {
  border-radius: 50%;
  padding: 0 !important;
  height: 32px;
  width: 32px;
  min-width: 32px;
  position: absolute; /* Set position absolute for positioning */
  top: 10px; /* Adjust top value as needed */
  right: 10px; /* Adjust right value as needed */
}

@media screen and (max-width: 550px) {
  /* Adjust styles for smaller screens */
  .popup-content {
    max-width: 100%;
    max-height: 100%;
    border-radius: 0;
  }

  .close-button {
    height: 40px;
    width: 40px;
    min-width: 40px;
  }
}
</style>
