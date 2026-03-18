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
      <v-chip-group
        v-model="activeTab"
        mandatory
        selected-class="active-chip"
        class="mb-6"
      >
        <v-chip value="all" variant="outlined" filter>All</v-chip>
        <v-chip value="pdf" variant="outlined" filter>PDFs</v-chip>
        <v-chip value="video" variant="outlined" filter>Video</v-chip>
        <v-chip value="audio" variant="outlined" filter>Audio</v-chip>
      </v-chip-group>

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
  flex-wrap: wrap;
  gap: 1.25rem;
}

:deep(.active-chip) {
  background: #006837 !important;
  color: #fff !important;
  border-color: #006837 !important;
}

:deep(.v-chip--variant-outlined) {
  border-color: #006837;
  color: #006837;
}
</style>
