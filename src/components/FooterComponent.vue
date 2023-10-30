<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__container-element">
        <h3>Contact Us</h3>
        <p>E-mail:</p>
        <p>Phone:</p>
      </div>
      <div class="footer__container-element">
        <h3>Follow Us</h3>
        <div class="icons">
          <a href="https://www.facebook.com/" target="_blank">
            <v-icon>mdi-facebook</v-icon>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <v-icon>mdi-instagram</v-icon>
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <v-icon>mdi-linkedin</v-icon>
          </a>
        </div>
      </div>
      <div class="footer__container-element">
        <img :src="erasmus_logo" alt="erasmus_logo" />
        <p>2023-1-RO01-KA220-HED-000158031</p>
      </div>
    </div>
    <div class="footer__container">
      <div class="footer__container-element">
        <p>© 2023 All rights reserved.</p>
      </div>
      <div class="footer__container-element">
        <img :src="angie_logo" alt="angie_logo" class="logo" />
      </div>
    </div>
  </div>
  <div class="wave">
    <img class="ivyLeft" :src="ivyLeft" alt="" />
    <img class="ivyRight" :src="ivyRight" alt="" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style="display: block"
    >
      <path
        fill="#1F1E05"
        fill-opacity="1"
        d="M0,0L80,21.3C160,43,320,85,480,85.3C640,85,800,43,960,21.3C1120,0,1280,0,1360,0L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        style="--darkreader-inline-fill: #007acc"
        data-darkreader-inline-fill=""
      ></path>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import ivyLeft from "@/assets/images/footer/ivy_left.png";
import ivyRight from "@/assets/images/footer/ivy_right.png";
import erasmus_logo from "@/assets/images/footer/erasmus_logo.png";
import angie_logo from "@/assets/images/footer/angie_logo.png";
</script>

<style lang="scss" scoped>
.wave {
  background-color: #e2dcde;
  padding-top: 300px;
  z-index: 0;
}

.ivyLeft {
  position: absolute;
  bottom: 12vw;
  //width: 16vw;
  width: 300px;
  //bottom: 15rem;
  z-index: 0;
}

.ivyRight {
  position: absolute;
  //bottom: 10rem;
  bottom: 8vw;
  //width: 24vw;
  width: 450px;
  right: 0;
  z-index: 0;
}

.footer {
  position: absolute;
  bottom: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.footer__container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem 0;
  z-index: 2;
}

.footer__container-element {
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: 100%;
    //max-width: 15vw;
    max-width: 300px;
  }
}

.footer__container-element h3 {
  color: #e2dcde;
  -webkit-text-stroke: 0.5px black;
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 1rem;
}

.footer__container-element p {
  color: #e2dcde;
  -webkit-text-stroke: 0.5px black;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.footer__container-element img {
  margin-bottom: 1rem;
}
.icons {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 25px;
  color: #e2dcde;
  // -webkit-text-stroke: 0.5px black;
  cursor: pointer;
}

a {
  text-decoration: none; /* Remove the underline */
  color: inherit; /* Inherit the text color from the parent element */
}

@media screen and (max-width: 940px) {
  .footer__container {
    flex-direction: column; /* Stack elements vertically on smaller screens */
    padding: 0;
  }

  .footer__container-element {
    margin-bottom: 2rem;
  }
  .footer__container-element h3 {
    font-size: 28px; /* Adjust the font size for smaller screens */
  }

  .footer__container-element p {
    font-size: 16px; /* Adjust the font size for smaller screens */
  }

  .footer__container-element img {
    max-width: 80%; /* Adjust image size for smaller screens */
  }

  .icons {
    font-size: 20px; /* Adjust the icon size for smaller screens */
  }
  .ivyLeft {
    width: 200px;
  }

  .ivyRight {
    width: 300px;
  }
}
</style>
