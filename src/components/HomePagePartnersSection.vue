<template>
  <v-container>
    <div class="py-12 d-flex flex-row partners">
      <v-img
        v-for="partner in partners"
        :key="partner.id"
        :src="partner.logo"
        max-width="120px"
        max-height="120px"
        min-width="120px"
        class="my-4"
      ></v-img>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import constants from "@/shared/constants";

const partners = [
  {
    id: 0,
    name: "Universitatea din Craiova",
    logo: constants.universities.ucv.photo,
  },
  {
    id: 1,
    name: "ACCEU",
    logo: constants.universities.acceu.photo,
  },
  {
    id: 2,
    name: "Bari",
    logo: constants.universities.lisboa.photo,
  },
  {
    id: 3,
    name: "FHOO",
    logo: constants.universities.ljubliana.photo,
  },
  {
    id: 4,
    name: "Lisboa",
    logo: constants.universities.uniza.photo,
  },
  {
    id: 5,
    name: "Ljubliana",
    logo: constants.universities.bari.photo,
  },
  {
    id: 6,
    name: "Malaga",
    logo: constants.universities.malaga.photo,
  },
  {
    id: 7,
    name: "UNIZA",
    logo: constants.universities.fhoo.photo,
  },
  {
    id: 8,
    name: "Babes",
    logo: constants.universities.babes.photo,
  },
];
</script>

<style lang="scss" scoped>
.partners {
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
