<template>
  <div class="card" :class="{ s: small }">
    <div class="img-box" :class="{ s: small }">
      <img
        :src="require(`@/assets/img/${card.img || 'notfound.png'}`)"
        :alt="card.title"
      />
    </div>
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
  width: calc(100% / 3 - 50px);
  margin-right: 50px;
  background-color: $bg;
  border: none;
  /* if there's prop small */
  &.s {
    width: calc(100% / 6 - 12px);
    margin-right: 12px;
    background-color: $text;
    border: none;
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
