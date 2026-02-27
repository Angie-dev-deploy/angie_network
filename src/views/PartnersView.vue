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

    <div id="becoming-a-member" class="subsection">
      <span class="subtitle">
        <v-icon color="#3AB54A" class="mr-2">
          mdi-account-multiple-plus-outline
        </v-icon>
        Becoming a member
        <button
          @click="copyLink('becoming-a-member')"
          class="ml-2 link-icon"
          title="Copy Link"
        >
          <v-icon color="#3AB54A">mdi-link</v-icon>
        </button>
      </span>
      <v-row>
        <v-col> <ApplicationFormComponent /></v-col>
        <v-col class="become-member-btns d-flex flex-column">
          <v-btn class="become-member-btn" @click="openApplicationForm('pdf')"
            >Application Form PDF</v-btn
          >
          <v-btn class="become-member-btn" @click="openApplicationForm('form')"
            >Register Online Now!</v-btn
          >
        </v-col>
      </v-row>
    </div>

    <v-divider
      :thickness="4"
      color="#3AB54A"
      class="mx-12 border-opacity-100 my-5"
    ></v-divider>

    <!-- Founding Members Section -->
    <div id="founding-members" class="subsection">
      <span class="subtitle">
        <v-icon color="#3AB54A" class="mr-2">mdi-account-group</v-icon>
        Founding Members
        <button
          @click="copyLink('founding-members')"
          class="ml-2 link-icon"
          title="Copy Link"
        >
          <v-icon color="#3AB54A">mdi-link</v-icon>
        </button>
      </span>
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
          :uni-info="card"
          :circleColor="circleColors[index]"
        />
      </div>
    </div>

    <v-divider
      :thickness="4"
      color="#3AB54A"
      class="mx-12 border-opacity-100 my-5"
    ></v-divider>

    <!-- Structure and Objectives Section -->
    <div id="structure-objectives" class="subsection">
      <span class="subtitle">
        <v-icon color="#3AB54A" class="mr-2">mdi-target</v-icon>
        Structure and Objectives
        <button
          @click="copyLink('structure-objectives')"
          class="ml-2 link-icon"
          title="Copy Link"
        >
          <v-icon color="#3AB54A">mdi-link</v-icon>
        </button>
      </span>
      <span
        class="section-description"
        v-html="constants.partners.structureAndObjectivesDescription"
      />
      <span>
        <PartnersNetwork class="mb-6 network-svg" />
      </span>
      <PdfViewerCard :pdfs="structureAndObjectivesPDFs" />
    </div>

    <v-divider
      :thickness="4"
      color="#3AB54A"
      class="mx-12 border-opacity-100 my-5"
    ></v-divider>

    <!-- Adding New Members Section -->
    <div id="adding-members" class="subsection">
      <span class="subtitle">
        <v-icon color="#3AB54A" class="mr-2">mdi-account-plus</v-icon>
        Adding New Members
        <button
          @click="copyLink('adding-members')"
          class="ml-2 link-icon"
          title="Copy Link"
        >
          <v-icon color="#3AB54A">mdi-link</v-icon>
        </button>
      </span>
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
import ApplicationFormComponent from "@/components/ApplicationFormComponent.vue";
import {
  structureAndObjectivesPDFs,
  addingNewMembersPDFs,
} from "@/shared/pdfs";
import { useRouter } from "vue-router";

const router = useRouter();

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

function copyLink(sectionId: string) {
  const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
  console.log("URL: ", window.location);
  navigator.clipboard
    .writeText(url)
    .then(() => {
      router.push({ hash: `#${sectionId}` });
    })
    .catch((err) => {
      console.error("Could not copy link: ", err);
    });
}

const openApplicationForm = (type: string) => {
  if (type === "pdf") {
    window.open(constants.applicationFormPDF, "_blank");
  } else {
    window.open(constants.applicationFormLink, "_blank");
  }
};
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
  width: 100%;
  padding-top: 4rem;
}

.subsection {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  padding: 2rem 3rem;

  .subtitle {
    font-size: 30px;
    font-weight: 800;
    text-align: left;
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }

  .section-description {
    font-size: 20px;
    text-align: left;
    width: 100%;
    margin-bottom: 2rem;
  }

  .cards-wrapper {
    display: flex !important;
    flex-wrap: wrap !important;
    justify-content: space-evenly !important;
    row-gap: 8px;
    width: 100% !important;
  }

  .link-icon {
    text-decoration: none;
  }

  .become-member-btns {
    display: flex !important;
    flex-direction: column;
    justify-content: center;

    .become-member-btn {
      margin: 1rem;
      font-size: 20px;
      font-weight: 800;
      color: white;
      background-color: #3ab54a;
      text-transform: none;
    }
  }
}

.network-svg {
  /* margin-left: -calc(100% - 100vw); */
}
</style>
