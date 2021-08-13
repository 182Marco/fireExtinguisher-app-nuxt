<template>
  <div class="container">
    <h2>
      {{ info.title }}
    </h2>
    <p>
      {{ info.description }}
    </p>
    <div class="cards-box">
      <Card
        v-for="card in info.cards"
        :key="`card_${card.id}`"
        :card="card"
        :small="small"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "LargeCardDisplay",
  props: {
    info: Object,
    small: Boolean
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/var.scss";

.container {
  padding: 0;
  margin-top: 100px;
  h2 {
    font-weight: 700;
    color: $title;
  }
  .cards-box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
}
</style>
