<template>
  <div class="card-list">
    <CardPartners
      v-for="(card, index) in cards"
      :key="index"
      :image-url="card.imageUrl"
      :title="card.title"
      :description="card.description"
    />
  </div>
</template>

<script lang="ts" setup>
import CardPartners from "@/components/CardPartners.vue";

import acceuPhoto from "@/assets/images/partners/acceu.png";
import babesPhoto from "@/assets/images/partners/babes.png";
import bariPhoto from "@/assets/images/partners/bari.png";
import fhooPhoto from "@/assets/images/partners/fhoo.png";
import lisboaPhoto from "@/assets/images/partners/lisboa.png";
import ljublianaPhoto from "@/assets/images/partners/ljubliana.png";
import malagaPhoto from "@/assets/images/partners/malaga.png";
import ucvPhoto from "@/assets/images/partners/ucv.png";
import unizaPhoto from "@/assets/images/partners/UNIZA.png";

const cards = [
  {
    imageUrl: ucvPhoto,
    title: "Universitatea din Craiova",
    description: "Description for Card 2",
  },
  {
    imageUrl: acceuPhoto,
    title: "Accreditation Council for Entrepreneurial and Engaged Universities",
    description: "Description for Card 1",
  },
  {
    imageUrl: lisboaPhoto,
    title: "Universidade de Lisboa",
    description: "Description for Card 2",
  },
  {
    imageUrl: ljublianaPhoto,
    title: "Univerza v Ljubljani",
    description: "Description for Card 2",
  },
  {
    imageUrl: unizaPhoto,
    title: "Zilinska Univerzita v Ziline",
    description: "Description for Card 2",
  },
  {
    imageUrl: bariPhoto,
    title: "Politecnico di Bari",
    description: "Description for Card 2",
  },
  {
    imageUrl: malagaPhoto,
    title: "Universidad de Malaga",
    description: "Description for Card 2",
  },
  {
    imageUrl: fhooPhoto,
    title: "FH OO Studienbetriebs",
    description: "Description for Card 2",
  },
  {
    imageUrl: babesPhoto,
    title: "Universitatea Babeș-Bolyai",
    description: "Description for Card 2",
  },
];
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
