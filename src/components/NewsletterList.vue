<template>
  <div class="newsletter-container">
    <v-expansion-panels multiple>
      <v-expansion-panel
        class="newsletter-expansion-panel"
        v-for="(newsletter, index) in newsletterList"
        :key="index"
      >
        <v-expansion-panel-title>
          {{ newsletter.title }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="button-group">
            <a
              class="newsletter-button"
              :href="newsletter.pdfUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              View PDF
            </a>
            <a class="newsletter-button" :href="newsletter.pdfUrl" download>
              Download PDF
            </a>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
import { newsletterList } from "@/shared/newsletters.ts";
</script>

<style lang="scss">
.newsletter-container {
  margin: 0 48px;
}

.newsletter-expansion-panel {
  margin-top: 16px;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.newsletter-button {
  display: inline-block;
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  background-color: #3ab54a;
  padding: 8px 16px;
  border-radius: 8px;
  text-align: center;
  width: 100%;

  &:hover {
    background-color: #2a8f3c;
  }
}
</style>
