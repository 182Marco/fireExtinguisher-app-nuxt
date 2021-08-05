<template>
  <div class="card" :class="{ s: small }">
    <NuxtLink :to="`products/${card.id}`" class="img-box" :class="{ s: small }">
      <img
        :src="require(`@/assets/img/${card.img || 'notfound.png'}`)"
        :alt="card.title"
      />
    </NuxtLink>
    <h4>{{ card.title }}</h4>
    <p>{{ card.description }}</p>
  </div>
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
  background-color: $bg;
  border: none;
  /* if there's prop small */
  &.s {
    width: calc(100% / 6 - 12px);
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
    background-color: $text;
    border: none;
    margin-bottom: 20px;
  }
  .img-box {
    width: 100%;
    height: 200px;
    /* if there's prop small */
    &.s {
      height: 100px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
  h4 {
    font-weight: 700;
    margin-top: 15px;
  }
}
</style>
