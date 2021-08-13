<template>
  <section>
    <button
      class="minus"
      variant="outline-danger"
      @click="$store.commit('removeEl', product.id)"
    >
      -
    </button>
    <p class="quantiy">{{ elInCartLength(product.id) }}</p>
    <button
      variant="outline-danger"
      @click="$store.commit('addItem', product.id)"
    >
      +
    </button>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: {
    product: Object
  },
  name: "PlusAndMinus",
  computed: {
    ...mapGetters(["elInCartLength"])
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/var.scss";
@import "~/assets/scss/animations.scss";
@import "~/assets/scss/mixins.scss";

section {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-size: 1.5rem;
    background-color: rgb(47, 253, 47);
    color: white;
    text-shadow: 1px 1px 1px black;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    &.minus {
      background-color: $brand;
    }
    &:hover {
      animation: big-pulse 1s;
    }
  }
  .quantiy {
    color: $title;
    background-color: transparent;
  }
}
</style>
