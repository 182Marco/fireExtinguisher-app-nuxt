<template>
  <NuxtLink :to="`products/${card.id}`" class="card" :class="{ s: small }">
    <img
      :class="{ s: small }"
      :src="require(`@/assets/img/${card.img || 'notfound.png'}`)"
      :alt="card.title"
    />
    <h4>{{ card.title }}</h4>
    <p>{{ card.description }}</p>
  </NuxtLink>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: Object,
    small: Boolean
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";
.card {
  @include media-desk-first(xs-desktop) {
    margin-bottom: 30px;
    width: calc(100% / 2 - 20px);
  }
  @include media-desk-first(s-tablet) {
    width: 100%;
  }
  width: calc(100% / 3 - 20px);
  margin-right: 20px;
  border: none;
  /* if there's prop small */
  &.s {
    filter: brightness(1);
    padding: 0;
    height: 95px;
    width: calc(100% / 6 - 12px);
    height: 88px;
    @include media-desk-first(xs-desktop) {
      margin-bottom: 30px;
      width: calc(100% / 4 - 20px);
    }
    @include media-desk-first(s-tablet) {
      width: calc(100% / 3 - 20px);
    }
    @include media-desk-first(l-phone) {
      width: calc(100% / 2 - 20px);
    }
    margin-right: 12px;
    background-color: $bg;
    border: none;
    margin-bottom: 20px;
  }
  img {
    border-radius: 5px;
  }
  h4 {
    font-weight: 700;
    margin-top: 15px;
    color: white;
  }
  padding: 15px;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  filter: brightness(0.85);
  transition: all 0.25s;
  &:hover {
    transform: scale(1.01);
    box-shadow: 2px 2px 10px 6px rgba(0, 0, 0, 0.3);
    &.s {
      transform: scale(1.05);
    }
  }
}
</style>
