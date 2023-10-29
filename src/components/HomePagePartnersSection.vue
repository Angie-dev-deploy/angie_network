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
import ucvLogo from "../assets/images/partners/ucv.png";
import ACCEULogo from "../assets/images/partners/acceu.png";
import BariLogo from "../assets/images/partners/bari.png";
import FHOOLogo from "../assets/images/partners/fhoo.png";
import LisboaLogo from "../assets/images/partners/lisboa.png";
import LjublianaLogo from "../assets/images/partners/ljubliana.png";
import MalagaLogo from "../assets/images/partners/malaga.png";
import UNIZALogo from "../assets/images/partners/UNIZA.png";
import BabesLogo from "../assets/images/partners/babes.png";

const partners = [
  {
    id: 0,
    name: "Universitatea din Craiova",
    logo: ucvLogo,
  },
  {
    id: 1,
    name: "ACCEU",
    logo: ACCEULogo,
  },
  {
    id: 2,
    name: "Bari",
    logo: BariLogo,
  },
  {
    id: 3,
    name: "FHOO",
    logo: FHOOLogo,
  },
  {
    id: 4,
    name: "Lisboa",
    logo: LisboaLogo,
  },
  {
    id: 5,
    name: "Ljubliana",
    logo: LjublianaLogo,
  },
  {
    id: 6,
    name: "Malaga",
    logo: MalagaLogo,
  },
  {
    id: 7,
    name: "UNIZA",
    logo: UNIZALogo,
  },
  {
    id: 8,
    name: "Babes",
    logo: BabesLogo,
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
