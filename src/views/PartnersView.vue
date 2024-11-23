<template>
  <div class="card-list bg">
    <div class="title-section">
      <v-img :src="angie_bgless" max-height="200px" max-width="100px"></v-img>
      <h1 class="title gradient__text">ANGIE Network</h1>
    </div>

    <v-divider
      :thickness="4"
      color="#3AB54A"
      class="mx-12 border-opacity-100 my-5"
    ></v-divider>

    <div class="subsection">
      <span class="subtitle">Founding Members</span>
      <span
        class="section-description"
        v-html="constants.partners.foundingMembersDescription"
      />
      <div class="cards-wrapper">
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
    </div>

    <v-divider
      :thickness="4"
      color="#3AB54A"
      class="mx-12 border-opacity-100 my-5"
    ></v-divider>

    <div class="subsection">
      <span class="subtitle">Structure and Objectives</span>
      <span
        class="section-description"
        v-html="constants.partners.structureAndObjectivesDescription"
      />
      <span>
        <PartnersNetwork />
      </span>
      <PdfViewerCard :pdfs="structureAndObjectivesPDFs" />
    </div>

    <v-divider
      :thickness="4"
      color="#3AB54A"
      class="mx-12 border-opacity-100 my-5"
    ></v-divider>

    <div class="subsection">
      <span class="subtitle">Adding New Members</span>
      <span
        class="section-description"
        v-html="constants.partners.addingNewMembersDescription"
      />
      <PdfViewerCard :pdfs="addingNewMembersPDFs" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardPartners from "@/components/CardPartners.vue";
import constants from "@/shared/constants";
import PartnersNetwork from "@/components/PartnersNetwork.vue";
import angie_bgless from "@/assets/images/angie_bgless.png";
import PdfViewerCard from "@/components/PdfViewerCard.vue";
import {
  structureAndObjectivesPDFs,
  addingNewMembersPDFs,
} from "@/shared/pdfs";

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

.subsection {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  padding: 2rem;

  .subtitle {
    font-size: 30px;
    font-weight: 800;
    text-align: center;
    width: 100%;
    margin-bottom: 1rem;
  }

  .section-description {
    font-size: 20px;
    text-align: left;
    width: 100%;
    margin-bottom: 2rem;
  }

  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
  }
}
</style>
