<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>calendar-edit</title>
      <path
        d="M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H10V19H5V8H19V9H21V5A2,2 0 0,0 19,3M21.7,13.35L20.7,14.35L18.65,12.35L19.65,11.35C19.85,11.14 20.19,11.13 20.42,11.35L21.7,12.63C21.89,12.83 21.89,13.15 21.7,13.35M12,18.94L18.07,12.88L20.12,14.88L14.06,21H12V18.94Z"
      />
    </svg>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
svg {
  width: 90px;
  height: 90px;
  fill: #006837;
}

@media (max-width: 770px) {
  svg {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 550px) {
  svg {
    width: 40px;
    height: 40px;
  }
}
</style>
