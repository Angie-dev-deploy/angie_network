<template>
  <div class="about_wrapper">
    <div class="about--left">
      <span class="title">About the Project</span>
      <v-divider
        :thickness="4"
        color="#3AB54A"
        class="border-opacity-100 my-4"
        :class="{ 'w-75': screenSize1400 }"
      ></v-divider>
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
        <v-btn
          :elevation="0"
          style="background: transparent"
          @click="showAboutDialog()"
          >Learn More <v-icon>mdi-page-last</v-icon>
        </v-btn>
      </span>
    </div>
  </div>
  <v-dialog v-model="isAboutDialogOpen" overlay>
    <v-card>
      <div class="pop-up_text-box">
        <p class="pop-up_text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab obcaecati
          tenetur omnis voluptate rem dolore aliquid harum ratione optio fuga
          veritatis iste illum debitis ipsum temporibus, consequuntur nam
          mollitia repellendus?Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Ab obcaecati tenetur omnis voluptate rem dolore
          aliquid harum ratione optio fuga veritatis iste illum debitis ipsum
          temporibus, consequuntur nam mollitia repellendus?Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Ab obcaecati tenetur omnis
          voluptate rem dolore aliquid harum ratione optio fuga veritatis iste
          illum debim dolore aliquid harum ratione optio fuga veritatis iste
          illum debitis ipsum temporibus, consequuntur nam mollitia
          repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Ab obcaecati tenetur omnis voluptate rem dolore aliquid harum ratione
          optio fuga veritatis iste illum debitis ipsum temporibus, consequuntur
          nam mollitia repellendus?
        </p>
        <br />
        <p class="pop-up_text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab obcaecati
          tenetur omnis voluptate rem dolore aliquid harum ratione optio fuga
          veritatis iste illum debitis ipsum temporibus, consequuntur nam
          mollitia repellendus?Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Ab obcaecati tenetur omnis voluptate rem dolore
          aliquid harum ratione optio fuga veritatis iste illum debitis ipsum
          temporibus, consequuntur nam mollitia repellendus?Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Ab obcaecati tenetur omnis
          voluptate rem dolore aliquid harum ratione optio fuga veritatis iste
          illum debim dolore aliquid harum ratione optio fuga veritatis iste
          illum debitis ipsum temporibus, consequuntur nam mollitia
          repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Ab obcaecati tenetur omnis voluptate rem dolore aliquid harum ratione
          optio fuga veritatis iste illum debitis ipsum temporibus, consequuntur
          nam mollitia repellendus?
        </p>
        <br />
        <p class="pop-up_text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab obcaecati
          tenetur omnis voluptate rem dolore aliquid harum ratione optio fuga
          veritatis iste illum debitis ipsum temporibus, consequuntur nam
          mollitia repellendus?Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Ab obcaecati tenetur omnis voluptate rem dolore
          aliquid harum ratione optio fuga veritatis iste illum debitis ipsum
          temporibus, consequuntur nam mollitia repellendus?Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Ab obcaecati tenetur omnis
          voluptate rem dolore aliquid harum ratione optio fuga veritatis iste
          illum debim dolore aliquid harum ratione optio fuga veritatis iste
          illum debitis ipsum temporibus, consequuntur nam mollitia
          repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Ab obcaecati tenetur omnis voluptate rem dolore aliquid harum ratione
          optio fuga veritatis iste illum debitis ipsum temporibus, consequuntur
          nam mollitia repellendus?
        </p>
        <br />
        <p class="pop-up_text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab obcaecati
          tenetur omnis voluptate rem dolore aliquid harum ratione optio fuga
          veritatis iste illum debitis ipsum temporibus, consequuntur nam
          mollitia repellendus?Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Ab obcaecati tenetur omnis voluptate rem dolore
          aliquid harum ratione optio fuga veritatis iste illum debitis ipsum
          temporibus, consequuntur nam mollitia repellendus?Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Ab obcaecati tenetur omnis
          voluptate rem dolore aliquid harum ratione optio fuga veritatis iste
          illum debim dolore aliquid harum ratione optio fuga veritatis iste
          illum debitis ipsum temporibus, consequuntur nam mollitia
          repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Ab obcaecati tenetur omnis voluptate rem dolore aliquid harum ratione
          optio fuga veritatis iste illum debitis ipsum temporibus, consequuntur
          nam mollitia repellendus?
        </p>
        <br />
        <p class="pop-up_text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab obcaecati
          tenetur omnis voluptate rem dolore aliquid harum ratione optio fuga
          veritatis iste illum debitis ipsum temporibus, consequuntur nam
          mollitia repellendus?Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Ab obcaecati tenetur omnis voluptate rem dolore
          aliquid harum ratione optio fuga veritatis iste illum debitis ipsum
          temporibus, consequuntur nam mollitia repellendus?Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Ab obcaecati tenetur omnis
          voluptate rem dolore aliquid harum ratione optio fuga veritatis iste
          illum debim dolore aliquid harum ratione optio fuga veritatis iste
          illum debitis ipsum temporibus, consequuntur nam mollitia
          repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Ab obcaecati tenetur omnis voluptate rem dolore aliquid harum ratione
          optio fuga veritatis iste illum debitis ipsum temporibus, consequuntur
          nam mollitia repellendus?
        </p>
        <br />
        <p class="pop-up_text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab obcaecati
          tenetur omnis voluptate rem dolore aliquid harum ratione optio fuga
          veritatis iste illum debitis ipsum temporibus, consequuntur nam
          mollitia repellendus?Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Ab obcaecati tenetur omnis voluptate rem dolore
          aliquid harum ratione optio fuga veritatis iste illum debitis ipsum
          temporibus, consequuntur nam mollitia repellendus?Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Ab obcaecati tenetur omnis
          voluptate rem dolore aliquid harum ratione optio fuga veritatis iste
          illum debim dolore aliquid harum ratione optio fuga veritatis iste
          illum debitis ipsum temporibus, consequuntur nam mollitia
          repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Ab obcaecati tenetur omnis voluptate rem dolore aliquid harum ratione
          optio fuga veritatis iste illum debitis ipsum temporibus, consequuntur
          nam mollitia repellendus?
        </p>
        <br />
        <p class="pop-up_text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab obcaecati
          tenetur omnis voluptate rem dolore aliquid harum ratione optio fuga
          veritatis iste illum debitis ipsum temporibus, consequuntur nam
          mollitia repellendus?Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Ab obcaecati tenetur omnis voluptate rem dolore
          aliquid harum ratione optio fuga veritatis iste illum debitis ipsum
          temporibus, consequuntur nam mollitia repellendus?Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Ab obcaecati tenetur omnis
          voluptate rem dolore aliquid harum ratione optio fuga veritatis iste
          illum debim dolore aliquid harum ratione optio fuga veritatis iste
          illum debitis ipsum temporibus, consequuntur nam mollitia
          repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Ab obcaecati tenetur omnis voluptate rem dolore aliquid harum ratione
          optio fuga veritatis iste illum debitis ipsum temporibus, consequuntur
          nam mollitia repellendus?
        </p>
      </div>
      <v-btn @click="closeAboutDialog" class="pop-up_button">Close</v-btn>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { watch } from "vue";
import { ref, onMounted, computed } from "vue";

const screenSizeMobile = computed(() => windowWidth.value < 770);
const screenSize1400 = computed(() => windowWidth.value < 1400);

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

const isAboutDialogOpen = ref(false);

const showAboutDialog = () => {
  isAboutDialogOpen.value = true;
};

const closeAboutDialog = () => {
  isAboutDialogOpen.value = false;
};
</script>

<style lang="scss" scoped>
.pop-up_text-box {
  margin: 3rem 4rem;
  max-width: 100%;
  overflow-y: auto;
  max-height: 80vh;
}
.pop-up_text {
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: justify;
}

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
        margin: 0 2rem !important;
        margin-bottom: 4rem;
        text-align: center !important;
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

@media screen and (max-width: 770px) {
  .title {
    font-size: 46px !important;
    margin-bottom: 2rem !important;
  }

  .text {
    padding: 0 !important;
  }
}

@media screen and (max-width: 550px) {
  .title {
    font-size: 34px !important;
    margin-bottom: 1rem !important;
  }
}

.about_wrapper {
  background-color: #e2dcde;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3rem;
}

.about {
  &--left {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 45vw;
    .title {
      font-weight: 800;
      font-size: 62px;
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
    max-width: 45vw;
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
