<template>
  <div>
    <v-card class="info-card">
      <v-card-text class="card-text">
        <span>
          The structure and main activities of ANGIE can be found in the
          documents below.
        </span>
        <br />
        <br />
        <span>
          Fill the Application Form and send it by email to one of the Founding
          Members.
        </span>
        <br />
        <br />
        <span> You will be contacted in short time. </span>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
</script>

<style lang="scss" scoped>
.info-card {
  border-radius: 8px;
  border: 1px solid transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, #006837, #3ab54a, #006837);
  border-image-slice: 1;
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.card-text {
  font-size: 20px;
  text-align: left;
}
</style>
