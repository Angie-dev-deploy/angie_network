<template>
  <v-container>
    <div class="py-12 d-flex flex-row partners">
      <v-img
        v-for="partner in constants.universities"
        :key="partner.id"
        :src="partner.photo"
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
</script>

<style lang="scss" scoped>
.partners {
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
