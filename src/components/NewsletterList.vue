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
          <a
            class="newsletter-download-link"
            :href="newsletter.pdfUrl"
            target="_blank"
            download
          >
            Download PDF
          </a>
          <iframe
            :src="newsletter.pdfUrl"
            width="100%"
            height="600px"
            style="border: none; margin-top: 1rem"
          ></iframe>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsletterList: [
        {
          title: "Newsletter 1",
          pdfUrl: "/pdfs/newsletters/ANGIE-Newsletter 1.pdf",
        },
        {
          title: "Newsletter 2",
          pdfUrl: "/pdfs/newsletters/ANGIE-Newsletter 2.pdf",
        },
        {
          title: "Newsletter 3",
          pdfUrl: "/pdfs/newsletters/ANGIE-Newsletter 3.pdf",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.newsletter-container {
  margin: 0 48px;
}

.newsletter-expansion-panel {
  margin-top: 16px;
}

.newsletter-download-link {
  display: inline-block;
  margin-bottom: 16px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  background-color: #3ab54a;
  padding: 8px 16px;
  border-radius: 8px;
  width: 100%;

  &:hover {
    background-color: #2a8f3c;
  }
}
</style>
