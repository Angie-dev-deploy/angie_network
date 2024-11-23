<template>
  <div class="pdfs-wrapper">
    <v-card
      color="#006837"
      v-for="pdf in pdfs"
      :key="pdf.index"
      class="pdf-card"
    >
      <v-card-title>{{ pdf.title }}</v-card-title>
      <v-card-text>
        <span>
          {{ pdf.description }}
        </span>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="viewPdf(pdf)">View or Download</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  pdfs: Array,
});

const viewPdf = (pdf: any) => {
  window.open(pdf.src, "_blank").focus();
};
</script>

<style scoped>
.pdfs-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  margin: 2rem;

  .pdf-card {
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
