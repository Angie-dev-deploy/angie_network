<template>
  <div class="about_wrapper">
    <div class="about--left">
      <span class="title">ABOUT THE PROJECT</span>
      <span class="text"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab obcaecati
        tenetur omnis voluptate rem dolore aliquid harum ratione optio fuga
        veritatis iste illum debitis ipsum temporibus, consequuntur nam mollitia
        repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
        obcaecati tenetur omnis voluptate rem dolore aliquid harum ratione optio
        fuga veritatis iste illum debitis ipsum temporibur omnis voluptate rem
        dolore aliquid harum ratione optio fuga veritatis iste illum debitis
        ipsum temporibus, consequuntur nam mollitia repellendus?</span
      >
    </div>
    <div class="about--right">
      <span class="text" v-if="!screenSizeMobile"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab obcaecati
        tenetur omnis voluptate rem dolore aliquid harum ratione optio fuga
        veritatis iste illum debitis ipsum temporibus, consequuntur nam mollitia
        repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
        obcaecati tenetur omnis voluptate rem dolore aliquid harum ratione optio
        fuga veritatis iste illum debitis ipsum temporibus, consequuntur nam
        mollitia repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ab obcaecati tenetur omnis voluptate rem dolore aliquid harum
        ratione optio fuga veritatis iste illum debim dolore aliquid harum
        ratione optio fuga veritatis iste illum debitis ipsum temporibus,
        consequuntur nam mollitia repellendus?Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Ab obcaecati tenetur omnis voluptate rem
        dolore aliquid harum ratione optio fuga veritatis iste illum debitis
        ipsum temporibus, consequuntur nam mollitia repellendus?</span
      >
      <span class="w-full d-flex mt-4 button-wrapper">
        <v-btn :elevation="0" style="background: transparent"
          >Learn More <v-icon>mdi-page-last</v-icon>
        </v-btn>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch } from "vue";
import { ref, onMounted, computed } from "vue";

const screenSizeMobile = computed(() => windowWidth.value < 800);

const windowWidth = ref(window.innerWidth);

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  // Set up a watch for window width changes
  watch(windowWidth, (newWidth, oldWidth) => {
    console.log("Window width changed from", oldWidth, "to", newWidth);
  });

  // Add a window resize event listener to update the windowWidth value
  window.addEventListener("resize", updateWindowWidth);
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1400px) {
  .about_wrapper {
    flex-direction: column !important;
  }

  .about {
    &--left {
      max-width: 100% !important;
      justify-content: center !important;
      align-items: center !important;
      .title {
        font-size: 2rem !important;
        margin: 0 2rem !important;
        margin-bottom: 4rem !important;
      }
      .text {
        font-size: 1rem !important;
        padding: 0 2rem !important;
      }
    }

    &--right {
      max-width: 100% !important;
      .text {
        font-size: 1rem !important;
        padding: 0 2rem !important;
      }
    }
  }
}

.about_wrapper {
  background-color: #e2dcde;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 3rem 0;
}

.about {
  &--left {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 40vw;
    .title {
      font-weight: bold;
      font-size: 3.5vw;
      background: linear-gradient(90deg, #006837 0%, #00a551 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .text {
      font-size: 1.5rem;
      text-align: justify;
    }
  }

  &--right {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 40vw;
    margin-top: 0.5rem;
    .text {
      font-size: 1.5rem;
      text-align: justify;
    }

    .button-wrapper {
      justify-content: flex-end;
    }

    .v-btn {
      color: #006837;
      font-weight: bold;
    }
  }
}
</style>
