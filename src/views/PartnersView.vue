<template>
  <div class="card-list bg">
    <div class="title-section">
      <v-img :src="angie_bgless" max-height="200px" max-width="100px"></v-img>
      <h1 class="title gradient__text">Meet The Partners</h1>
    </div>
    <v-divider
      :thickness="4"
      color="#3AB54A"
      class="mx-12 border-opacity-100 my-12"
    ></v-divider>
    <CardPartners
      v-for="(card, index) in constants.universities"
      :key="index"
      :image-url="card.photo"
      :title="card.name"
      :description="card.description"
      :contactPerson="card.contactPerson"
      :circleColor="circleColors[index]"
    />
  </div>
</template>

<script lang="ts" setup>
import CardPartners from "@/components/CardPartners.vue";
import constants from "@/shared/constants";
import angie_bgless from "@/assets/images/angie_bgless.png";

const circleColors = [
  "#E3342F",
  "#F6993F",
  "#FFED4A",
  "#38C172",
  "#4DC0B5",
  "#3490DC",
  "#6574CD",
  "#9561E2",
  "#F66D9B",
];
</script>

<style scoped>
.title {
  font-size: 60px;
  font-weight: 800;
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
</style>
