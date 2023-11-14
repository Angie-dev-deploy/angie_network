<template>
  <div class="bg wrapper heading-global">
    <div class="title-section">
      <v-img :src="angie_letter" max-height="200px" max-width="100px"></v-img>
      <h1 class="title gradient__text">Contact</h1>
    </div>
    <v-divider
      :thickness="4"
      color="#3AB54A"
      class="border-opacity-100 my-5 w-90"
    ></v-divider>
    <WorldMap />
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
      <a href="https://www.facebook.com/profile.php?id=61553343279250&sk=about_details" target="_blank">
        <v-icon color="#006837">mdi-facebook</v-icon>
      </a>
      <a href="https://www.instagram.com/angie._.project/" target="_blank">
        <v-icon color="#006837">mdi-instagram</v-icon>
      </a>
      <a href="https://www.linkedin.com/in/angie-project-a7398929b/" target="_blank">
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

          <v-snackbar v-model="errorSnackbar" color="error" timeout="3000">{{
            errorMessage
          }}</v-snackbar>
          <v-snackbar v-model="successSnackbar" color="success" timeout="3000"
            >Email sent successfully!</v-snackbar
          >
        </v-form>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import WorldMap from "@/components/WorldMap.vue";
import emailjs from "emailjs-com";
import constants from "@/shared/constants";
import angie_letter from "@/assets/images/letter.png";

import { ref, Ref } from "vue";

const emailRules = [
  (v: string) => !!v || "Email is required",
  (v: string) => /^\S+@\S+\.\S+$/.test(v) || "Email must be valid",
];

const errorSnackbar = ref(false);
const successSnackbar = ref(false);
const errorMessage = ref("");

const name = ref("");
const email = ref("");
const message = ref("");

const submitForm = () => {
  if (!validateEmail(email.value)) {
    showErrorSnackbar("Invalid email address");
    return;
  }

  emailjs.init("Uh0VS73Fa3-j3c1Dp");
  emailjs
    .send("service_s4pz3xc", "template_5vox5kk", {
      from_name: name.value,
      from_email: email.value,
      message: message.value,
    })
    .then(() => {
      // Clear form fields
      name.value = "";
      email.value = "";
      message.value = "";

      // Show success snackbar
      showSuccessSnackbar("Email sent successfully!");
    })
    .catch((error) => {
      showErrorSnackbar("Failed to send email. Please try again later.");
      console.error("Email sending failed:", error);
    });
};

const validateEmail = (email: string) => {
  return /^\S+@\S+\.\S+$/.test(email);
};

const showErrorSnackbar = (message: string) => {
  errorMessage.value = message;
  errorSnackbar.value = true;
};

const showSuccessSnackbar = (message: string) => {
  successSnackbar.value = true;
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

.title-section {
  display: flex;
  flex-direction: row;
  align-items: center;

  .v-img {
    margin: 0 20px;
    min-width: 120px !important;
    height: 188px !important;
  }
}

.title {
  font-size: 60px;
  font-weight: 800;
  text-align: center;
  padding-right: 100px;
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

  .title-section {
    flex-direction: column;

    .v-img {
      min-width: 80px !important;
    }
  }
}
</style>
