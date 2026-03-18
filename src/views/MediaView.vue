<template>
  <div class="obj bg">
    <div class="title">
      <div class="title-section gradient__text">
        <h1 class="title">Media</h1>
      </div>
    </div>

    <v-divider
      :thickness="4"
      color="#3AB54A"
      class="mx-12 border-opacity-100 my-12"
    ></v-divider>

    <div class="mx-10">
      <v-tabs v-model="activeTab" color="#3AB54A" class="mb-6">
        <v-tab value="all">All</v-tab>
        <v-tab value="pdf">PDFs</v-tab>
        <v-tab value="video">Video</v-tab>
        <v-tab value="audio">Audio</v-tab>
      </v-tabs>

      <div class="media-list">
        <MediaCard
          v-for="item in filteredItems(activeTab)"
          :key="item.index"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { mediaItems } from "@/shared/media";
import type { MediaItem, MediaType } from "@/shared/media";
import MediaCard from "@/components/MediaCard.vue";

const tabs = ["all", "pdf", "video", "audio"] as const;
const activeTab = ref("all");

const filteredItems = (tab: string): MediaItem[] => {
  if (tab === "all") return mediaItems;
  return mediaItems.filter((item) => item.type === (tab as MediaType));
};
</script>

<style scoped>
.media-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
