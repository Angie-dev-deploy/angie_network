<template>
  <div class="obj bg">
    <div class="title">
      <div class="title-section gradient__text">
        <h1 class="title">Outputs</h1>
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
        <v-chip value="image" variant="outlined" filter>Images</v-chip>
      </v-chip-group>

      <div v-for="section in outputSections" :key="section.key">
        <template v-if="sectionItems(section.key).length > 0">
          <h2 class="section-title mt-8 mb-4">{{ section.label }}</h2>
          <v-divider
            :thickness="2"
            color="#3AB54A"
            class="border-opacity-50 mb-4"
          ></v-divider>
          <div class="media-list">
            <MediaCard
              v-for="item in sectionItems(section.key)"
              :key="item.index"
              :item="item"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { outputItems, outputSections } from "@/shared/outputs";
import type { MediaItem, MediaType } from "@/shared/media";
import MediaCard from "@/components/MediaCard.vue";

const activeTab = ref("all");

const filteredItems = computed((): MediaItem[] => {
  if (activeTab.value === "all") return outputItems;
  return outputItems.filter(
    (item) => item.type === (activeTab.value as MediaType)
  );
});

const sectionItems = (sectionKey: string): MediaItem[] => {
  return filteredItems.value.filter((item) => item.section === sectionKey);
};
</script>

<style scoped>
.media-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.section-title {
  color: #3ab54a;
  font-size: 1.5rem;
  font-weight: 600;
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
