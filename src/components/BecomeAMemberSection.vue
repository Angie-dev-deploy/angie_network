<template>
  <div v-if="!isMobile" class="become-a-member-wrapper--desktop">
    <div class="become-a-member-card--desktop">
      <span>We want you in the ANGIE Community!</span>
      <v-btn class="become-a-member-btn--dektop" @click="goToBecomeAMember">
        Become a member!
      </v-btn>
    </div>
  </div>
  <div v-if="isMobile" class="become-a-member-wrapper--mobile">
    <div class="become-a-member-card--mobile">
      <span class="mb-4">We want you in the ANGIE Community!</span>
      <v-btn class="become-a-member-btn--mobile" @click="goToBecomeAMember">
        Become a member!
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  isMobile: Boolean,
});

const goToBecomeAMember = () => {
  router.push("/partners#becoming-a-member");
};
</script>

<style lang="scss" scoped>
.become-a-member {
  &-wrapper {
    &--desktop {
      background-color: #f5f5f5;
      padding: 2rem 3rem;
      text-align: center;
      font-size: 1.5rem;
    }

    &--mobile {
      background-color: #f5f5f5;
      padding: 1rem 1.5rem;
      text-align: center;
      font-size: 1.5rem;
    }
  }

  &-card {
    &--desktop {
      background-color: #fff;
      padding: 16px 36px;
      border-radius: 10px;
      border: 2px solid rgb(var(--v-theme-primary));
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-weight: bold;
    }

    &--mobile {
      background-color: #fff;
      padding: 16px 24px;
      border-radius: 10px;
      border: 2px solid rgb(var(--v-theme-primary));
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-weight: bold;
    }
  }

  &-btn {
    &--dektop {
      background-color: rgb(var(--v-theme-primary));
      color: #fff;
      text-transform: none;
      font-size: 24px;
      letter-spacing: 1px;
    }

    &--mobile {
      background-color: rgb(var(--v-theme-primary));
      color: #fff;
      text-transform: none;
      font-size: 20px;
      letter-spacing: 1px;
    }
  }
}
</style>
