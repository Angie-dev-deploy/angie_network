<template>
  <div class="card-list bg">
    <div class="title-section">
      <v-img :src="angie_bgless" max-height="200px" max-width="100px"></v-img>
      <h1 class="title">MEET THE PARTNERS</h1>
    </div>
    <v-divider
      :thickness="4"
      color="#3AB54A"
      class="mx-12 border-opacity-100 my-12"
    ></v-divider>
    <CardPartners
      v-for="(card, index) in cards"
      :key="index"
      :image-url="card.imageUrl"
      :title="card.title"
      :description="card.description"
      :contactPerson="card.contactPerson"
    />
  </div>
</template>

<script lang="ts" setup>
import CardPartners from "@/components/CardPartners.vue";
import constants from "@/shared/constants";
import angie_bgless from "@/assets/images/angie_bgless.png";

const cards = [
  {
    imageUrl: constants.universities.ucv.photo,
    title: constants.universities.ucv.name,
    description: constants.universities.ucv.description,
    contactPerson: constants.universities.ucv.contactPerson,
  },
  {
    imageUrl: constants.universities.acceu.photo,
    title: constants.universities.acceu.name,
    description: constants.universities.acceu.description,
    contactPerson: constants.universities.acceu.contactPerson,
  },
  {
    imageUrl: constants.universities.lisboa.photo,
    title: constants.universities.lisboa.name,
    description: constants.universities.lisboa.description,
    contactPerson: constants.universities.lisboa.contactPerson,
  },
  {
    imageUrl: constants.universities.ljubliana.photo,
    title: constants.universities.ljubliana.name,
    description: constants.universities.ljubliana.description,
    contactPerson: constants.universities.ljubliana.contactPerson,
  },
  {
    imageUrl: constants.universities.uniza.photo,
    title: constants.universities.uniza.name,
    description: constants.universities.uniza.description,
    contactPerson: constants.universities.uniza.contactPerson,
  },
  {
    imageUrl: constants.universities.bari.photo,
    title: constants.universities.bari.name,
    description: constants.universities.bari.description,
    contactPerson: constants.universities.bari.contactPerson,
  },
  {
    imageUrl: constants.universities.malaga.photo,
    title: constants.universities.malaga.name,
    description: constants.universities.malaga.description,
    contactPerson: constants.universities.malaga.contactPerson,
  },
  {
    imageUrl: constants.universities.fhoo.photo,
    title: constants.universities.fhoo.name,
    description: constants.universities.fhoo.description,
    contactPerson: constants.universities.fhoo.contactPerson,
  },
  {
    imageUrl: constants.universities.babes.photo,
    title: constants.universities.babes.name,
    description: constants.universities.babes.description,
    contactPerson: constants.universities.babes.contactPerson,
  },
];
</script>

<style scoped>
.title {
  color: #006837;
  font-size: 60px;
  text-align: center;
  padding-right: 100px;
}

@media screen and (max-width: 550px) {
  .title {
    font-size: 40px;
    padding-right: 0;
  }

  .title-section {
    flex-direction: column;

    .v-img {
      min-width: 80px !important;
    }
  }
}

.title-section {
  display: flex;
  flex-direction: row;
  align-items: center;

  .v-img {
    margin: 0 20px;
    min-width: 100px;
  }
}

.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 4rem;
}

.bg {
  background: #e2dcde;
}
</style>
