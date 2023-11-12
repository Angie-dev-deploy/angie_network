<template>
  <div class="content-wrapper">
    <div class="content">
      <h1>UNDER CONSTRUCTION</h1>
      <p>{{ constants.underConstruction.content }}</p>
    </div>
    <div class="icons">
      <UnderConstructionIcon class="icon" /> <LaptopDudeIcon class="icon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import UnderConstructionIcon from "@/assets/icons/UnderConstructionIcon.vue";
import LaptopDudeIcon from "@/assets/icons/LaptopDudeIcon.vue";
import constants from "@/shared/constants";
</script>

<style lang="scss" scoped>
.content-wrapper {
  background-color: #e2dcde;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.icons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: #006837;
  font-size: 3rem;
  margin-bottom: 5rem;
  width: 100%;
}

.content {
  margin: 3rem 3rem;
  text-align: center;

  p {
    color: #006837;
    font-size: 24px;
    font-weight: 600;
  }
}

.icon {
  max-width: 200px;
}

@media screen and (max-width: 770px) {
  .icon {
    max-width: 150px;
  }

  .content {
    margin: 3rem 1rem;

    p {
      font-size: 18px;
    }
  }
}

@media screen and (max-width: 550px) {
  .icon {
    max-width: 100px;
  }

  .content {
    margin: 3rem 1rem;

    h1 {
      font-size: 24px;
    }

    p {
      font-size: 16px;
    }
  }
}
</style>
