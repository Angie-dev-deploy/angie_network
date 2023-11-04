<template>
  <div class="bg wrapper heading-global">
    <span class="title py-4 gradient__text">Contact</span>
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
}

@media screen and (max-width: 550px) {
  .contact-items {
    font-size: 1rem;
  }
}
</style>
