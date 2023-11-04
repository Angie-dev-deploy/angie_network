<template>
  <div class="bg wrapper heading-global">
    <span class="title py-4 gradient__text">Contact</span>
    <v-divider
      :thickness="4"
      color="#3AB54A"
      class="border-opacity-100 my-4 w-75"
    ></v-divider>
    <PartnersNetwork />
  </div>
</template>

<script lang="ts" setup>
import PartnersNetwork from "@/components/PartnersNetwork.vue";
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  align-items: center;
}

.title {
}
</style>
