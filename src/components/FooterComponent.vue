<template>
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

<script setup>
import ivyLeft from "@/assets/images/footer/ivy_left.png";
import ivyRight from "@/assets/images/footer/ivy_right.png";
</script>

<style lang="scss" scoped>
.wave {
  background-color: #e2dcde;
  padding-top: 200px;
}

.ivyLeft {
  position: absolute;
  bottom: 15rem;
}

.ivyRight {
  position: absolute;
  bottom: 10rem;
  right: 0;
}
</style>
