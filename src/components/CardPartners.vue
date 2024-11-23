<template>
  <v-card class="card d-flex flex-column">
    <v-dialog width="500">
      <template v-slot:activator="{ props }">
        <v-icon class="info-btn" color="black" v-bind="props">
          mdi-information-outline
        </v-icon>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card :title="title">
          <v-card-text> <span v-html="description"></span> </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="Close" @click="isActive.value = false"></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>

    <div
      class="circle"
      :style="{ right: '40px', backgroundColor: circleColor }"
    ></div>
    <div
      class="circle"
      :style="{ right: '70px', backgroundColor: circleColor, opacity: 0.8 }"
    ></div>
    <div class="img-title">
      <v-img
        :src="imageUrl"
        class="card-image ml-8 mt-8"
        max-height="200"
        max-width="200"
      ></v-img>
      <v-card-title class="card-title mt-8">
        {{ title }}
      </v-card-title>
    </div>
    <span class="card-info ml-8 mb-4 align-end">
      Contact person: {{ contactPerson }}
    </span>
  </v-card>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  contactPerson: {
    type: String,
    required: true,
  },
  circleColor: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.card {
  width: 600px; /* Adjust the width as needed */
  height: 300px; /* Adjust the height as needed */
  background: linear-gradient(71deg, #b5bebf, #c9c9c9, #b5bebf);

  border-radius: 12px;
  border: 1px solid transparent; /* Set the border width */
  background-image: linear-gradient(white, white),
    linear-gradient(to right, #006837, #3ab54a, #006837);
  border-image-slice: 1;
  background-origin: border-box;
  background-clip: content-box, border-box;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.img-title {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.card-image {
  flex: 1;
  object-fit: cover;
}

.card-title {
  flex: 2;
  font-weight: bold;
  white-space: normal;
  text-align: right;
}

.card-info {
  color: #555;
  display: flex;
  height: 100%;
  align-items: flex-end;
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 10px; /* Create a circle by setting border-radius to 50% */
  position: absolute;
  top: 12px;
}

.info-btn {
  position: absolute;
  font-size: 25px !important;
  right: 10px;
  top: 10px;
  color: #fff;
  font-size: 30px;
}
</style>
