<template>
  <div class="card-list">
    <Card
      v-for="(card, index) in cards"
      :key="index"
      :image-url="card.imageUrl"
      :title="card.title"
      :description="card.description"
    />
  </div>
</template>

<script>
import CardPartners from "./CardPartners.vue";

export default {
  components: {
    CardPartners,
  },
  data() {
    return {
      cards: [
        {
          imageUrl: "your-image-url-1.jpg",
          title: "Card 1",
          description: "Description for Card 1",
        },
        {
          imageUrl: "your-image-url-2.jpg",
          title: "Card 2",
          description: "Description for Card 2",
        },
        // Add more cards as needed
      ],
    };
  },
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
