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
      <PdfViewerCard :pdfs="pdfs" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { pdfs } from "@/shared/pdfs.ts";
import PdfViewerCard from "@/components/PdfViewerCard.vue";
</script>

<style scoped>
.pdf-cards-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 2rem;

  .pdf-card {
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
