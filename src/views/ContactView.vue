<template>
  <div class="bg wrapper heading-global">
    <h1 class="title py-4 gradient__text">Contact</h1>
    <v-divider
      :thickness="4"
      color="#3AB54A"
      class="border-opacity-100 my-4 w-75"
    ></v-divider>
    <PartnersNetwork />
    <span class="contact-items-section">
      <span class="contact-items">
        <v-icon class="mx-2" small>mdi-email</v-icon>
        <span>Email:</span>
        <a href="mailto: angie.project.2023@gmail.com" class="mx-2"
          >angie.project.2023@gmail.com</a
        >
      </span>
      <span class="contact-items">
        <v-icon class="mx-2" small>mdi-phone</v-icon>
        <span>Phone:</span>
        <a href="tel: +40723684262" class="mx-2">+40723684262</a>
      </span>
    </span>

    <div class="icons">
      <a href="https://www.facebook.com/" target="_blank">
        <v-icon color="#006837">mdi-facebook</v-icon>
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <v-icon color="#006837">mdi-instagram</v-icon>
      </a>
      <a href="https://www.linkedin.com/" target="_blank">
        <v-icon color="#006837">mdi-linkedin</v-icon>
      </a>
    </div>
    <div class="form">
      <div class="phrase">
        <v-icon class="mr-5">mdi-lightbulb-on-outline</v-icon>
        <p>Do you have any questions for us?</p>
      </div>
      <v-container>
        <v-form @submit.prevent="submitForm" class="d-flex flex-column">
          <v-text-field v-model="name" label="Name" required></v-text-field>
          <v-text-field v-model="email" label="Email" required></v-text-field>
          <v-textarea v-model="message" label="Message" required></v-textarea>
          <v-btn type="submit" color="primary">Submit</v-btn>
        </v-form>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PartnersNetwork from "@/components/PartnersNetwork.vue";

import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

const submitForm = () => {
  // Handle the form submission here (e.g., send data to the server)
  // You can use Axios or any other HTTP library to send the data.
  console.log("Name:", name.value);
  console.log("Email:", email.value);
  console.log("Message:", message.value);

  // Reset the form
  name.value = "";
  email.value = "";
  message.value = "";
};
</script>

<style lang="scss" scoped>
.phrase {
  display: flex;
  font-size: 3rem;
  margin: 0 1rem 2rem 1rem;
  color: #006837;
  font-weight: 800;
  p {
    text-align: center;
  }
  align-items: center;
}

.wrapper {
  margin: 0;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  align-items: center;
}

.contact-items {
  font-size: 1.5rem;
  text-align: left;

  display: flex;
  align-items: center;
  margin: 1rem 0;

  color: #006837;
  font-weight: 600;

  a {
    color: #3ab54a;
  }
}

.icons {
  width: 60%;
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: #006837;
  font-size: 3rem;
  margin-bottom: 5rem;
}

@media screen and (max-width: 550px) {
  .contact-items {
    font-size: 1rem;
  }
  .phrase {
    font-size: 1.2rem;
  }
  .icons {
    font-size: 2rem;
  }
}
</style>
