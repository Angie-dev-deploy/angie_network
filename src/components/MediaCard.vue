<template>
  <v-card color="#006837" class="media-card">
    <v-card-title>{{ item.title }}</v-card-title>
    <v-card-text>
      <span>{{ item.description }}</span>

      <!-- Video player -->
      <div v-if="item.type === 'video'" class="media-player mt-4">
        <video
          controls
          preload="metadata"
          style="width: 100%; max-height: 500px"
        >
          <source :src="item.src" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <!-- Audio player -->
      <div v-if="item.type === 'audio'" class="media-player mt-4">
        <audio controls preload="metadata" style="width: 100%">
          <source :src="item.src" :type="audioMimeType" />
          Your browser does not support the audio tag.
        </audio>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn v-if="item.type === 'pdf'" @click="openMedia"
        >View or Download</v-btn
      >
      <v-btn v-else @click="openMedia">Download</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { MediaItem } from "@/shared/media";
import { computed, defineProps } from "vue";

const props = defineProps<{
  item: MediaItem;
}>();

const audioMimeType = computed(() => {
  if (props.item.src.endsWith(".ogg")) return "audio/ogg";
  if (props.item.src.endsWith(".m4a")) return "audio/mp4";
  if (props.item.src.endsWith(".mp3")) return "audio/mpeg";
  return "audio/mpeg";
});

const openMedia = () => {
  window.open(props.item.src, "_blank")?.focus();
};
</script>

<style scoped>
.media-card {
  width: 100%;
  margin-bottom: 1rem;
}
</style>
