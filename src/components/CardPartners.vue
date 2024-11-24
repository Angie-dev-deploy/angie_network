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
        <span class="card-info ml-8 mb-4 align-end">
          Contact person: {{ contactPerson }}
        </span>
      </v-card-title>
    </div>
    <v-card-text class="email-section">
      <div class="email-row">
        <v-col class="email-col--1" v-if="uniInfo && uniInfo.email1">
          <v-icon class="mr-2">mdi-email</v-icon>
          <a href="mailto:{{ uniInfo.email1 }}">{{ uniInfo.email1 }}</a>
        </v-col>
        <v-col class="email-col--2" v-if="uniInfo && uniInfo.email2">
          <v-icon class="mr-2">mdi-email</v-icon>
          <a href="mailto:{{ uniInfo.email2 }}">{{ uniInfo.email2 }}</a>
        </v-col>
      </div>
    </v-card-text>
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
  uniInfo: {
    type: Object,
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

@media screen and (max-width: 550px) {
  .card {
    width: 100%;
    height: fit-content;
  }
  .email-row {
    flex-direction: column !important;
  }
  .email-col--2 {
    border-left: none !important;
  }
  .img-title {
    flex-direction: column;
    .card-image {
      order: 2;
      height: 100px;
      width: 100px;
      margin: 16px !important;
    }
  }
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
  justify-content: flex-end;
  font-weight: 400;
  font-size: 16px;
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

.email-section {
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: fit-content;
}

.email-row {
  font-size: 16px;
  display: flex;
  flex-direction: row;
}

.email-col--1,
.email-col--2 {
  display: flex;
  align-items: center; /* Align icon and text vertically */
  border-top: #006837 1px solid;
  padding: 12px 24px;
  min-height: fit-content;
  overflow: hidden; /* Prevent content from overflowing */
}

.email-col--2 {
  border-left: #006837 1px solid;
}

.email-col--1 a,
.email-col--2 a {
  color: #006837;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* Prevent wrapping of text */
  display: inline-block; /* Ensures the element respects truncation */
  flex: 1; /* Allow the text to take up available space */
}

.email-col--1 .v-icon,
.email-col--2 .v-icon {
  margin-right: 8px; /* Space between the icon and the text */
  flex-shrink: 0; /* Prevent the icon from shrinking */
}
</style>
